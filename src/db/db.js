import moongose from "mongoose";
import { MONGO_DB_NAME, MONGO_URL } from "../server/config.js";

moongose.set('strictQuery', true);

export const connectDB = async () => {
    try {
        await moongose.connect(
            MONGO_URL, {dbName: MONGO_DB_NAME}
        );
        console.log("Conexión exitosa a MongoDB en el puerto", moongose.connection.port);
    } catch (error) {
        console.log("Error en la conexión a MongoDB", error);
    }
};
