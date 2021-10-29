function asignarAnalista(tramite) {
    return {
        async ejecutar(idProcedure, idUser) {           
            await tramite.obtenerDatos(idProcedure)           
            tramite.asignarAnalista(idUser)           
            await tramite.persistir()

            return true
        }
    }
}

export default asignarAnalista