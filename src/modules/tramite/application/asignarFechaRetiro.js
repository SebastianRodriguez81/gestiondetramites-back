import { ValidationError } from "../../../common/errors.js"
import { isValidDate } from "../../../common/validDate.js"
import moment from 'moment'

function asignarFechaRetiro(tramite, mailer, usuarioCiudadano, eventoTramite, notificacionUsuario, orionClient) {
    return {
        async ejecutar(idProcedure, withdrawalDate) {  
            //if(!isValidDate(withdrawalDate)) {throw new ValidationError("Formato de fecha invalido o erroneo.")}        
            await tramite.obtenerDatos(idProcedure)           
            tramite.asignarFechaRetiro(withdrawalDate)           
            await tramite.persistir()

            const codigoTramite = tramite.obtenerCodigo()

            eventoTramite.idProcedure=tramite.id                    //Genero nuevo evento para el tramite                    
            eventoTramite.observation=eventoTramite.mensajeFechaRetiro(tramite.withdrawalDate)
            await eventoTramite.persistir()                         //Persisto evento

            notificacionUsuario.idUser=tramite.idUserCitizen        //Genero nueva notificacion para el usuario 
            notificacionUsuario.title='Fecha de retiro'            
            notificacionUsuario.message=notificacionUsuario.mensajeFechaRetiro(codigoTramite, tramite.withdrawalDate)
            await notificacionUsuario.persistir()                    //Persisto evento

            const fechaForamteada = moment(withdrawalDate).format("DD/MM/YYYY")
            let usuarioBuscado = await usuarioCiudadano.user.obtenerDatos(tramite.idUserCitizen)
            let datos = {
                from : "Tramites",
                to : usuarioBuscado.email,
                asunto : "Fecha de retiro",
                mensaje : `La fecha del retiro para el tramite ${codigoTramite} ya está establecida: ` + fechaForamteada+'.'
            }
            mailer.send(datos)

            await orionClient.informarCambioEstadoTramite(tramite)

            return true
        }
    }
}

export default asignarFechaRetiro