import mongoose from "mongoose";

// Define the Mongoose schema
const estudianteSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  edad: { type: Number, required: true },
  promedio: { type: Number, required: true },
  direccion: { type: String, required: true },

  
  cedula: { type: String, required: true },
});

// Create the Mongoose model
const EstudianteModel = mongoose.model("Estudiante", estudianteSchema);

export class Estudiante {
  constructor(nombre, edad, promedio, direccion, cedula) {
    this.nombre = nombre;
    this.edad = edad;
    this.promedio = promedio;
    this.direccion = direccion;
    this.cedula = cedula;
  }

  static async getAll() {
    return await EstudianteModel.find();
  }

  static async getOneById(id) {
    return await EstudianteModel.findById(id);
  }

  static async create(data) {
    const nuevoEstudiante = new EstudianteModel(data);
    return await nuevoEstudiante.save();
  }

  static async update(id, data) {
    return await EstudianteModel.findByIdAndUpdate(id, data, { new: true });
  }

  static async delete(id) {
    return await EstudianteModel.findByIdAndDelete(id);
  }
}
