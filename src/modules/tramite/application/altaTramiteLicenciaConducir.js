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
                !tramiteLicenciaConducirData.userDni ||
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
                throw new ValidationError("Datos errornes y/o faltantes.")
            }

            //  Validar usuario existente
            //  faltante............................................................     

            //  Validar tipo de usuario
            //  faltante............................................................     

            //  Validar usuario en tramite
            const cantEst1 = await tramiteLicenciaConducir.procedure.buscarTodos(1, 1, null, null, tramiteLicenciaConducirData.idUser, null)
            const cantEst2 = await tramiteLicenciaConducir.procedure.buscarTodos(2, 1, null, null, tramiteLicenciaConducirData.idUser, null)
            if (cantEst1.length || cantEst2.length) {
                //throw new ValidationError("Ya existe un tramie de licencia en curso para el usuario.")
            }

            //  Preparar tramite            
            tramiteLicenciaConducir.procedure.idState = 1
            tramiteLicenciaConducir.procedure.idProcedureType = 1
            tramiteLicenciaConducir.procedure.idUserCitizen = tramiteLicenciaConducirData.idUser
            tramiteLicenciaConducir.procedure.userName = tramiteLicenciaConducirData.userName
            tramiteLicenciaConducir.procedure.userSurname = tramiteLicenciaConducirData.userSurname
            tramiteLicenciaConducir.procedure.userDni = tramiteLicenciaConducirData.userDni
            tramiteLicenciaConducir.procedure.userAddress = tramiteLicenciaConducirData.userAddress
            tramiteLicenciaConducir.procedure.userBirthdate = tramiteLicenciaConducirData.userBirthdate
            tramiteLicenciaConducir.procedure.rejected = false
            tramiteLicenciaConducir.procedure.subProcedureType = tramiteLicenciaConducirData.subProcedureType
            tramiteLicenciaConducir.procedure.licenceCode = tramiteLicenciaConducirData.licenceCode
            tramiteLicenciaConducir.procedure.selfieUrl = tramiteLicenciaConducirData.selfieUrl
            tramiteLicenciaConducir.procedure.selfieDniUrl = tramiteLicenciaConducirData.selfieDniUrl
            tramiteLicenciaConducir.procedure.frontDniUrl = tramiteLicenciaConducirData.frontDniUrl
            tramiteLicenciaConducir.procedure.backDniUrl = tramiteLicenciaConducirData.backDniUrl
            tramiteLicenciaConducir.procedure.debtFreeUrl = tramiteLicenciaConducirData.debtFreeUrl

            // Grabar          
            
            return  await tramiteLicenciaConducir.persistir()
        }
    }
}

export default crearAltaTramiteLicenciaConducir