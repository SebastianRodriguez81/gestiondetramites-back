function crearObtenerTramitesFinalizado(tramite) {
    return {
        async ejecutar() {
            return await tramite.buscarTodos(5, null, null, null, null, null)
        }
    }
}

export default crearObtenerTramitesFinalizado