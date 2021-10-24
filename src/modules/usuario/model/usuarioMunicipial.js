function crearUsuarioMunicipal(daoUsuarioMunicipal) {
    return {
        id: null,
        idUserMunicipal: null,
        idUserType: null,
        idMunicipalRole: null,
        email: null,
        name: null,
        surname: null,
        creationDate: null,
        userTypeCode: null,
        municipalRoleCode: null,

        async obtenerDatos(id) {
            const datos = await daoUsuarioMunicipal.obtenerDatosPorId(id)
            this.id = datos.id
            this.idUserMunicipal = datos.idusermunicipal
            this.idUserType = datos.idusertype
            this.idMunicipalRole = datos.idmunicipalrole
            this.email = datos.email
            this.name = datos.name
            this.surname = datos.surname
            this.creationDate = datos.creationdate ? datos.creationdate.toISOString().split('T')[0] : datos.creationdate
            this.userTypeCode = datos.usertypecode
            this.municipalRoleCode = datos.municipalrolecode

            return this
        }
    }
}

export default crearUsuarioMunicipal