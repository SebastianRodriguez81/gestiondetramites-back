import { ValidationError } from "../../../common/errors.js"
import { isValidDate } from "../../../common/validDate.js"

function asignarFechaRetiro(tramite) {
    return {
        async ejecutar(idProcedure, withdrawalDate) {  
            if(!isValidDate(withdrawalDate)) {throw new ValidationError("Formato de fecha invalido o erroneo.")}        
            await tramite.obtenerDatos(idProcedure)           
            tramite.asignarFechaRetiro(withdrawalDate)           
            await tramite.persistir()

            return true
        }
    }
}

export default asignarFechaRetiro