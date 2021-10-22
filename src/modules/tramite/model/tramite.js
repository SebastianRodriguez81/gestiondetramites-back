function crearTramite(daoTramite) {
    return {
        id: null,
        estadosIdx: null,
        tiposTramiteIdx: null,
        usuariosId: null,
        usuariosAsigId: null,
        fechaCreacion: null,

        async buscarTodos(
            estadosIdx,
            tiposTramiteIdx,
            fechaCreacionDesde,
            fechaCreacionHasta,
            usuariosId,
            usuariosAsigId,
            id
        ) {
            return await daoTramite.buscarTodos(
                estadosIdx,
                tiposTramiteIdx,
                fechaCreacionDesde,
                fechaCreacionHasta,
                usuariosId,
                usuariosAsigId,
                id
            );
        },

        async persistir() {
            if (!this.estadosIdx) {
                throw new Error("Estado faltante");
            }
            if (!this.tiposTramiteIdx) {
                throw new Error("TipoTramite faltante");
            }
            if (!this.usuariosId) {
                throw new Error("Usuario faltante");
            }

            const result = await daoTramite.persistir(this);

            if (!this.id) {
                this.id = result;
            }

            return result;
        },
    };
}

export default crearTramite;
