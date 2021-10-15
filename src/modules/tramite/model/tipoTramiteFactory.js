import getDaoTipoTramite from "../persitence/elephant/daoTipoTramiteElephantFactory.js";
import crearTipoTramite from "./tipoTramite.js"

let daoTipoTramite = getDaoTipoTramite()
let tipoTramite = crearTipoTramite(daoTipoTramite)

function getTipoTramite() {return tipoTramite}

export default getTipoTramite