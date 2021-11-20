import { ValidationError } from "../../../common/errors.js"
import { isValidDate } from "../../../common/validDate.js"
import moment from 'moment'

function asignarFechaRevision(tramite, mailer, usuarioCiudadano, eventoTramite, notificacionUsuario, orionClient) {
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
            notificacionUsuario.title='Fecha de recisión' 
            notificacionUsuario.message=notificacionUsuario.mensajeFechaRevision(codigoTramite, tramite.revisionDate)
            await notificacionUsuario.persistir()                    //Persisto evento

            let usuarioBuscado = await usuarioCiudadano.user.obtenerDatos(tramite.idUserCitizen)
            const fechaForamteada = moment(revisionDate).format("DD/MM/YYYY")
            let datos = {
                from : "Tramites",
                to : usuarioBuscado.email,
                asunto : "Fecha de presentacion",
                mensaje : `La fecha presencial para revisar el tramite ${codigoTramite} ya está establecida. ` + fechaForamteada+"."
            }
            mailer.send(datos)

            //await orionClient.informarCambioEstadoTramite(tramite)

            return true
        }
    }
}

export default asignarFechaRevision