import { ValidationError } from "../../../common/errors.js"

function crearUsuarioCiudadano(usuario, daoUsuarioCuidadano) {
    usuario.idUserCitizen = null
    usuario.dni = null
    usuario.address = null
    usuario.birthdate = null

    return {
        user: usuario,

        async persistir() {
            console.log(this.user.idUserType)
            if (this.user.idUserType != 2) { throw new ValidationError("Tipo de usuario incorrecto o faltante.") }
            await this.user.persistir()
            if (this.user.id) {
                let result = await daoUsuarioCuidadano.persistir(this)
                if (!this.user.idUserCitizen) {
                    this.user.idUserCitizen = result
                }
            }
            return this
        },

        async obtenerDatos(id, email) {
            let datos
            if(id){
                datos = await daoUsuarioCuidadano.obtenerDatosPorId(id)
            } else {
                if(email){
                    datos = await daoUsuarioCuidadano.obtenerDatosPorEmail(email)
                } else {
                    throw new ValidationError("Identificador de usuario faltante.")
                }
            }
            
            this.user.id = datos.id
            this.user.idUserCitizen = datos.idusercitizen
            this.user.idUserType = datos.idusertype
            this.user.email = datos.email
            this.user.name = datos.name
            this.user.surname = datos.surname
            this.user.creationDate = datos.creationdate ? datos.creationdate.toISOString().split('T')[0] : datos.creationdate
            //this.userTypeCode = datos.usertypecode
            this.user.dni = datos.dni
            this.user.address = datos.address
            this.user.birthdate = datos.birthdate ? datos.birthdate.toISOString().split('T')[0] : datos.birthdate
            return this
        }
    }
}

export default crearUsuarioCiudadano