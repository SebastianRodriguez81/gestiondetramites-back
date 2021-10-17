function crearTramiteLicenciaConducir(tramite, daoTramiteLicenciaConducir) {

    return {        
        id: null,
        tramite: tramite,
        tipoLicencia: null,
        fechaLicencia: null,
        fechaTramite: null,
        retirada: null,

        setUsuariosId(usuariosId) {this.tramite.usuariosId = usuariosId},
        setEstadosIdx(estadosIdx) {this.tramite.estadosIdx = estadosIdx},
        setTipoLicencia(tipoLicencia) {this.tipoLicencia = tipoLicencia},
        setFechaLicencia(fechaLicencia) {this.fechaLicencia = fechaLicencia},
        setFechaTramite(fechaTramite) {this.fechaTramite = fechaTramite},
        setRetirada(retirada) {this.retirada = retirada},

        async persistir() {
            this.tramite.tiposTramiteIdx = 1
            
            let result 

            if(await this.tramite.persistir()){
                result = await daoTramiteLicenciaConducir.persistir(this)
                if(!this.id){this.id = result}
            }            
            
            return result
        },
    }
}

export default crearTramiteLicenciaConducir