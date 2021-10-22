function crearObtenerTramitesPendiente(tramite) {
    return {
        async ejecutar() {                   
            return await tramite.buscarTodos(1, null, null, null, null, null)
        }
    }
}

export default crearObtenerTramitesPendiente