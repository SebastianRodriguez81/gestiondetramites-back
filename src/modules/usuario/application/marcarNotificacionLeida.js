function crearMarcarNotificacionLeida(usuario) {
    return {
        async ejecutar(idUser) {
            await usuario.obtenerDatos(idUser)
            await usuario.actualizarFechaNotificacionLeida()
            return true
        }
    }
}

export default crearMarcarNotificacionLeida