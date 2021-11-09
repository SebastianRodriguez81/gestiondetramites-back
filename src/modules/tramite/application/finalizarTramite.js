import { ValidationError } from "../../../common/errors.js";

function finalizarTramite(tramite, mailer, usuarioCiudadano, eventoTramite, notificacionUsuario) {
    return {
        async ejecutar(idProcedure, rejected, reasonRejection) {
            let mensajeFinzaliacion = ''
            let tituloFinalizacion = ''
            let notificacionFinzaliacion = ''
            let datos = ''
            await tramite.obtenerDatos(idProcedure)
            let usuarioBuscado = await usuarioCiudadano.user.obtenerDatos(tramite.idUserCitizen)
            const codigoTramite = tramite.obtenerCodigo()
            if (!rejected) {
                tramite.finalizarTramite()
                
                

                
                //throw new Error('sdadsas')
                datos = {
                    from : "Tramites",
                    to : usuarioBuscado.email,
                    asunto : "Tramite finalizado",
                    mensaje : `El tramite ${codigoTramite} ha sido finalizado.` 
                }                
                
                

                mensajeFinzaliacion = eventoTramite.mensajeFinzalido()
                tituloFinalizacion='Tramite finalizado'
                notificacionFinzaliacion = notificacionUsuario.mensajeFinzalido(codigoTramite)

            } else {
                if (reasonRejection.length == 0) { throw new ValidationError("Motivo de rechazo no puede estar vacio.") }
                tramite.rechazarTramite(reasonRejection)
                tituloFinalizacion='Tramite rechazado'
                mensajeFinzaliacion = eventoTramite.mensajeRechazado(reasonRejection)
                notificacionFinzaliacion = notificacionUsuario.mensajeRechazado(codigoTramite, reasonRejection)

                datos = {
                    from : "Tramites",
                    to : usuarioBuscado.email,
                    asunto : "Tramite finalizado",
                    mensaje : `El tramite ${codigoTramite} ha sido rechazado. Motivo: ` + reasonRejection
                }
            }
            await tramite.persistir()

            eventoTramite.idProcedure=tramite.id                    //Genero nuevo evento para el tramite                           
            eventoTramite.observation=mensajeFinzaliacion
            await eventoTramite.persistir()                         //Persisto evento

            notificacionUsuario.idUser=tramite.idUserCitizen        //Genero nueva notificacion para el usuario 
            notificacionUsuario.title=tituloFinalizacion       
            notificacionUsuario.message=notificacionFinzaliacion            
            await notificacionUsuario.persistir()                    //Persisto evento

            mailer.send(datos)

            return true
        }
    }
}

export default finalizarTramite