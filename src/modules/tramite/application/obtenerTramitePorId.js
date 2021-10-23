function crearObtenerTramitePorId(tramite, licenciaconducirdatos) {
    return {
        async ejecutar(id) {
            if (!id) { throw new Error("tramite invalido o faltante") }

            let resp = {}
            let tramiteDatos = await tramite.buscarTodos(null, null, null, null, null, null, id)
            resp.procedure = tramiteDatos[0]

            if (resp.procedure.idproceduretype) {
                switch (resp.procedure.idproceduretype) {
                    case 1:
                        let licenciaDatos = await licenciaconducirdatos.obtenerDatosLicencia(id)
                        resp.driverLicenseProcedure = licenciaDatos[0]
                        break;
                }
            }

            return resp
        }
    }
}

export default crearObtenerTramitePorId