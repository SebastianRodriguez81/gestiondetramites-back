import { ValidationError } from "../../../common/errors.js"

function crearObtenerTramitesEnProceso(tramite) {
    return {
        async ejecutar(usuariosId) {
            if (!usuariosId) { throw new ValidationError("Usuario invalido o faltante") }
            return await tramite.buscarTodos(null, null, null, null, null, usuariosId, null, 2, 3, 4)
        }
    }
}

export default crearObtenerTramitesEnProceso