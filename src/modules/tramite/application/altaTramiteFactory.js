import getAltaTramitesLicenciaConducir from "./altaTramiteLicenciaConducirFactory.js";
import crearAltaTramite from "./altaTramite.js"

let altaTramiteLicenciaConducir = getAltaTramitesLicenciaConducir()
let obtenerAltaTramite = crearAltaTramite(altaTramiteLicenciaConducir)

function getAltaTramites() {return obtenerAltaTramite}

export default getAltaTramites