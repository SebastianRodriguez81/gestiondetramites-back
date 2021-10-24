import { ValidationError } from "../../../common/errors.js";

function finalizarTramite(tramite) {
    return {
        async ejecutar(idProcedure, rejected, reasonRejection) {
            await tramite.obtenerDatos(idProcedure)
            if (!rejected) {
                tramite.finalizarTramite()
            } else {
                if (reasonRejection.length == 0) { throw new ValidationError("Motivo de rechazo no puede estar vacio.") }
                tramite.rechazarTramite(reasonRejection)
            }
            await tramite.persistir()

            return true
        }
    }
}

export default finalizarTramite