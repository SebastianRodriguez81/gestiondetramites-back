function crearObtenerUsuarioMunicipal(usuarioMunicipal) {
    return {
        async ejecutar(id) {
            await usuarioMunicipal.obtenerDatos(id)
            return usuarioMunicipal
        }
    }
}

export default crearObtenerUsuarioMunicipal