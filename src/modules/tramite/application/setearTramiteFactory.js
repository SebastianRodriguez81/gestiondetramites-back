import getTramite from "../model/tramiteFactory.js";
import crearSetTramite from "./setearTramite.js"

let tramite = getTramite()
let obtenerSetTramite = crearSetTramite(tramite)

function getSetTramites() {
    return obtenerSetTramite
}

export default getSetTramites