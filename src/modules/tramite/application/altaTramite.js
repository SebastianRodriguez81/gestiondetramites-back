function crearAltaTramite(altaTramiteLicenciaConduicir) {
    return {
        async ejecutar(tramiteData) {                     

            if (!tramiteData) {return new Error("Tramite invalido o faltante.")}            
            if (!tramiteData.tipoTramiteId) {return new Error("Tipo de tramite invalido o faltante.")}
            if (!tramiteData.userId) {return new Error("Usuario invalido o faltante.")}            

            switch (tramiteData.tipoTramiteId) {
                case 1:
                    return altaTramiteLicenciaConduicir.ejecutar(tramiteData)
                    break;
                default:
                    return new Error("Tipo de tramite invalido o faltante.")
            }            
        }
    }
}

export default crearAltaTramite