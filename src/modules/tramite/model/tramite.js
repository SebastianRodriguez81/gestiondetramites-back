function crearTramite(daoTramite) {
    return {
        async buscarTodos(estadoId, tipoTramiteId, fechaCreacionDesde, fechaCreacionHasta, usuarioId, usuarioAsigId) {
            return await daoTramite.buscarTodos()
        }
    }
}

export default crearTramite