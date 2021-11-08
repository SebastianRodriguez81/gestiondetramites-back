import { ValidationError } from "../../../common/errors.js";

function crearAltaTramite(altaTramiteLicenciaConduicir) {
    return {
        async ejecutar(tramiteData) {

            let nuevoTramite = {}

            console.log(tramiteData)

            switch (tramiteData.idProcedureType) {
                case 1:
                    nuevoTramite =  altaTramiteLicenciaConduicir.ejecutar(tramiteData)
                    break

                default:
                    throw new ValidationError("Tipo de tramite invalido o faltante.")
            }

//          orion.informarNuevoTramite(nuevoTramite)

            return nuevoTramite
        }
    }
}

export default crearAltaTramite