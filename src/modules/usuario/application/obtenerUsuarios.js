function crearObtenerUsuarios(usuario) {
    return {
        async ejecutar() {
            return await usuario.buscarTodos()
        }
    }
}

export default crearObtenerUsuarios