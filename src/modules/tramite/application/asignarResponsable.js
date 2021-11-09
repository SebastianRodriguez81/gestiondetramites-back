import { ValidationError } from "../../../common/errors.js"

function asignarResponsable(tramite, usuarioMunicipal, eventoTramite) {
    return {
        async ejecutar(idProcedure, idUser) {           
            await tramite.obtenerDatos(idProcedure)                 //Obtengo dato del tramite. Error si no lo encuentra   
            await usuarioMunicipal.obtenerDatos(idUser)             //Obtengo dato del municipal. Error si no lo encuentra 
            if(usuarioMunicipal.user.idMunicipalRole != 2){ throw new ValidationError('Rol de municipal invalido para esta accion.')}           
            tramite.asignarResponsable(usuarioMunicipal.user.id)           
            await tramite.persistir()

            eventoTramite.idProcedure=tramite.id                    //Genero nuevo evento para el tramite            
            const nombreResponsable = usuarioMunicipal.user.name+' '+usuarioMunicipal.user.surname                     
            eventoTramite.observation=eventoTramite.mensajeAsignarResponsable(nombreResponsable)
            await eventoTramite.persistir()                         //Persisto evento

            return true
        }
    }
}

export default asignarResponsable