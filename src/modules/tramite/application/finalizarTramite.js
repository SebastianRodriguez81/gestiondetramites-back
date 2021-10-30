import { ValidationError } from "../../../common/errors.js";

function finalizarTramite(tramite, mailer, usuarioCiudadano, eventoTramite) {
    return {
        async ejecutar(idProcedure, rejected, reasonRejection) {
            let mensajeFinzaliacion = ''
            await tramite.obtenerDatos(idProcedure)
            if (!rejected) {
                tramite.finalizarTramite()

                let usuarioBuscado = usuarioCiudadano.user.buscardatos(tramite.idUserCitizen)
                let datos = {
                    from : "Tramites",
                    to : usuarioBuscado.email,
                    asunto : "Tramite finalizado",
                    mensaje : "El tramite ha sido finalizado. La razon es la siguiente " + reasonRejection
                }
                mailer.send(datos)

                mensajeFinzaliacion = eventoTramite.mensajeFinzalido()

            } else {
                if (reasonRejection.length == 0) { throw new ValidationError("Motivo de rechazo no puede estar vacio.") }
                tramite.rechazarTramite(reasonRejection)
                mensajeFinzaliacion = eventoTramite.mensajeRechazado(reasonRejection)
            }
            await tramite.persistir()

            eventoTramite.idProcedure=tramite.id                    //Genero nuevo evento para el tramite                           
            eventoTramite.observation=mensajeFinzaliacion
            await eventoTramite.persistir()                         //Persisto evento

            return true
        }
    }
}

export default finalizarTramite