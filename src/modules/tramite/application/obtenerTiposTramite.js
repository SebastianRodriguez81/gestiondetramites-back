function crearObtenerTiposTramite(tipoTramite) {
    return {
        async ejecutar() {
            return await tipoTramite.buscarTodos()
        }
    }
}

export default crearObtenerTiposTramite