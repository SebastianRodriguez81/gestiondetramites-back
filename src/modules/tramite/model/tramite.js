function crearTramite(daoTramite) {
    return {
        id: null,
        idState: null,
        idProcedureType: null,
        idUserCitizen: null,
        idUserMunicipal: null,
        userName: null,
        userSurname: null,
        userDni: null,
        userAddress: null,
        userBirthdate: null,
        creationDate: null,
        assignmentDate: null,
        revisionDate: null,
        withdrawalDate: null,
        completedDate: null,
        rejected: null,
        reasonRejection: null,


        async buscarTodos(estadosIdx, tiposTramiteIdx, fechaCreacionDesde, fechaCreacionHasta, usuariosId, usuariosAsigId, id, opEstadosIdx1, opEstadosIdx2, opEstadosIdx3) {
            return await daoTramite.buscarTodos(estadosIdx, tiposTramiteIdx, fechaCreacionDesde, fechaCreacionHasta, usuariosId, usuariosAsigId, id, opEstadosIdx1, opEstadosIdx2, opEstadosIdx3);
        },

        async persistir() {
            const result = await daoTramite.persistir(this)
            if (!this.id) { this.id = result }
            return this;
        },

        async obtenerCantidades() {
            return await daoTramite.obtenerCantidades()
        }
    };
}

export default crearTramite