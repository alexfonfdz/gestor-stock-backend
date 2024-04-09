import app from "./server/app.js";
import { connectDB } from "./db/db.js";
import { PORT } from "./server/config.js";

connectDB();

app.listen(PORT || 3000, () => {
    console.log("Servidor corriendo en el puerto", PORT);
});