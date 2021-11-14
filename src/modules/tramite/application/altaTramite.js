import { ValidationError } from "../../../common/errors.js";

function crearAltaTramite(tramite, orionClient, altaTramiteLicenciaConduicir) {
    return {
        async ejecutar(tramiteData) {

            let nuevoTramite = {}

            switch (tramiteData.idProcedureType) {
                case 1:
                    nuevoTramite =  await altaTramiteLicenciaConduicir.ejecutar(tramiteData)
                    break

                default:
                    throw new ValidationError("Tipo de tramite invalido o faltante.")
            }

            await tramite.obtenerDatos(nuevoTramite.id)
            await orionClient.informarNuevoTramite(tramite)

            return nuevoTramite
        }
    }
}

export default crearAltaTramite