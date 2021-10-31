function crearObtenerUsuarioMunicipal(usuarioMunicipal) {
    return {
        async ejecutar(id, email) {
            await usuarioMunicipal.obtenerDatos(id, email)
            return usuarioMunicipal.user
        }
    }
}

export default crearObtenerUsuarioMunicipal