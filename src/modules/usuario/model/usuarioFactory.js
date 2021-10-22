import getDaoUsuario from "../persitence/elephant/daoUsuarioElephantFactory.js";
import crearUsuario from "./usuario.js"

let daoUsuario = getDaoUsuario()
let usuario = crearUsuario(daoUsuario)

function getUsuario() {return usuario}

export default getUsuario