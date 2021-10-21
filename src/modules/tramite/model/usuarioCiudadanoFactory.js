import getDaoUsuario from "../persitence/elephant/daoUsuarioCiudadElephantFactory.js";
import crearUsuarioCiduadano from "./usuarioCiudadano.js";
//usamos el mismo dao de usuario o usamos uno que sea de usuario ciudadano??
let daoUsuario = getDaoUsuario();
let usuarioCiudadano = crearUsuarioCiduadano(daoUsuario);

function getUsuarioCiudadano() {
    return usuarioCiudadano;
}

export default getUsuarioCiudadano;
