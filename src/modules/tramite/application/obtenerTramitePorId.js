function crearObtenerTramitePorId(tramite) {
    return {
        async ejecutar(id) { 
            if(!id){throw new Error("tramite invalido o faltante")}                     
            return await tramite.buscarTodos(null, null, null, null, null, null, id)
        }
    }
}

export default crearObtenerTramitePorId