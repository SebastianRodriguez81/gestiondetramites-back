import { ValidationError } from "../../../common/errors.js"

function asignarAnalista(tramite, usuarioMunicipal, eventoTramite, orionClient) {
    return {
        async ejecutar(idProcedure, idUser) {           
            await tramite.obtenerDatos(idProcedure)                 //Obtengo dato del tramite. Error si no lo encuentra            
            await usuarioMunicipal.obtenerDatos(idUser)             //Obtengo dato del municipal. Error si no lo encuentra 
            if(usuarioMunicipal.user.idMunicipalRole != 1){ throw new ValidationError('Rol de municipal invalido para esta accion.')}           
            tramite.asignarAnalista(usuarioMunicipal.user.id)       //Asigno municipal al tramite
            await tramite.persistir()                               //Persisto tramite

            eventoTramite.idProcedure=tramite.id                    //Genero nuevo evento para el tramite           
            const nombreAnalista = usuarioMunicipal.user.name+' '+usuarioMunicipal.user.surname      
            eventoTramite.observation=eventoTramite.mensajeAsignarAnalista(nombreAnalista)
            await eventoTramite.persistir()                         //Persisto evento
            
            await orionClient.informarCambioEstadoTramite(tramite)

            return true
        }
    }
}

export default asignarAnalista