import { ValidationError } from "../../../common/errors.js"
import { isValidDate } from "../../../common/validDate.js"

function asignarFechaRetiro(tramite, mailer, usuarioCiudadano, eventoTramite) {
    return {
        async ejecutar(idProcedure, withdrawalDate) {  
            if(!isValidDate(withdrawalDate)) {throw new ValidationError("Formato de fecha invalido o erroneo.")}        
            await tramite.obtenerDatos(idProcedure)           
            tramite.asignarFechaRetiro(withdrawalDate)           
            await tramite.persistir()

            eventoTramite.idProcedure=tramite.id                    //Genero nuevo evento para el tramite                    
            eventoTramite.observation=eventoTramite.mensajeFechaRetiro(tramite.withdrawalDate)
            await eventoTramite.persistir()                         //Persisto evento

            let usuarioBuscado = usuarioCiudadano.user.obtenerDatos(tramite.idUserCitizen)
            let datos = {
                from : "Tramites",
                to : usuarioBuscado.email,
                asunto : "Fecha de retiro",
                mensaje : "La fecha del retiro ya está establecida. " + withdrawalDate
            }
            //mailer.send(datos)

            return true
        }
    }
}

export default asignarFechaRetiro