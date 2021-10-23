import getUsuario from "../model/usuarioFactory.js";
import crearObtenerUsuario from "./obtenerUsuarios.js"

let usuario = getUsuario()
let obtenerUsuario = crearObtenerUsuario(usuario)

function getObtenerUsuarios() {return obtenerUsuario}

export default getObtenerUsuarios