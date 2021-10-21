function crearUsuarioMunicipio(daoUsuario) {
    //dao usuairo o usuario municipio?
    return {
        id: null,
        usuarioId: null,
        usuarioMunicipioRolesId: null,
        tipoTramiteHabilitaciones: null,
        //que hago con la lista de tipo de tramites para los que esta habilitado?
        usuario: null,

        async buscarTodos(id, usuarioId, usuarioMunicipioRolesId) {
            return await daoUsuario.buscarTodos(
                id,
                usuarioId,
                usuarioMunicipioRolesId
            );
        },
        setusuarioId(usuarioId) {
            this.usuarioId = usuarioId;
        },
        setUsuarioMunicipioRolesId(usuarioMunicipioRolesId) {
            this.usuarioMunicipioRolesId = usuarioMunicipioRolesId;
        },

        async persistir() {
            if (!this.usuarioId) {
                throw new Error("Usuario faltante");
            }
            if (!this.usuarioMunicipioRolesId) {
                throw new Error("Rol de usuario municipio faltante");
            }

            const result = await daoUsuario.persistir(this);

            if (!this.id) {
                this.id = result;
            }

            return result;
        },
    };
}

export default crearUsuarioMunicipio;
