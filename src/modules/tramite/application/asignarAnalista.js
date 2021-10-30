function asignarAnalista(tramite, usuarioMunicipal, eventoTramite) {
    return {
        async ejecutar(idProcedure, idUser) {           
            await tramite.obtenerDatos(idProcedure)                 //Obtengo dato del tramite. Error si no lo encuentra
            await usuarioMunicipal.obtenerDatos(idUser)             //Obtengo dato del municipal. Error si no lo encuentra 
            if(usuarioMunicipal.idMunicipalRole != 1){ throw new ValidationError('Rol de municipal invalido para esta accion.')}           
            tramite.asignarAnalista(usuarioMunicipal.usuario.id)    //Asigno municipal al tramite
            await tramite.persistir()                               //Persisto tramite

            eventoTramite.idProcedure=tramite.idProcedure           //Genero nuevo evento para el tramite
            eventoTramite.eventDate=tramite.anlystAssignmentDate    //Fecha de asignacion del analista
            eventoTramite.observation=`Asigando a ${usuarioMunicipal.usuario.nombre} ${usuarioMunicipal.usuario.apellido} para analisis.`
            await eventoTramite.persistir()                         //Persisto evento

            return true
        }
    }
}

export default asignarAnalista