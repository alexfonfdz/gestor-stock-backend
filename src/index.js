import app from "./server/app.js";
import { connectDB } from "./db/db.js";
import { PORT } from "./server/config.js";
import { mongoData } from "./middlewares/mongoData.js";

connectDB();

app.listen(PORT || 3000, mongoData, () => {
    console.log(`Puerto iniciado en ${PORT || 3000}`);
});