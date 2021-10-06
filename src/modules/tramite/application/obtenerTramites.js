function crearObtenerTramites(tramite) {
    return {
        async ejecutar(estadoId, tipoTramiteId, fechaCreacionDesde, fechaCreacionHasta, usuarioId, usuarioAsigId) {
            return await tramite.buscarTodos(estadoId, tipoTramiteId, fechaCreacionDesde, fechaCreacionHasta, usuarioId, usuarioAsigId)
        }
    }
}

export default crearObtenerTramites