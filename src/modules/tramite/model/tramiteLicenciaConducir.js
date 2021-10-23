function crearTramiteLicenciaConducir(tramite, daoTramiteLicenciaConducir) {

    return {
        id: null,
        tramite: tramite,
        subProcedureType: null,
        licenceCode: null,
        selfieUrl: null,
        selfieDniUrl: null,
        frontDniUrl: null,
        backDniUrl: null,
        debtFreeUrl: null,

        async persistir() {
            this.tramite.idProcedureType = 1
            await this.tramite.persistir()
            if (this.tramite.id) {
                let result = await daoTramiteLicenciaConducir.persistir(this)
                if (!this.id) { this.id = result }
            }
                       
            return this
        },

        async obtenerDatosLicencia(id) {
            return await daoTramiteLicenciaConducir.obtenerDatosLicencia(id)
        }
    }
}

export default crearTramiteLicenciaConducir