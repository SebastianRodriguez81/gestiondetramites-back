function crearUsuario(daoUsuario) {
    return {
        id: null,
        idUserType: null,
        email: null,
        //pass: null,
        name: null,
        surname: null,
        creationDate: null, 
        //userTypeCode: null,    

        async persistir() {
            const result = await daoUsuario.persistir(this)
            if (!this.id) { this.id = result }
            return this
        },

        async obtenerDatos(id) {
            const datos = await daoUsuario.obtenerDatosPorId(id)           
            this.id = datos.id
            this.idUserType = datos.idusertype
            this.email = datos.email
            this.name = datos.name
            this.surname = datos.surname
            this.creationDate = datos.creationdate ? datos.creationdate.toISOString().split('T')[0] : datos.creationdate
            //this.userTypeCode = datos.usertypecode
            return this
        },

        async buscarTodos() {
            return await daoUsuario.buscarTodos()
        },

        async actualizarFechaNotificacionLeida() {
            return await daoUsuario.actualizarFechaNotificacionLeida(this)
        }
    }
}

export default crearUsuario;