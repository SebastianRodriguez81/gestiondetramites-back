import { ValidationError } from "../../../common/errors.js"
import { isValidDate } from "../../../common/validDate.js"

function asignarFechaRevision(tramite, mailer, usuarioCiudadano) {
    return {
        async ejecutar(idProcedure, revisionDate) {  
            if(!isValidDate(revisionDate)) {throw new ValidationError("Formato de fecha invalido o erroneo.")}        
            await tramite.obtenerDatos(idProcedure)           
            tramite.asignarFechaRevision(revisionDate)           
            await tramite.persistir()
            let usuarioBuscado = usuarioCiudadano.user.buscardatos(tramite.idUserCitizen)
            let datos = {
                from : "Tramites",
                to : usuarioBuscado.email,
                asunto : "Fecha de presentacion",
                mensaje : "La fecha presencial para revisar el tramite ya está establecida. " + revisionDate
            }
            mailer.send(datos)

            return true
        }
    }
}

export default asignarFechaRevision