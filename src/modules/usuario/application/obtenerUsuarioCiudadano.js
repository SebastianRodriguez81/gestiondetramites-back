function crearObtenerUsuarioCuidadano(usuarioCiudadano) {
    return {
        async ejecutar(id, email) {            
            await usuarioCiudadano.obtenerDatos(id, email)
            return usuarioCiudadano
        }
    }
}

export default crearObtenerUsuarioCuidadano