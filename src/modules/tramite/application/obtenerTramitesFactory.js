import getTramite from "../model/tramiteFactory.js";
import crearObtenerTramite from "./obtenerTramites.js"

let tramite = getTramite()
let obtenerTramite = crearObtenerTramite(tramite)

function getObtenerTramites() {return obtenerTramite}

export default getObtenerTramites