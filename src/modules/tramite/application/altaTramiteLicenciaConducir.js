function crearAltaTramiteLicenciaConducir(tramiteLicenciaConduicir) {
    return {
        async ejecutar(tramiteLicenciaConducirData) {

            if (!tramiteLicenciaConducirData.tipoTramiteId == 1) {return new Error("Tipo de tramite invalido o faltante.")}

            tramiteLicenciaConduicir.setUser(tramiteLicenciaConducirData.userId)
            tramiteLicenciaConduicir.setEstadoTramite(1)
            tramiteLicenciaConduicir.setTipoLicencia(tramiteLicenciaConducirData.Tipolicencia)
            //tramiteLicenciaConduicir.setFechaLicencia() 
            //tramiteLicenciaConduicir.setFechaTramite()
            tramiteLicenciaConduicir.setRetirada(false)

            return await tramiteLicenciaConduicir.persistir()
        }
    }
}

export default crearAltaTramiteLicenciaConducir