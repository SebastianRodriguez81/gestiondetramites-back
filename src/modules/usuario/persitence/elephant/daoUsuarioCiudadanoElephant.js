import { NotFoundError } from "../../../../common/errors.js"

function crearDaoUsuarioCiudadano(db) {
    return {
        persistir: async (usuario) => {
            const qTabla = 'usuarios'
            const qFormer = db.getQueryBuilder()
            const fecha = getValidDate()

            qFormer.setTabla(qTabla)
            qFormer.addCampo('usuariosid', usuario.id)
            usuario.dni ? qFormer.addCampo('dni', "'" + usuario.dni + "'") : qFormer.addCampo('dni', usuario.dni)
            usuario.address ? qFormer.addCampo('domicilio', "'" + usuario.address + "'") : qFormer.addCampo('domicilio', usuario.address)
            usuario.birthdate ? qFormer.addCampo('fechanacimiento', "'" + usuario.birthdate + "'") : qFormer.addCampo('fechanacimiento', usuario.birthdate)
            qFormer.addCampo('ultimamodifciacion', "'" + fecha + "'")

            if (usuario.idUserCitizen) {
                // UPDATE   
                qFormer.setQueryType(qFormer.getQueryTypes().update)
                qFormer.addCondicion("id", "=", usuario.idUserCitizen)
            } else {
                // INSERT
                qFormer.setQueryType(qFormer.getQueryTypes().insert)
                qFormer.addCampo('id', "default")
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
                                ciu.id as idUserCitizen,
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
                switch (err.constructor) {
                    case NotFoundError:
                        throw err

                    default:
                        throw new Error('Hubo un error al buscar los datos del usuarios.' + err.message)
                }
            }
        }        
    }
}

export default crearDaoUsuarioCiudadano