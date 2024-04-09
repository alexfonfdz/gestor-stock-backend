import { User, Organization, UserType } from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { createAccessToken } from "../libs/jwt.js";

export const register = async (req, res) => {
    const { username, email, password, nameOrganization } = req.body;
    
    try{

        const passwordHash = await bcrypt.hash(password, 10);

        const emailFound = await User.findOne({email, statusUser: true }).select("email");
        if(emailFound) return res.status(409).json({message: "Correo electrónico ya registrado"});
        if(email === "" || password === "" || username === "" || nameOrganization === "") return res.status(400).json({message: "Por favor, rellene todos los campos"});
        if(password.length < 8) return res.status(400).json({message: "La contraseña debe tener al menos 8 caracteres"});
        if(username.length < 4) return res.status(400).json({message: "El nombre de usuario debe tener al menos 4 caracteres"});
        if(nameOrganization.length < 3) return res.status(400).json({message: "El nombre de la organización debe tener al menos 3 caracteres"});
        if(!email.includes("@") || !email.includes(".")) return res.status(400).json({message: "Correo electrónico inválido"});
        

        const newOrganization = new Organization({
            nameOrganization,
        });

        const organizationSaved = await newOrganization.save();
        
        const newUser = new User({
            idOrganization: organizationSaved._id,
            idUserType: await UserType.findOne({nameUserType: "Propietario"})._id,
            username,
            email,
            password: passwordHash,
        });

        const userSaved = await newUser.save();
        const token = await createAccessToken({id: userSaved._id});

        res.cookie('token', token)
        res.json({
            user: {
                _id: userSaved._id,
                idOrganization: userSaved.idOrganization,
                idUserType: userSaved.idUserType,
                username: userSaved.username,
                email: userSaved.email,
            },
        });

    }catch(error){
        res.status(500).json({message: error.message});
    }

};

export const login = async (req, res) => {
    const { email, password } = req.body;
    
    try{

        const userFound = await User.findOne({email, statusUser: true });

        if(!userFound) return res.status(400).json({message: "Usuario no encontrado"});

        const isMatch = await bcrypt.compare(password, userFound.password);

        if(!isMatch) return res.status(400).json({message: "Contraseña incorrecta"});

        const token = await createAccessToken({id: userFound._id});

        res.cookie('token', token)
        res.json({
            user: {
                _id: userFound._id,
                idOrganization: userFound.idOrganization,
                idUserType: userFound.idUserType,
                username: userFound.username,
                email: userFound.email,
            },
        });

    }catch(error){
        res.status(500).json({message: error.message});
    }

};

export const logout = async (req, res) => {
    res.cookie('token', "",{expires: new Date(0)});
    res.json({message: "Cierre de sesión exitoso"});
    return res.sendStatus(200);
};

export const profile = async (req, res) => {
    const userFound = await User.findById(req.userId).select("-password");

    if(!userFound) return res.status(400).json({message: "Usuario no encontrado"});

    return res.json({user: userFound});
};