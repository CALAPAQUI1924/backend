import express from "express";
import cors from "cors"; 
import connectDB from "./models/db.js"; // Import the connectDB function
import { EnrutadorEstudiante } from "./routes/estudianteRoutes.js";
import { Estudiante } from "./models/estudiante.js";

const app = express();
const PORT = 3030;

app.use(cors()); 
app.use(express.json()); 

// Connect to MongoDB
connectDB();

app.use("/estudiantes", EnrutadorEstudiante(Estudiante));

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
