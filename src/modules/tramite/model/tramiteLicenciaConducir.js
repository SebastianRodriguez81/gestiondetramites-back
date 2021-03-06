import moment from 'moment'

function crearTramiteLicenciaConducir(tramite, daoTramiteLicenciaConducir) {
    tramite.procedureTypeDescription = null
    tramite.idLicence = null
    tramite.subProcedureType = null
    tramite.licenceCode = null
    tramite.selfieUrl = null
    tramite.selfieDniUrl = null
    tramite.frontDniUrl = null
    tramite.backDniUrl = null
    tramite.debtFreeUrl = null

    return {       
        procedure: tramite,        

        async persistir() {
            this.procedure.idProcedureType = 1
            await this.procedure.persistir()
            if (this.procedure.id) {
                let result = await daoTramiteLicenciaConducir.persistir(this.procedure)
                if (!this.procedure.idLicence) { this.procedure.idLicence = parseInt(result) }
            }                       
            return this.procedure
        },

        async obtenerDatos(idProcedure) {
           
            const datos = await daoTramiteLicenciaConducir.obtenerDatosLicencia(idProcedure)
           
            if (datos.revisiondate) datos.revisiondate.setHours(datos.revisiondate.getHours() -3)
            if (datos.withdrawaldate) datos.withdrawaldate.setHours(datos.withdrawaldate.getHours() -3)     

            this.procedure.id = datos.id
            this.procedure.idState = datos.idstate
            this.procedure.idProcedureType = datos.idproceduretype
            this.procedure.idUserCitizen = datos.idusercitizen
            this.procedure.idUserMunicipal = datos.idusermunicipal
            this.procedure.userName = datos.username
            this.procedure.userSurname = datos.usersurname
            this.procedure.userDni = datos.userdni
            this.procedure.userAddress = datos.useraddress
            this.procedure.userBirthdate = datos.userbirthdate ? datos.userbirthdate.toISOString().split('T')[0] :  datos.userbirthdate
            this.procedure.creationDate = datos.creationdate ? datos.creationdate.toISOString().split('T')[0] :  datos.creationdate
            this.procedure.anlystAssignmentDate = datos.anlystassignmentdate ? datos.anlystassignmentdate.toISOString().split('T')[0] :  datos.anlystassignmentdate
            this.procedure.assignmentDate = datos.assignmentdate ?  datos.assignmentdate.toISOString().split('T')[0] :  datos.assignmentdate
            this.procedure.revisionDate = datos.revisiondate ?  datos.revisiondate.toISOString().replace(/T/, ' ').replace(/\..+/, '') :  datos.revisiondate
            this.procedure.withdrawalDate = datos.withdrawaldate ? datos.withdrawaldate.toISOString().replace(/T/, ' ').replace(/\..+/, '') :  datos.withdrawaldate
            this.procedure.completedDate = datos.completeddate ? datos.completeddate.toISOString().split('T')[0] :  datos.completeddate         
            this.procedure.rejected = datos.rejected
            this.procedure.reasonRejection = datos.reasonrejection
            this.procedure.lastModificationDate = datos.lastmodificationdate ? datos.lastmodificationdate.toISOString().split('T')[0] :  datos.lastmodificationdate
            this.procedure.procedureTypeDescription = datos.proceduretypedescription
            this.procedure.idLicence = datos.idlicence
            this.procedure.subProcedureType = datos.subproceduretype
            this.procedure.licenceCode = datos.licencecode
            this.procedure.selfieUrl = datos.selfieurl
            this.procedure.selfieDniUrl = datos.selfiedniurl
            this.procedure.frontDniUrl = datos.frontdniurl
            this.procedure.backDniUrl = datos.backdniurl
            this.procedure.debtFreeUrl = datos.debtfreeurl

            return this.procedure
        }
    }
}

export default crearTramiteLicenciaConducir