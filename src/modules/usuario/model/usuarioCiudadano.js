function crearUsuarioCiudadano(daoUsuarioCuidadano) {
    return {
        id: null,
        idCitizen: null,      
        idUserType: null,
        email: null,
        name: null,
        surname: null,
        creationDate: null,
        dni: null,
        address: null,
        birthdate: null,

        async obtenerDatos(id) {
            const datos = await daoUsuarioCuidadano.obtenerDatosPorId(id)           
            this.id = datos.id
            this.idCitizen = datos.idCitizen
            this.idUserType = datos.idUserType
            this.email = datos.email
            this.name = datos.name
            this.surname = datos.surname
            this.creationDate = datos.creationdate ? datos.creationdate.toISOString().split('T')[0] : datos.creationdate
            this.dni = datos.dni
            this.address = datos.address
            this.birthdate = datos.birthdate ? datos.birthdate.toISOString().split('T')[0] : datos.birthdate
            return this
        },

        async persistir() {
            if (!this.usuarioId) {
                throw new Error("Uuario faltante");
            }

            const result = await daoUsuario.persistir(this);

            if (!this.id) {
                this.id = result;
            }

            return result;
        },
    };
}

export default crearUsuarioCiudadano;
