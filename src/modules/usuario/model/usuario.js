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

        async obtenerDatos(id,email) {
            let datos            
            if(id){
                datos = await daoUsuario.obtenerDatosPorId(id)
            } else {
                if(email){
                    datos = await daoUsuario.obtenerDatosPorEmail(email)
                } else {
                    throw new ValidationError("Identificador de usuario faltante.")
                }
            }
            this.id = datos.id
            this.idUserType = datos.idusertype
            this.email = datos.email
            this.name = datos.name
            this.surname = datos.surname
            this.creationDate = datos.creationdate ? datos.creationdate.toISOString().split('T')[0] : datos.creationdate
            //this.userTypeCode = datos.usertypecode
            return this
        },

        async existe(email) {                
            return await daoUsuario.obtenerIdPorEmail(email)
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