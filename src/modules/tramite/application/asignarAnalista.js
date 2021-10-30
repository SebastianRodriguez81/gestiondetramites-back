import { ValidationError } from "../../../common/errors.js"

function asignarAnalista(tramite, usuarioMunicipal, eventoTramite) {
    return {
        async ejecutar(idProcedure, idUser) {           
            await tramite.obtenerDatos(idProcedure)                 //Obtengo dato del tramite. Error si no lo encuentra            
            await usuarioMunicipal.obtenerDatos(idUser)             //Obtengo dato del municipal. Error si no lo encuentra 
            if(usuarioMunicipal.user.idMunicipalRole != 1){ throw new ValidationError('Rol de municipal invalido para esta accion.')}           
            tramite.asignarAnalista(usuarioMunicipal.user.id)       //Asigno municipal al tramite
            await tramite.persistir()                               //Persisto tramite

            eventoTramite.idProcedure=tramite.id                    //Genero nuevo evento para el tramite
            eventoTramite.eventDate=tramite.anlystAssignmentDate    //Fecha de asignacion del analista
            console.log(usuarioMunicipal.user.name)
            eventoTramite.observation=`Asigando a ${usuarioMunicipal.user.name} ${usuarioMunicipal.user.surname} para analisis.`
            await eventoTramite.persistir()                         //Persisto evento

            return true
        }
    }
}

export default asignarAnalista