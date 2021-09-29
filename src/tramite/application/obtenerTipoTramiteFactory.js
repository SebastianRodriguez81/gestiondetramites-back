import getDaoTipoTramite from "../persitence/daoTipoTramiteFactory.js";
import crearObtenerTipoTramite from "./obtenerTiposTramites.js"

let daoTipoTramite = getDaoTipoTramite()
let obtenerTipoTramite = crearObtenerTipoTramite(daoTipoTramite)

function getObtenerTipoTramite() {
    return obtenerTipoTramite
}

export default getObtenerTipoTramite