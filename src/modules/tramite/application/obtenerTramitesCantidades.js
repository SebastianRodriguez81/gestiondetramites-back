function crearObtenerTramiteCantidades(tramite) {
    return {
        async ejecutar() {
            return await tramite.obtenerCantidades()
        }
    }
}

export default crearObtenerTramiteCantidades