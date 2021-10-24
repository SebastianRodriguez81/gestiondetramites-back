import { NotFoundError } from "../../../../common/errors.js"

function crearDaoUsuarioMunicipal(db) {
    return {
        persistir: async (usuarioCiudadno) => {},

        obtenerDatosPorId: async (id) => {
            try {
                const newQ = `
                            select
                                usu.id,
                                tiposusuarioidx as idUserType,
                                tipo.codigo as userTypeCode,
                                tipo.codigo as userTypeCode,
                                correo as email, nombre as name,
                                apellido as surname, 
                                fechacreacion as creationDate,
                                mun.id as idUserMunicipal,
                                mun.usuariomunicipiorolesidx as idMunicipalRole,
                                rol.codigo as municipalRoleCode
                            from usuarios as usu
                            join tiposUsuario as tipo
                                on tipo.idx = usu.tiposusuarioidx
                                and tipo.idx = 2
                            join usuariosmunicipo as mun
                                on mun.usuariosId = usu.id
                            join usuariomunicipioroles as rol
                                on rol.idx = mun.usuariomunicipiorolesidx
                            where usu.eliminado = false
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

        buscarResponsables: async () => {
            try {
                const newQ = `
                            select
                                usu.id,
                                tiposusuarioidx as idUserType,
                                tipo.codigo as userTypeCode,
                                tipo.codigo as userTypeCode,
                                correo as email, nombre as name,
                                apellido as surname, 
                                fechacreacion as creationDate,
                                mun.id as idUserMunicipal,
                                mun.usuariomunicipiorolesidx as idMunicipalRole,
                                rol.codigo as municipalRoleCode
                            from usuarios as usu
                            join tiposUsuario as tipo
                                on tipo.idx = usu.tiposusuarioidx
                                and tipo.idx = 2
                            join usuariosmunicipo as mun
                                on mun.usuariosId = usu.id
                            join usuariomunicipioroles as rol
                                on rol.idx = mun.usuariomunicipiorolesidx
                                and rol.idx = 2
                            where usu.eliminado = false`

                const result = await db.ejecutar(newQ)
                return result
            } catch (err) {
                throw new Error('Hubo un error al buscar los datos del usuarios.' + err.message)
            }
        }
    }
}

export default crearDaoUsuarioMunicipal