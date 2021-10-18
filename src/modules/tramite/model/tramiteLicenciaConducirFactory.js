import getDaoTramiteLicenciaConducir from "../persitence/elephant/daoTramiteLicenciaConducirElephantFactory.js";
import crearTramiteLicenciaConducir from "./tramiteLicenciaConducir.js"
import getTramite from "./tramiteFactory.js"

let tramite = getTramite()
let daoTramiteLicenciaConducir = getDaoTramiteLicenciaConducir()
let tramiteLicenciaConducir = crearTramiteLicenciaConducir(tramite, daoTramiteLicenciaConducir)

function getTramiteLicenciaConducir() {return tramiteLicenciaConducir}

export default getTramiteLicenciaConducir