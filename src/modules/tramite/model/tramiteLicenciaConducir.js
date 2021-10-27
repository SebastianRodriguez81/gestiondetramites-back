function crearTramiteLicenciaConducir(tramite, daoTramiteLicenciaConducir) {
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
                if (!this.procedure.idLicence) { this.procedure.idLicence = result }
            }                       
            return this
        },

        async obtenerDatos(idProcedure) {
            const datos = await daoTramiteLicenciaConducir.obtenerDatosLicencia(idProcedure)

            this.procedure.id = datos.id
            this.procedure.idState = datos.idstate
            this.procedure.idProcedureType = datos.idproceduretype
            this.procedure.idUserCitizen = datos.idusercitizen
            this.procedure.idUserMunicipal = datos.idusermunicipal
            this.procedure.userName = datos.username
            this.procedure.userSurname = datos.usersurname
            this.procedure.userDni = datos.userdni
            this.procedure.userAddress = datos.useraddress
            this.procedure.userBirthdate = datos.userbirthdate
            this.procedure.creationDate = datos.creationdate
            this.procedure.assignmentDate = datos.assignmentdate
            this.procedure.revisionDate = datos.revisiondate
            this.procedure.withdrawalDate = datos.withdrawaldate
            this.procedure.completedDate = datos.completeddate
            this.procedure.rejected = datos.rejected
            this.procedure.reasonRejection = datos.reasonrejection
            this.procedure.idLicence = datos.idlicence
            this.procedure.subProcedureType = datos.subproceduretype
            this.procedure.licenceCode = datos.licencecode
            this.procedure.selfieUrl = datos.selfieurl
            this.procedure.selfieDniUrl = datos.selfiedniurl
            this.procedure.frontDniUrl = datos.frontdniurl
            this.procedure.backDniUrl = datos.backdniurl
            this.procedure.debtFreeUrl = datos.debtfreeurl

            return this
        }
    }
}

export default crearTramiteLicenciaConducir