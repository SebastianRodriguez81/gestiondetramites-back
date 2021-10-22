import getTramite from "../model/tramiteFactory.js";
import crearObtenerTramitesPorUsuario from "./obtenerTramitesPorUsuario.js"
import crearObtenerTramitesPendiente from "./obtenerTramitesPendiente.js"
import crearObtenerTramitesEnProceso from "./obtenerTramitesEnProceso.js"

function getTramiteApplications(){
    return{
        getObtenerTramitesPorUsuario: function() {
            let tramite = getTramite()
            let obtenerTipoTramitePorUsuario = crearObtenerTramitesPorUsuario(tramite)   
            return obtenerTipoTramitePorUsuario
        },

        getObtenerTramitesPendiente: function() {
            let tramite = getTramite()
            let obtenerTipoTramitePendiente = crearObtenerTramitesPendiente(tramite)   
            return obtenerTipoTramitePendiente
        },

        getObtenerTramitesEnProceso: function() {
            let tramite = getTramite()
            let obtenerTipoTramiteEnProceso = crearObtenerTramitesEnProceso(tramite)   
            return obtenerTipoTramiteEnProceso
        }
    }
}

export default getTramiteApplications