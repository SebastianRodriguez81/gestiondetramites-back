function crearUsuarioMunicipal(usuario, daoUsuarioMunicipal) {
    usuario.idUserMunicipal = null
    usuario.idMunicipalRole = null
    usuario.municipalRoleCode = null
    usuario.municipalRoleDescription = null
    

    return {
        user: usuario,

        async obtenerDatos(id, email) {
            let datos

            if(id){
                datos = await daoUsuarioMunicipal.obtenerDatosPorId(id)
            } else {
                if(email){
                    datos = await daoUsuarioMunicipal.obtenerDatosPorEmail(email)
                } else {
                    throw new ValidationError("Identificador de usuario faltante.")
                }
            }
           
            this.user.id = datos.id
            this.user.idUserMunicipal = datos.idusermunicipal
            this.user.idUserType = datos.idusertype
            this.user.idMunicipalRole = datos.idmunicipalrole
            this.user.email = datos.email
            this.user.name = datos.name
            this.user.surname = datos.surname
            this.user.creationDate = datos.creationdate ? datos.creationdate.toISOString().split('T')[0] : datos.creationdate
            //this.user.userTypeCode = datos.usertypecode
            this.user.municipalRoleCode = datos.municipalrolecode
            this.user.municipalRoleDescription = datos.municipalroledescription

            return this.user
        },

        async obtenerResponsables() {

            const dbResult = await daoUsuarioMunicipal.buscarResponsables()           
            const resultList = []

            dbResult.forEach(datos => {                
                let usuarioRow = {
                    // user: {
                    //     id: null,
                    //     idUserMunicipal: null,
                    //     idUserType: null,
                    //     idMunicipalRole: null,
                    //     email: null,
                    //     name: null,
                    //     surname: null,
                    //     creationDate: null,
                    //     municipalRoleCode: null,
                    //     municipalRoleDescription: null
                    // }

                    id: null,
                    idUserMunicipal: null,
                    idUserType: null,
                    idMunicipalRole: null,
                    email: null,
                    name: null,
                    surname: null,
                    creationDate: null,
                    municipalRoleCode: null,
                    municipalRoleDescription: null
                }

                usuarioRow.id = datos.id
                usuarioRow.idUserMunicipal = datos.idusermunicipal
                usuarioRow.idUserType = datos.idusertype
                usuarioRow.idMunicipalRole = datos.idmunicipalrole
                usuarioRow.email = datos.email
                usuarioRow.name = datos.name
                usuarioRow.surname = datos.surname
                usuarioRow.creationDate = datos.creationdate ? datos.creationdate.toISOString().split('T')[0] : datos.creationdate  
                usuarioRow.municipalRoleCode = datos.municipalrolecode
                usuarioRow.municipalRoleDescription = datos.municipalroledescription

                resultList.push(usuarioRow)                
            })
            
            return resultList            
        }
    }
}

export default crearUsuarioMunicipal