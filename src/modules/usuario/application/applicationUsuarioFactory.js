import getUsuarioModels from "../model/modelUsurioFactory.js"
import crearObtenerUsuarioCiudadano from "./obtenerUsuarioCiudadano.js"
import crearObtenerUsuarioMunicipal from "./obtenerUsuarioMunicipal.js"
import crearObtenerUsuarios from "./obtenerUsuarios.js"

let usuarioModels = getUsuarioModels()

function getUsuarioApplications() {
    return {
        getObtenerUsuarioCiudadano: function () {
            let usuarioCiudadano = usuarioModels.getUsuarioCiudadano()
            let obtenerUsuarioUsuarioCiudadano = crearObtenerUsuarioCiudadano(usuarioCiudadano)
            return obtenerUsuarioUsuarioCiudadano
        },

        getObtenerUsuarioMunicipal: function () {
            let usuarioMunicipal = usuarioModels.getUsuarioMunicipal()
            let obtenerUsuarioUsuarioMunicipal = crearObtenerUsuarioMunicipal(usuarioMunicipal)
            return obtenerUsuarioUsuarioMunicipal
        },

        getObtenerUsuarios: function () {
            let usuario = usuarioModels.getUsuario()
            let obtenerUsuarios = crearObtenerUsuarios(usuario)
            return obtenerUsuarios
        }
    }
}

export default getUsuarioApplications