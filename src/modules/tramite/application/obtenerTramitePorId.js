function crearObtenerTramitePorId(tramite, licenciaconducirdatos) {
    return {
        async ejecutar(id) {
            if (!id) { throw new Error("tramite invalido o faltante") }
           
            await tramite.obtenerDatos(id)           

            if (!tramite.idProcedureType) {throw new Error("No se pudo identificar el tipo de tramite.")}

            

            switch (tramite.idProcedureType) {
                case 1:                   
                    await licenciaconducirdatos.obtenerDatos(tramite.id)                        
                    break;
            }            

            return licenciaconducirdatos
        }
    }
}

export default crearObtenerTramitePorId