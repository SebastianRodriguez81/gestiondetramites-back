import getUsuarioModels from "../model/modelUsurioFactory.js"
import crearAltaUsuarioCiudadano from "./altaUsuarioCiudadano.js"
import crearObtenerUsuarioCiudadano from "./obtenerUsuarioCiudadano.js"
import crearObtenerUsuarioMunicipal from "./obtenerUsuarioMunicipal.js"
import crearObtenerUsuariosMunicipalResponsable from "./obtenerUsuariosMunicipalResponsable.js"
import crearObtenerNotificacionUsuario from "./obtenerNotificacionUsuario.js"
import crearMarcarNotificacionLeida from "./marcarNotificacionLeida.js"
import crearObtenerUsuarios from "./obtenerUsuarios.js"

let usuarioModels = getUsuarioModels()

function getUsuarioApplications() {
    return {

        getAltaUsuarioCiudadano: function () {
            let usuarioCiudadano = usuarioModels.getUsuarioCiudadano()
            let altaUsuarioUsuarioCiudadano = crearAltaUsuarioCiudadano(usuarioCiudadano)
            return altaUsuarioUsuarioCiudadano
        },

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

        getObtenerUsuariosMunicipalResponsable: function () {
            let usuarioMunicipal = usuarioModels.getUsuarioMunicipal()
            let obtenerUsuariosUsuarioMunicipalResponsable = crearObtenerUsuariosMunicipalResponsable(usuarioMunicipal)
            return obtenerUsuariosUsuarioMunicipalResponsable
        },

        getObtenerNotificacionUsuario: function () {
            let notificacionUsuario = usuarioModels.getNotificacionUsuario()
            let obtenerNotificaionUsuario = crearObtenerNotificacionUsuario(notificacionUsuario)
            return obtenerNotificaionUsuario
        },

        getMarcarNotificacionLeida: function () {
            let usuario = usuarioModels.getUsuario()
            let marcarNotificaionLeida = crearMarcarNotificacionLeida(usuario)
            return marcarNotificaionLeida
        },


        getObtenerUsuarios: function () {
            let usuario = usuarioModels.getUsuario()
            let obtenerUsuarios = crearObtenerUsuarios(usuario)
            return obtenerUsuarios
        }        
    }
}

export default getUsuarioApplications