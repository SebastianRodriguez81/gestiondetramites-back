function crearTramite(daoTramite) {
    return {
        async buscarTodos(estadosId, tiposTramiteId, fechaCreacionDesde, fechaCreacionHasta, usuariosId, usuariosAsigId) {
            return await daoTramite.buscarTodos(estadosId, tiposTramiteId, fechaCreacionDesde, fechaCreacionHasta, usuariosId, usuariosAsigId)
        }
    }
}

export default crearTramite