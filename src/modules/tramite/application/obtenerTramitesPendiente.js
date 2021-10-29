function crearObtenerTramitesPendiente(tramite) {
    return {
        async ejecutar(idUsermunicipalRole) {            
            return await tramite.buscarTodos(1, null, null, null, null, null, null, null, null, null, idUsermunicipalRole)
        }
    }
}

export default crearObtenerTramitesPendiente