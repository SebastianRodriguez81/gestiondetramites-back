import ValidationError from "../../../common/errors.js";

function asignarResponsable(tramite) {
    return {
        async ejecutar(idProcedure, idUser) {           
            await tramite.obtenerDatos(idProcedure)           
            tramite.asignarResponsable(idUser)           
            await tramite.persistir()

            return true
        }
    }
}

export default asignarResponsable