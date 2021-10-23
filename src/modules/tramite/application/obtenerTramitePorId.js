function crearObtenerTramitePorId(tramite, licenciaconducirdatos) {
    return {
        async ejecutar(id) { 
            if(!id){throw new Error("tramite invalido o faltante")} 
            
            let resp = {}
            
            let tramiteDatos = await tramite.buscarTodos(null, null, null, null, null, null, id)
            resp.tramiteDatos =  tramiteDatos[0]

            console.log( resp.tramiteDatos.tipostramiteidx)

            if (  resp.tramiteDatos.tipostramiteidx){
                switch (  resp.tramiteDatos.tipostramiteidx) {
                    case 1:
                        let licenciaDatos = await licenciaconducirdatos.obtenerDatosLicencia(id)
                        resp.licenciaDatos = licenciaDatos[0]
                        break;
                   
                }

            }    
            
            return resp
        }
    }
}

export default crearObtenerTramitePorId