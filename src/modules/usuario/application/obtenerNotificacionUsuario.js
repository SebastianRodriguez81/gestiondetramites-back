function crearObtenerNotificacionUsuario(notificacionUsuario) {
    return {
        async ejecutar(idUser, unread) {
            return await notificacionUsuario.buscarTodos(idUser, unread)
        }
    }
}

export default crearObtenerNotificacionUsuario