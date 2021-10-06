import getDaoTramite from "../persitence/mock/daoTramiteFactoryMock.js";
import crearTramite from "./Tramite.js"

let daoTramite = getDaoTramite()
let tramite = crearTramite(daoTramite)

function getTramite() {return tramite}

export default getTramite