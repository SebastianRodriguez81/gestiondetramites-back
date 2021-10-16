import getTipoTramite from "../model/tipoTramiteFactory.js";
import crearObtenerTipoTramite from "./obtenerTiposTramite.js"

let tipoTramite = getTipoTramite()
let obtenerTipoTramite = crearObtenerTipoTramite(tipoTramite)

function getObtenerTiposTramite() {return obtenerTipoTramite}

export default getObtenerTiposTramite