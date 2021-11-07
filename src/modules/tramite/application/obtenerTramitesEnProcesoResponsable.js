import { ValidationError } from "../../../common/errors.js"

function crearObtenerTramitesEnProcesoResponsable(tramite) {
    return {
        async ejecutar() {            
            return await tramite.buscarTodos(null, null, null, null, null, null, null, 3, 4, null, null)
        }
    }
}

export default crearObtenerTramitesEnProcesoResponsable