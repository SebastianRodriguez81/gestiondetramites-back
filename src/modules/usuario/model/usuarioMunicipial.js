function crearUsuarioMunicipal(usuario, daoUsuarioMunicipal) {
    usuario.idUserMunicipal = null
    usuario.idMunicipalRole = null

    return {
        user: usuario,

        async obtenerDatos(id) {
            const datos = await daoUsuarioMunicipal.obtenerDatosPorId(id)
            this.user.id = datos.id
            this.user.idUserMunicipal = datos.idusermunicipal
            this.user.idUserType = datos.idusertype
            this.user.idMunicipalRole = datos.idmunicipalrole
            this.user.email = datos.email
            this.user.name = datos.name
            this.user.surname = datos.surname
            this.user.creationDate = datos.creationdate ? datos.creationdate.toISOString().split('T')[0] : datos.creationdate
            //this.user.userTypeCode = datos.usertypecode
            //this.user.municipalRoleCode = datos.municipalrolecode

            return this
        },

        async obtenerResponsables() {
            return await daoUsuarioMunicipal.buscarResponsables()
        }
    }
}

export default crearUsuarioMunicipal