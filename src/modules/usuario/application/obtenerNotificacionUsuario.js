function crearObtenerNotificacionUsuario(notificacionUsuario) {
    return {
        async ejecutar(idUser) {
            return await notificacionUsuario.buscarTodos(idUser)
        }
    }
}

export default crearObtenerNotificacionUsuario