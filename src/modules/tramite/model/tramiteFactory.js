import getDaoTramite from "../persitence/elephant/daoTramiteElephantFactory.js";
import crearTramite from "./Tramite.js"

let daoTramite = getDaoTramite()
let tramite = crearTramite(daoTramite)

function getTramite() {return tramite}

export default getTramite