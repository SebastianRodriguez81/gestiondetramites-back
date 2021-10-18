function crearAltaTramite(altaTramiteLicenciaConduicir) {
    return {
        async ejecutar(tramiteData) {                     

            if (!tramiteData) {throw new Error("Tramite invalido o faltante.")}            
            if (!tramiteData.tiposTramiteIdx) {throw new Error("Tipo de tramite invalido o faltante.")}
                           
            switch (tramiteData.tiposTramiteIdx) {
                case 1:
                    return altaTramiteLicenciaConduicir.ejecutar(tramiteData)
                    break;
                default:
                    throw new Error("Tipo de tramite invalido o faltante.")
                    break;
            }
        }
    }
}

export default crearAltaTramite