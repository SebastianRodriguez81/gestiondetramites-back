import { ValidationError } from "../../../common/errors.js";

function finalizarTramite(tramite, mailer) {
    return {
        async ejecutar(idProcedure, rejected, reasonRejection) {
            await tramite.obtenerDatos(idProcedure)
            if (!rejected) {
                tramite.finalizarTramite()
                let datos = {
                    from : "Tramites",
                    to : tramite.userEmail,
                    asunto : "Tramite finalizado",
                    mensaje : "El tramite ha sido finalizado. La razon es la siguiente " + reasonRejection
                }
                mailer.send(datos)
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