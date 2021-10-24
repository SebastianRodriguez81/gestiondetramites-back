import { NotFoundError } from "../../../../common/errors.js"

function crearDaoUsuario(db) {
    return {
        persistir: async (usuario) => {},

        obtenerDatosPorId: async (id) => {
            try {
                const newQ = `select
                                id,
                                tiposusuarioidx as isUserType,
                                tipo.codigo as userTypeCode,
                                correo as email, nombre as name,
                                apellido as surname, 
                                fechacreacion as creationDate
                            from usuarios as usu
                            join tiposUsuario as tipo
                            on tipo.idx = usu.tiposusuarioidx
                            where eliminado = false
                            and usu.id = ${id}`

                const result = await db.ejecutar(newQ)
                if (!result.length) {
                    throw new NotFoundError('Usuario no encontrado.')
                }
                return result[0]
            } catch (err) {
                switch (err.constructor) {
                    case NotFoundError:
                        throw err

                    default:
                        throw new Error('Hubo un error al buscar los datos del usuarios.' + err.message)
                }

            }
        },

        buscarTodos: async () => {
            try {
                const newQ = `select
                                id,
                                tiposusuarioidx as isUserType,
                                tipo.codigo as userTypeCode,
                                correo as email, nombre as name,
                                apellido as surname, 
                                fechacreacion as creationDate
                            from usuarios as usu
                            join tiposUsuario as tipo
                            on tipo.idx = usu.tiposusuarioidx
                            where eliminado = false`

                const result = await db.ejecutar(newQ)
                return result
            } catch (err) {
                throw new Error('Hubo un error al buscar los usuarios.' + err.message)
            }
        }
    }
}

export default crearDaoUsuario;