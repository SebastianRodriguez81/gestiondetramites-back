function crearTramite(daoTramite) {
    return {
        id: null,
        estadoTramite: null,
        tipoTramite: null,
        usuario: null,
        usuarioAsig: null,
        fechacreacion: null,

       

        async buscarTodos(estadosId, tiposTramiteId, fechaCreacionDesde, fechaCreacionHasta, usuariosId, usuariosAsigId) {
            return await daoTramite.buscarTodos(estadosId, tiposTramiteId, fechaCreacionDesde, fechaCreacionHasta, usuariosId, usuariosAsigId)
        },

        async persistir() {
            this.id = await daoTramite.persistir(this)
            return this
        },        
    }
}

export default crearTramite