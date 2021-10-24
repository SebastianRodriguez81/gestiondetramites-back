function crearObtenerUsuarioCuidadano(usuarioCiudadano) {
    return {
        async ejecutar(id) {
            await usuarioCiudadano.obtenerDatos(id)
            return usuarioCiudadano
        }
    }
}

export default crearObtenerUsuarioCuidadano