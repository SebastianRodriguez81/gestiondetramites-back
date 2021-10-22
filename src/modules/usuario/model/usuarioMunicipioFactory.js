import getDaoUsuario from "../persitence/elephant/daoUsuarioCiudadElephantFactory.js";
import crearUsuarioCiduadano from "./usuarioMunicipio.js";
//usamos el mismo dao de usuario o usamos uno que sea de usuario Municipio??
let daoUsuario = getDaoUsuario();
let usuarioMunicipio = crearUsuarioMunicipio(daoUsuario);

function getUsuarioMunicipio() {
    return usuarioMunicipio;
}

export default getUsuarioMunicipio;
