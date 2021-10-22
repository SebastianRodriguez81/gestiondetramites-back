function crearObtenerTramitesPorUsuario(tramite) {
    return {
        async ejecutar(usuariosId) {
            if(!usuariosId){throw new Error("Usuario invalido o faltante")}            
            return await tramite.buscarTodos(null, null, null, null, usuariosId, null)
        }
    }
}

export default crearObtenerTramitesPorUsuario