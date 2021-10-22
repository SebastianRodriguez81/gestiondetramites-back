function crearObtenerTramiteCantidades(tramite) {
    return {
        async ejecutar(id) {                             
            return await tramite.obtenerCantidades()
        }
    }
}

export default crearObtenerTramiteCantidades