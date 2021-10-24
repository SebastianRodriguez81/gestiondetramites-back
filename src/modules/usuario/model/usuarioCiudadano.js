function crearUsuarioCiudadano(daoUsuarioCuidadano) {
    return {
        id: null,
        idUserCitizen: null,
        idUserType: null,
        email: null,
        name: null,
        surname: null,
        creationDate: null,
        userTypeCode: null,
        dni: null,
        address: null,
        birthdate: null,
       
        async obtenerDatos(id) {
            const datos = await daoUsuarioCuidadano.obtenerDatosPorId(id)
            this.id = datos.id
            this.idUserCitizen = datos.idusercitizen
            this.idUserType = datos.idusertype
            this.email = datos.email
            this.name = datos.name
            this.surname = datos.surname
            this.creationDate = datos.creationdate ? datos.creationdate.toISOString().split('T')[0] : datos.creationdate
            this.userTypeCode = datos.usertypecode
            this.dni = datos.dni
            this.address = datos.address
            this.birthdate = datos.birthdate ? datos.birthdate.toISOString().split('T')[0] : datos.birthdate
            return this
        }
    }
}

export default crearUsuarioCiudadano