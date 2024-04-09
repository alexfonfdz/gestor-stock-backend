import mongoose from 'mongoose';
import UserType from '../models/userType.model.js';
import MovementType from '../models/movementType.model.js';
import UnitType from '../models/unitType.model.js'

export const mongoData = async (req, res, next) => {
    const userTypes = ['Propietario', 'Administrador', 'Usuario'];
    const movementTypes = ['Insert', 'Update', 'Disable'];
    const unitType = ['Kg', 'Lt', 'Latas', 'Botellas', 'Unidades', 'Oz', 'Lb', 'Piezas', 'Otros'];

    for (const userType of userTypes) {
        if (await mongoose.model('UserType').findOne({ nameUserType: userType })) continue;
        const newUserType = new UserType({ nameUserType: userType });
        await newUserType.save();
    }

    for (const movementType of movementTypes) {
        if (await mongoose.model('MovementType').findOne({ nameMovementType: movementType })) continue;
        const newMovementType = new MovementType({ nameMovementType: movementType });
        await newMovementType.save();
    }

    for (const type of unitType) {
        if (await mongoose.model('UnitType').findOne({ nameUnitType: type })) continue;
        const newUnitType = new UnitType({ nameUnitType: type });
        await newUnitType.save();   
    }
};

