import { NotFoundError } from "../../../../common/errors.js"
import { getValidDate } from "../../../../common/validDate.js"

function crearDaoUsuario(db) {
    return {
        persistir: async (usuario) => {
            const qTabla = 'usuarios'
            const qFormer = db.getQueryBuilder()
            const fecha = getValidDate()

            qFormer.setTabla(qTabla)
            qFormer.addCampo('tiposusuarioidx', usuario.idUserType)
            usuario.email ? qFormer.addCampo('correo', "'" + usuario.email + "'") : qFormer.addCampo('correo', usuario.email)
            usuario.pass ? qFormer.addCampo('contraseña', "'" + usuario.pass + "'") : qFormer.addCampo('contraseña', usuario.pass)
            usuario.name ? qFormer.addCampo('nombre', "'" + usuario.name + "'") : qFormer.addCampo('nombre', usuario.name)
            usuario.surname ? qFormer.addCampo('apellido', "'" + usuario.surname + "'") : qFormer.addCampo('apellido', usuario.surname)
            qFormer.addCampo('ultimamodifciacion', "'" + fecha + "'")

            if (usuario.id) {
                // UPDATE  
                qFormer.setQueryType(qFormer.getQueryTypes().update)  
                usuario.creationDate ? qFormer.addCampo('fechacreacion', "'" + usuario.creationDate + "'") : qFormer.addCampo('fechacreacion', usuario.creationDate)              
                qFormer.addCondicion("id", "=", tramite.id)
            } else {
                // INSERT
                qFormer.setQueryType(qFormer.getQueryTypes().insert)
                qFormer.addCampo('id', "default")
                qFormer.addCampo('eliminado', false)
                qFormer.addCampo('fechacreacion', "'" + fecha + "'")
            }

            const newQ = qFormer.getQuerry()
            console.log(newQ)

            try {
                const result = await db.ejecutar(newQ);
                return result;
            } catch (err) {
                throw new Error('Hubo un error al persistir el usuario: ' + err.message)
            }
        },

        obtenerDatosPorId: async (id) => {
            try {
                const newQ = `select
                                id,
                                tiposusuarioidx as isUserType,
                                correo as email,
                                nombre as name,
                                apellido as surname, 
                                fechacreacion as creationDate,
                                tipo.codigo as userTypeCode
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
                                correo as email,
                                nombre as name,
                                apellido as surname, 
                                fechacreacion as creationDate,
                                tipo.codigo as userTypeCode
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