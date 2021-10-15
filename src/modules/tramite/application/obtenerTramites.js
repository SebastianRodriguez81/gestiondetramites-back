function crearObtenerTramites(tramite) {
    return {
        async ejecutar(estadosId, tiposTramiteId, fechaCreacionDesde, fechaCreacionHasta, usuariosId, usuariosAsigId) {
            return await tramite.buscarTodos(estadosId, tiposTramiteId, fechaCreacionDesde, fechaCreacionHasta, usuariosId, usuariosAsigId)
        }
    }
}

export default crearObtenerTramites