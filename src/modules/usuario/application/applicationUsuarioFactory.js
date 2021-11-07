import getUsuarioModels from "../model/modelUsurioFactory.js"
import crearAltaUsuarioCiudadano from "./altaUsuarioCiudadano.js"
import crearObtenerUsuarioCiudadano from "./obtenerUsuarioCiudadano.js"
import crearObtenerUsuarioMunicipal from "./obtenerUsuarioMunicipal.js"
import crearObtenerUsuariosMunicipalResponsable from "./obtenerUsuariosMunicipalResponsable.js"
import crearObtenerUsuariosMunicipalAnalista from "./obtenerUsuariosMunicipalAnalista.js"
import crearObtenerNotificacionUsuario from "./obtenerNotificacionUsuario.js"
import crearMarcarNotificacionLeida from "./marcarNotificacionLeida.js"
import crearObtenerUsuarios from "./obtenerUsuarios.js"
import crearCambiarDireccion from "./cambiarDireccionUsuarioCiudadano.js"

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

        getObtenerUsuariosMunicipalAnalista: function () {
            let usuarioMunicipal = usuarioModels.getUsuarioMunicipal()
            let obtenerUsuariosUsuarioMunicipalAnalista = crearObtenerUsuariosMunicipalAnalista(usuarioMunicipal)
            return obtenerUsuariosUsuarioMunicipalAnalista
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
        },
        getCambiarDireccionDeUsuario: function () {
            let usuarioCiudadano = usuarioModels.getUsuarioCiudadano()
            let cambiarDireccionDeUsuario = crearCambiarDireccion(usuarioCiudadano)
            return cambiarDireccionDeUsuario
        },        
    }
}

export default getUsuarioApplications