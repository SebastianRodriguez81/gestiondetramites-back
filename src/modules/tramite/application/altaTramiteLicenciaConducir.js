function crearAltaTramiteLicenciaConducir(tramiteLicenciaConducir) {
    return {
        async ejecutar(tramiteLicenciaConducirData) {

            //  Validar datos de creacion
            if (!tramiteLicenciaConducirData) {throw new Error("Tramite invalido o faltante.")}           
            if (!tramiteLicenciaConducirData.userId) {throw new Error("Usuario invalido o faltante.")}            
            if (!tramiteLicenciaConducirData.idProcedureType == 1) {throw new Error("Tipo de tramite invalido o faltante.")}
            if (!tramiteLicenciaConducirData.tipoLicencia) {throw new Error("Tipo de licencia invalida o faltante.")}

            //  Validar usuario existente
            // *

            //  Validar usuario en tramite
            const cantEst1 = await tramiteLicenciaConducir.tramite.buscarTodos(1, 1, null, null, tramiteLicenciaConducirData.userId, null)
            const cantEst2 = await tramiteLicenciaConducir.tramite.buscarTodos(2, 1, null, null, tramiteLicenciaConducirData.userId, null)            
            if(cantEst1.length || cantEst2.length) {throw new Error("Ya existe un tramie de licencia en curso para el usuario.")}

            //  Preparar tramite
            tramiteLicenciaConducir.setUsuariosId(tramiteLicenciaConducirData.userId)
            tramiteLicenciaConducir.setEstadosIdx(1)
            tramiteLicenciaConducir.setTipoLicencia(tramiteLicenciaConducirData.tipoLicencia)
            //tramiteLicenciaConduicir.setFechaLicencia() 
            //tramiteLicenciaConduicir.setFechaTramite()
            tramiteLicenciaConducir.setRetirada(false)

            // Grabar
            const result = tramiteLicenciaConducir.persistir()
            if(!result){throw new Error("Error al registrar el alta de tramite de licencia de conducir..")}

            return tramiteLicenciaConducir
        }
    }
}

export default crearAltaTramiteLicenciaConducir