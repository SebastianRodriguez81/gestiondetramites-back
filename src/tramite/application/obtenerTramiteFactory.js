import getDaoTramite from "../persitence/daoTramiteFactory.js";
import crearObtenerTramite from "./obtenerTramites.js"

let daoTramite = getDaoTramite()
let obtenerTramite = crearObtenerTramite(daoTramite)

function getObtenerTramite() {
    return obtenerTramite
}

export default getObtenerTramite