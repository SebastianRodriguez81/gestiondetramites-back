import { ValidationError } from "../../../common/errors.js"

function crearObtenerTramitesEnProcesoAnalista(tramite) {
    return {
        async ejecutar() {            
            return await tramite.buscarTodos(2)
        }
    }
}

export default crearObtenerTramitesEnProcesoAnalista