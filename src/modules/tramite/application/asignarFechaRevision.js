import ValidationError from "../../../common/errors.js"
import { isValidDate } from "../../../common/validDate.js"

function asignarFechaRevision(tramite) {
    return {
        async ejecutar(idProcedure, revisionDate) {  
            if(!isValidDate(revisionDate)) {throw new ValidationError("Formato de fecha invalido o erroneo.")}        
            await tramite.obtenerDatos(idProcedure)           
            tramite.asignarFechaRevision(revisionDate)           
            await tramite.persistir()

            return true
        }
    }
}

export default asignarFechaRevision