import getTramite from "../model/tramiteFactory.js";
import getTipoTramite from "../model/tipoTramiteFactory.js";
import crearObtenerTramitePorId from "./obtenerTramitePorId.js"
import crearObtenerTramitesPorUsuario from "./obtenerTramitesPorUsuario.js"
import crearObtenerTramitesPendiente from "./obtenerTramitesPendiente.js"
import crearObtenerTramitesEnProceso from "./obtenerTramitesEnProceso.js"
import crearObtenerTramitesFinalizado from "./obtenerTramitesFinalizado.js"
import crearObtenerTramitesCantidades from "./obtenerTramitesCantidades.js"
import crearObtenerTiposTramite from "./obtenerTiposTramite.js"
import crearObtenerTramite from "./obtenerTramites.js"



function getTramiteApplications(){
    return{

        getObtenerTramitePorId: function() {
            let tramite = getTramite()
            let obtenerTipoTramitePorId = crearObtenerTramitePorId(tramite)   
            return obtenerTipoTramitePorId
        },

        getObtenerTramitesPorUsuario: function() {
            let tramite = getTramite()
            let obtenerTipoTramitesPorUsuario = crearObtenerTramitesPorUsuario(tramite)   
            return obtenerTipoTramitesPorUsuario
        },

        getObtenerTramitesPendiente: function() {
            let tramite = getTramite()
            let obtenerTipoTramitesPendiente = crearObtenerTramitesPendiente(tramite)   
            return obtenerTipoTramitesPendiente
        },

        getObtenerTramitesEnProceso: function() {
            let tramite = getTramite()
            let obtenerTipoTramitesEnProceso = crearObtenerTramitesEnProceso(tramite)   
            return obtenerTipoTramitesEnProceso
        },

        getObtenerTramitesFinalizado: function() {
            let tramite = getTramite()
            let obtenerTipoTramitesFinalizado = crearObtenerTramitesFinalizado(tramite)   
            return obtenerTipoTramitesFinalizado
        },

        getObtenerTramitesCantidades: function() {
            let tramite = getTramite()
            let obtenerTipoTramitesCantidades = crearObtenerTramitesCantidades(tramite)   
            return obtenerTipoTramitesCantidades
        },

        getObtenerTiposTramite: function() {
            let tipoTramite = getTipoTramite()
            let obtenerTipoTramite = crearObtenerTiposTramite(tipoTramite)
            return obtenerTipoTramite
        },

        getObtenerTramites: function() {
            let tramite = getTramite()
            let obtenerTramite = crearObtenerTramite(tramite)
            return obtenerTramite
        }
    }
}

export default getTramiteApplications