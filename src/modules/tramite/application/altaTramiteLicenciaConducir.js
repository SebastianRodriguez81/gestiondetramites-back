import { ValidationError } from "../../../common/errors.js";
import {isValidDate} from "../../../common/validDate.js"

function crearAltaTramiteLicenciaConducir(tramiteLicenciaConducir) {
    return {
        async ejecutar(tramiteLicenciaConducirData) {

            //  Validar datos
            if (typeof tramiteLicenciaConducirData.idUser !== 'number' ||
                typeof tramiteLicenciaConducirData.idProcedureType !== 'number' ||
                typeof tramiteLicenciaConducirData.userName !== 'string' ||
                typeof tramiteLicenciaConducirData.userSurname !== 'string' ||
                typeof tramiteLicenciaConducirData.userDni !== 'string' ||
                typeof tramiteLicenciaConducirData.userAddress !== 'string' ||
                typeof tramiteLicenciaConducirData.userBirthdate !== 'string' ||
                !isValidDate(tramiteLicenciaConducirData.userBirthdate) ||
                typeof tramiteLicenciaConducirData.subProcedureType !== 'string' ||
                typeof tramiteLicenciaConducirData.licenceCode !== 'string' ||
                typeof tramiteLicenciaConducirData.selfieUrl !== 'string' ||
                typeof tramiteLicenciaConducirData.selfieDniUrl !== 'string' ||
                typeof tramiteLicenciaConducirData.frontDniUrl !== 'string' ||
                typeof tramiteLicenciaConducirData.backDniUrl !== 'string' ||
                typeof tramiteLicenciaConducirData.debtFreeUrl !== 'string'
            ) {
                throw new ValidationError("Datos errornes y/o faltantes 222.")
            }

            //  Validar usuario existente
            //  faltante............................................................     

            //  Validar tipo de usuario
            //  faltante............................................................     

            //  Validar usuario en tramite
            const cantEst1 = await tramiteLicenciaConducir.tramite.buscarTodos(1, 1, null, null, tramiteLicenciaConducirData.idUser, null)
            const cantEst2 = await tramiteLicenciaConducir.tramite.buscarTodos(2, 1, null, null, tramiteLicenciaConducirData.idUser, null)
            if (cantEst1.length || cantEst2.length) {
                //throw new ValidationError("Ya existe un tramie de licencia en curso para el usuario.")
            }

            //  Preparar tramite            
            tramiteLicenciaConducir.tramite.idState = 1
            tramiteLicenciaConducir.tramite.idProcedureType = 1
            tramiteLicenciaConducir.tramite.idUserCitizen = tramiteLicenciaConducirData.idUser
            tramiteLicenciaConducir.tramite.userName = tramiteLicenciaConducirData.userName
            tramiteLicenciaConducir.tramite.userSurname = tramiteLicenciaConducirData.userSurname
            tramiteLicenciaConducir.tramite.userDni = tramiteLicenciaConducirData.userDni
            tramiteLicenciaConducir.tramite.userAddress = tramiteLicenciaConducirData.userAddress
            tramiteLicenciaConducir.tramite.userBirthdate = tramiteLicenciaConducirData.userBirthdate
            tramiteLicenciaConducir.tramite.rejected = false
            tramiteLicenciaConducir.subProcedureType = tramiteLicenciaConducirData.subProcedureType
            tramiteLicenciaConducir.licenceCode = tramiteLicenciaConducirData.licenceCode
            tramiteLicenciaConducir.selfieUrl = tramiteLicenciaConducirData.selfieUrl
            tramiteLicenciaConducir.selfieDniUrl = tramiteLicenciaConducirData.selfieDniUrl
            tramiteLicenciaConducir.frontDniUrl = tramiteLicenciaConducirData.frontDniUrl
            tramiteLicenciaConducir.backDniUrl = tramiteLicenciaConducirData.backDniUrl
            tramiteLicenciaConducir.debtFreeUrl = tramiteLicenciaConducirData.debtFreeUrl

            // Grabar
            await tramiteLicenciaConducir.persistir()
            delete tramiteLicenciaConducir.id
            return tramiteLicenciaConducir
        }
    }
}

export default crearAltaTramiteLicenciaConducir