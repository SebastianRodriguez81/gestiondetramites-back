import { NotFoundError } from "../../../../common/errors.js"

function crearDaoUsuarioCiudadano(db) {
    return {
        persistir: async (usuarioCiudadno) => {},

        obtenerDatosPorId: async (id) => {
            console.log(id)
            try {
                const newQ = `
                            select
                                usu.id,
                                tiposusuarioidx as idUserType,
                                tipo.codigo as userTypeCode,
                                correo as email, nombre as name,
                                apellido as surname, 
                                fechacreacion as creationDate,
                                ciu.id as idCitizen,
                                ciu.dni as dni,
                                ciu.domicilio as address,
                                ciu.fechanacimiento as birthdate
                            from usuarios as usu
                            join tiposUsuario as tipo
                                on tipo.idx = usu.tiposusuarioidx
                                and tipo.idx = 2
                            join usuariosciudadano as ciu
                                on ciu.usuariosId = usu.id
                            where eliminado = false
                            and usu.id = ${id}`

                const result = await db.ejecutar(newQ)
                if (!result.length) {throw new NotFoundError('Usuario no encontrado.')}
                return result[0]
            } catch (err) {
                if ()
                throw new Error('Hubo un error al buscar los datos del usuario ciudadano. ' + err.message)
            }
        }        
    }
}

export default crearDaoUsuarioCiudadano