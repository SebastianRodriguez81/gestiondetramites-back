import getTramiteLicenciaConducir from "../model/tramiteLicenciaConducirFactory.js";
import crearAltaTramiteLicenciaConducir from "./altaTramiteLicenciaConducir.js"

let tramiteLicenciaConducir = getTramiteLicenciaConducir()
let obtenerAltaTramiteLicenciaConducir = crearAltaTramiteLicenciaConducir(tramiteLicenciaConducir)

function getAltaTramitesLicenciaConducir() {
    return obtenerAltaTramiteLicenciaConducir
}

export default getAltaTramitesLicenciaConducir