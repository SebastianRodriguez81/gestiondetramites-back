import { ValidationError } from "../../../common/errors.js"
import { isValidDate } from "../../../common/validDate.js"

function asignarFechaRetiro(tramite, mailer) {
    return {
        async ejecutar(idProcedure, withdrawalDate) {  
            if(!isValidDate(withdrawalDate)) {throw new ValidationError("Formato de fecha invalido o erroneo.")}        
            await tramite.obtenerDatos(idProcedure)           
            tramite.asignarFechaRetiro(withdrawalDate)           
            await tramite.persistir()
            let datos = {
                from : "Tramites",
                to : tramite.userEmail,
                asunto : "Fecha de retiro",
                mensaje : "La fecha del retiro ya está establecida. " + withdrawalDate
            }
            mailer.send(datos)

            return true
        }
    }
}

export default asignarFechaRetiro