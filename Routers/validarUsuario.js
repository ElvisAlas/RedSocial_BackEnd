import express from "express";
import { GetUsuario } from "../Controller/ValidarUsuario.js";

const validarUsuario = express.Router();

validarUsuario.get('/:Usuario/:Contrasena', GetUsuario);

export { validarUsuario };
