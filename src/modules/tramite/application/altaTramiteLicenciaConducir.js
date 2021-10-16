function crearAltaTramiteLicenciaConducir(tramiteLicenciaConducir) {
    return {
        async ejecutar(tramiteLicenciaConducirData) {

            if (!tramiteLicenciaConducirData) {throw new Error("Tramite invalido o faltante.")}           
            if (!tramiteLicenciaConducirData.usuariosId) {throw new Error("Usuario invalido o faltante.")}            
            if (!tramiteLicenciaConducirData.tiposTramiteIdx == 1) {throw new Error("Tipo de tramite invalido o faltante.")}

            tramiteLicenciaConducir.setUsuariosId(tramiteLicenciaConducirData.usuariosId)
            tramiteLicenciaConducir.setEstadosIdx(1)
            tramiteLicenciaConducir.setTipoLicencia(tramiteLicenciaConducirData.tipoLicencia)
            //tramiteLicenciaConduicir.setFechaLicencia() 
            //tramiteLicenciaConduicir.setFechaTramite()
            tramiteLicenciaConducir.setRetirada(false)

            const result = tramiteLicenciaConducir.persistir()
            if(!result){throw new Error("Error al registrar el alta de tramite de licencia de conducir..")}

            return tramiteLicenciaConducir
        }
    }
}

export default crearAltaTramiteLicenciaConducir