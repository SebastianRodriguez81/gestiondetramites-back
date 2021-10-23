function crearTipoTramite(daoTipoTramite) {
    return {
        async buscarTodos() {
            return await daoTipoTramite.buscarTodos()
        }
    }
}

export default crearTipoTramite