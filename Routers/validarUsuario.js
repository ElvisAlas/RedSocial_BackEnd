import express from "express";
import { GetUsuario } from "../Controller/ValidarUsuario.js";

const validarUsuario = express.Router();

// Definir la ruta para validar usuario
validarUsuario.get('/:Usuario/:Contrasena', GetUsuario);

export { validarUsuario };
