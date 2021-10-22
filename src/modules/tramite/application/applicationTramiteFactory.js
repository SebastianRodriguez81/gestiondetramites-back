import getTramite from "../model/tramiteFactory.js";
import crearObtenerTramitesPorUsuario from "./obtenerTramitesPorUsuario.js"

function getTramiteApplications(){
    return{
        getObtenerTramitePorUsuario: function() {
            let tramite = getTramite()
            let obtenerTipoTramitePorUsuario = crearObtenerTramitesPorUsuario(tramite)   
            return obtenerTipoTramitePorUsuario
        }
    }
}

export default getTramiteApplications