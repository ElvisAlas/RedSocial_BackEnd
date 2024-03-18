import Express from "express";
import multer from "multer";
import { getPublicaciones,postPublicacion } from "../Controller/ControllerPublicacionUsuario.js";

const publicacion = Express();
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

publicacion.post('', upload.single('imagen'), postPublicacion);
publicacion.get ('' , getPublicaciones);

export { publicacion };
