function crearTramite(daoTramite) {
    return {
        id: null,
        estadosIdx: null,
        tiposTramiteIdx: null,
        usuariosId: null,
        usuariosAsigId: null,
        fechaCreacion: null,       

        async buscarTodos(estadosId, tiposTramiteId, fechaCreacionDesde, fechaCreacionHasta, usuariosId, usuariosAsigId) {
            return await daoTramite.buscarTodos(estadosId, tiposTramiteId, fechaCreacionDesde, fechaCreacionHasta, usuariosId, usuariosAsigId)
        },

        async persistir() {            
            if(!this.estadosIdx){throw new Error("Estado faltante")}
            if(!this.tiposTramiteIdx){throw new Error("TipoTramite faltante")}
            if(!this.usuariosId){throw new Error("Usuario faltante")} 
            
            const result = await daoTramite.persistir(this)

            if(!this.id){this.id = result}

            return result  
        },        
    }
}

export default crearTramite