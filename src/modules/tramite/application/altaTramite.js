import { ValidationError } from "../../../common/errors.js";

function crearAltaTramite(altaTramiteLicenciaConduicir) {
    return {
        async ejecutar(tramiteData) {

            switch (tramiteData.idProcedureType) {
                case 1:
                    return altaTramiteLicenciaConduicir.ejecutar(tramiteData)

                default:
                    throw new ValidationError("Tipo de tramite invalido o faltante.")
            }
        }
    }
}

export default crearAltaTramite