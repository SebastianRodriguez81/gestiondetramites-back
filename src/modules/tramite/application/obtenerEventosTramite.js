function crearObtenerEventosTramite(eventoTramite) {
    return {
        async ejecutar(idProcedure) {
            return await eventoTramite.buscarTodos(idProcedure)
        }
    }
}

export default crearObtenerEventosTramite