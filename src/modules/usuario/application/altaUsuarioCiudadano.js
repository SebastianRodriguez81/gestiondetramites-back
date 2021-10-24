import { ValidationError } from "../../../common/errors.js";
import { isValidDate, getValidDate } from "../../../common/validDate.js"

function crearAltaUsuarioCiudadano(usuarioCiudadano) {
    return {
        async ejecutar(usuarioCiudadanoData) {

            //  Validar datos
            if (
                typeof usuarioCiudadanoData.body.email !== 'string' ||
                typeof usuarioCiudadanoData.body.name !== 'string' ||
                typeof usuarioCiudadanoData.body.surname !== 'string' ||
                typeof usuarioCiudadanoData.body.dni !== 'string' ||
                typeof usuarioCiudadanoData.body.address !== 'string' ||
                typeof usuarioCiudadanoData.body.birthdate !== 'string' ||
                !isValidDate(usuarioCiudadanoData.userBirthdate)
            ) {
                throw new ValidationError("Datos erroneos y/o faltantes.")
            }

            //  Validaciones

            //  Preparar usuario ciudadano
            usuarioCiudadano.user.idUserType = 2
            usuarioCiudadano.user.email = usuarioCiudadanoData.body.email
            usuarioCiudadano.user.name = usuarioCiudadanoData.body.name
            usuarioCiudadano.user.surname = usuarioCiudadanoData.body.surname
            usuarioCiudadano.user.dni = usuarioCiudadanoData.body.dni
            usuarioCiudadano.user.address = usuarioCiudadanoData.body.address
            usuarioCiudadano.user.birthdate = usuarioCiudadanoData.body.birthdate
            usuarioCiudadano.user.creationDate = getValidDate()

            // Grabar
            await usuarioCiudadano.persistir()
            return usuarioCiudadano
        }
    }
}

export default crearAltaUsuarioCiudadano