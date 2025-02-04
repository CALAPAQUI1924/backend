import { Router } from "express";
import { EstudiantesController } from "../controllers/estudiantesController.js";
export const EnrutadorEstudiante = (modelo) => {
  const controlador = new EstudiantesController(modelo);
  const estudianteRouter = Router();

  estudianteRouter.get("/", controlador.getAll);
  estudianteRouter.get("/:id", controlador.getOneById);
  estudianteRouter.post("/", controlador.create);
  estudianteRouter.put("/:id", controlador.update);
  estudianteRouter.delete("/:id", controlador.delete);

  return estudianteRouter;
};
