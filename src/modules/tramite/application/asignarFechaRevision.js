import { ValidationError } from "../../../common/errors.js"
import { isValidDate } from "../../../common/validDate.js"

function asignarFechaRevision(tramite, mailer, usuarioCiudadano, eventoTramite, notificacionUsuario) {
    return {
        async ejecutar(idProcedure, revisionDate) {  
            if(!isValidDate(revisionDate)) {throw new ValidationError("Formato de fecha invalido o erroneo.")}        
            await tramite.obtenerDatos(idProcedure)           
            tramite.asignarFechaRevision(revisionDate)           
            await tramite.persistir()

            const codigoTramite = tramite.obtenerCodigo()

            eventoTramite.idProcedure=tramite.id                    //Genero nuevo evento para el tramite            
            eventoTramite.observation=eventoTramite.mensajeFechaRevision(tramite.revisionDate)
            await eventoTramite.persistir()                         //Persisto evento

            notificacionUsuario.idUser=tramite.idUserCitizen        //Genero nueva notificacion para el usuario            
            notificacionUsuario.message=notificacionUsuario.mensajeFechaRevision(codigoTramite, tramite.revisionDate)
            await notificacionUsuario.persistir()                    //Persisto evento

            let usuarioBuscado = await usuarioCiudadano.user.obtenerDatos(tramite.idUserCitizen)
            let datos = {
                from : "Tramites",
                to : usuarioBuscado.email,
                asunto : "Fecha de presentacion",
                mensaje : `La fecha presencial para revisar el tramite ${codigoTramite} ya está establecida. ` + revisionDate+"."
            }
            mailer.send(datos)

            return true
        }
    }
}

export default asignarFechaRevision