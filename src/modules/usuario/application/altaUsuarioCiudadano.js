import { ValidationError } from "../../../common/errors.js";
import { isValidDate, getValidDate } from "../../../common/validDate.js"

function crearAltaUsuarioCiudadano(usuarioCiudadano) {
    return {
        async ejecutar(usuarioCiudadanoData) {

            //  Validar datos
            if (
                typeof usuarioCiudadanoData.email !== 'string' ||
                typeof usuarioCiudadanoData.pass !== 'string' ||
                typeof usuarioCiudadanoData.name !== 'string' ||
                typeof usuarioCiudadanoData.surname !== 'string' ||
                typeof usuarioCiudadanoData.dni !== 'string' ||
                typeof usuarioCiudadanoData.address !== 'string' ||
                typeof usuarioCiudadanoData.birthdate !== 'string' ||
                !isValidDate(usuarioCiudadanoData.birthdate)
            ) {
                throw new ValidationError("Datos erroneos y/o faltantes.")
            }

            //  Validaciones

            //  Preparar usuario ciudadano
            usuarioCiudadano.user.idUserType = 2
            usuarioCiudadano.user.email = usuarioCiudadanoData.email
            usuarioCiudadano.user.pass = usuarioCiudadanoData.pass
            usuarioCiudadano.user.name = usuarioCiudadanoData.name
            usuarioCiudadano.user.surname = usuarioCiudadanoData.surname
            usuarioCiudadano.user.dni = usuarioCiudadanoData.dni
            usuarioCiudadano.user.address = usuarioCiudadanoData.address
            usuarioCiudadano.user.birthdate = usuarioCiudadanoData.birthdate
            usuarioCiudadano.user.creationDate = getValidDate()

            // Grabar
            await usuarioCiudadano.persistir()
            return usuarioCiudadano.user
        }
    }
}

export default crearAltaUsuarioCiudadano