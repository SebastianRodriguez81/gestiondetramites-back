import { ValidationError } from "../../../common/errors.js"

function crearUsuarioCiudadano(usuario, daoUsuarioCuidadano) {
    usuario.idUserCitizen = null
    usuario.dni = null
    usuario.birthdate = null

    return {
        user: usuario,

        async persistir() {
            if (idUserType != 2) { throw new ValidationError("Tipo de usuario incorrecto o faltante.") }
            await this.user.persistir()
            if (this.user.id) {
                let result = await daoTramiteLicenciaConducir.persistir(this)
                if (!this.user.idUserCitizen) {
                    this.user.idUserCitizen = result
                }
            }
            return this
        },

        async obtenerDatos(id) {
            const datos = await daoUsuarioCuidadano.obtenerDatosPorId(id)
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