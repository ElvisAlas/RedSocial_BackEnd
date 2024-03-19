import Express from "express";
import multer from "multer";
import { getPublicaciones,postPublicacion,postComentario,GetComentario } from "../Controller/ControllerPublicacionUsuario.js";

const publicacion = Express();
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

publicacion.post('', postPublicacion);
publicacion.get ('' , getPublicaciones);
publicacion.post('/comentario', postComentario);
publicacion.get('/comentarios/:IDHeader', GetComentario);
export { publicacion };
