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

        async obtenerDatosLicencia(id) {
            return await daoTramiteLicenciaConducir.obtenerDatosLicencia(id)
        }
    }
}

export default crearTramiteLicenciaConducir