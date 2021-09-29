function crearObtenerTramites(daoTramite) {
    return {
        async ejecutar(estadoId, tipoTramiteId, fechaCreacion, usuarioId, usuarioAsigId) {
            return await daoTramite.buscarTodos(estadoId, tipoTramiteId, fechaCreacion, usuarioId, usuarioAsigId)
        }
    }
}

export default crearObtenerTramites