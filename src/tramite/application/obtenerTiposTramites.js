function crearObtenerTipoTramite(daoTipoTramite) {
    return {
        async ejecutar() {
            return await daoTipoTramite.buscarTodos()
        }
    }
}

export default crearObtenerTipoTramite