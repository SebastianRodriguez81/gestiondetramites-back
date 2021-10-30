import { ValidationError } from "../../../common/errors.js"
import { isValidDate } from "../../../common/validDate.js"

function asignarFechaRetiro(tramite, mailer, usuarioCiudadano) {
    return {
        async ejecutar(idProcedure, withdrawalDate) {  
            if(!isValidDate(withdrawalDate)) {throw new ValidationError("Formato de fecha invalido o erroneo.")}        
            await tramite.obtenerDatos(idProcedure)           
            tramite.asignarFechaRetiro(withdrawalDate)           
            await tramite.persistir()
            let usuarioBuscado = usuarioCiudadano.user.buscardatos(tramite.idUserCitizen)
            let datos = {
                from : "Tramites",
                to : usuarioBuscado.email,
                asunto : "Fecha de retiro",
                mensaje : "La fecha del retiro ya está establecida. " + withdrawalDate
            }
            mailer.send(datos)

            return true
        }
    }
}

export default asignarFechaRetiro