import mongoose from "mongoose";

const cloudURI = "mongodb+srv://CALAPAQUI:1924@cluster0.je9ec.mongodb.net/";

const connectDB = async () => {
  try {
    await mongoose.connect(cloudURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Conexión exitosa a MongoDB en la nube");
  } catch (error) {
    console.error("Error conectando a MongoDB en la nube:", error.message);
    process.exit(1); // Termina el proceso en caso de error
  }
};

// Exportación por defecto
export default connectDB;


/*
import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/datos", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Conexión exitosa a MongoDB en localhost");
  } catch (error) {
    console.error("Error conectando a MongoDB en localhost:", error.message);
    process.exit(1); // Termina el proceso en caso de error
  }
};

// Exportación por defecto
export default connectDB;
*/

