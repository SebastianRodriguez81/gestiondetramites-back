import getUsuarioModels from "../model/modelUsurioFactory.js"
import crearObtenerUsuarioCiudadanoPorId from "./obtenerUsuarioCiudadanoPorId.js"
import crearObtenerUsuarios from "./obtenerUsuarios.js"

let usuarioModels = getUsuarioModels()

function getUsuarioApplications() {
    return {
        getObtenerUsuarioCiudadanoPorId: function () {
            let usuarioCiudadano = usuarioModels.getUsuarioCiudadano()
            let obtenerUsuarioUsuarioCiudadanoPorId = crearObtenerUsuarioCiudadanoPorId(usuarioCiudadano)
            return obtenerUsuarioUsuarioCiudadanoPorId
        },

        getObtenerUsuarios: function () {
            let usuario = usuarioModels.getUsuario()
            let obtenerUsuarios = crearObtenerUsuarios(usuario)
            return obtenerUsuarios
        }
    }
}

export default getUsuarioApplications