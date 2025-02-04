
export class EstudiantesController {
  constructor(modelo) {
    this.modelo = modelo;
  }

  getAll = async (req, res) => {
    try {
      const estudiantesDatos = await this.modelo.getAll();
      res.json(estudiantesDatos);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  getOneById = async (req, res) => {
    try {
      const estudiante = await this.modelo.getOneById(req.params.id);
      if (!estudiante) {
        return res.status(404).json({ error: "Estudiante no encontrado" });
      }
      res.json(estudiante);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

  create = async (req, res) => {
    try {
      const nuevoEstudiante = await this.modelo.create(req.body);
      res.status(201).json(nuevoEstudiante);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

  update = async (req, res) => {
    try {
      const estudianteActualizado = await this.modelo.update(req.params.id, req.body);
      if (!estudianteActualizado) {
        return res.status(404).json({ error: "Estudiante no encontrado" });
      }
      res.json(estudianteActualizado);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

  delete = async (req, res) => {
    try {
      const eliminado = await this.modelo.delete(req.params.id);
      if (!eliminado) {
        return res.status(404).json({ error: "Estudiante no encontrado" });
      }
      res.status(204).end();
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
}