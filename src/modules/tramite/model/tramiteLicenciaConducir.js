function crearTramiteLicenciaConducir(tramite, daoTramiteLicenciaConducir) {

    return {
        id: null,
        tramite: tramite,
        tipolicencia: null,
        fechaLicencia: null,
        fechaTramite: null,
        retirada: null,

        async persistir() {

            this.tramite.tipoTramite = {
                id: 1
            }
            await this.tramite.persistir(this.tramite)
            this.id = await daoTramiteLicenciaConducir.persistir(this)
            return this
        },

        setUser(userId) {
            this.tramite.usuario = {
                id: userId
            }
        },

        setEstadoTramite(estadoTramiteId) {
            this.tramite.estadoTramite = {
                id: estadoTramiteId
            }
        },

        setTipoLicencia(tipoLicencia) {
            this.tipoLicencia = tipoLicencia
        },

        setFechaLicencia(fechaLicencia) {
            this.fechaLicencia = fechaLicencia
        },

        setFechaTramite(fechaTramite) {
            this.fechaTramite = fechaTramite
        },

        setRetirada(retirada) {
            this.retirada = retirada
        },
    }
}

export default crearTramiteLicenciaConducir