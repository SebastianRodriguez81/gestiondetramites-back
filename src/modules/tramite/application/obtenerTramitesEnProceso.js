function crearObtenerTramitesEnProceso(tramite) {
    return {
        async ejecutar(usuariosId) {
            if(!usuariosId){throw new Error("Usuario invalido o faltante")}            
            return await tramite.buscarTodos(2, null, null, null, null, usuariosId)
        }
    }
}

export default crearObtenerTramitesEnProceso