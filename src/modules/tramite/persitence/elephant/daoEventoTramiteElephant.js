import { NotFoundError } from "../../../../common/errors.js"
import { getValidDate } from "../../../../common/validDate.js"

function crearDaoEventoTramite(db) {
    return {
        persistir: async (eventoTramite) => {
            // const qTabla = 'usuarios'
            // const qFormer = db.getQueryBuilder()
            // const fecha = getValidDate()

            // qFormer.setTabla(qTabla)
            // qFormer.addCampo('tiposusuarioidx', usuario.idUserType)
            // usuario.email ? qFormer.addCampo('correo', "'" + usuario.email + "'") : qFormer.addCampo('correo', usuario.email)
            // usuario.pass ? qFormer.addCampo('contraseña', "'" + usuario.pass + "'") : qFormer.addCampo('contraseña', usuario.pass)
            // usuario.name ? qFormer.addCampo('nombre', "'" + usuario.name + "'") : qFormer.addCampo('nombre', usuario.name)
            // usuario.surname ? qFormer.addCampo('apellido', "'" + usuario.surname + "'") : qFormer.addCampo('apellido', usuario.surname)
            // qFormer.addCampo('ultimamodifciacion', "'" + fecha + "'")

            if (eventoTramite.id) {
                // // UPDATE  
                // qFormer.setQueryType(qFormer.getQueryTypes().update)  
                // usuario.creationDate ? qFormer.addCampo('fechacreacion', "'" + usuario.creationDate + "'") : qFormer.addCampo('fechacreacion', usuario.creationDate)              
                // qFormer.addCondicion("id", "=", tramite.id)
            } else {
                console.log(eventoTramite)
                // INSERT
                // qFormer.setQueryType(qFormer.getQueryTypes().insert)
                // qFormer.addCampo('id', "default")
                // qFormer.addCampo('eliminado', false)
                // qFormer.addCampo('fechacreacion', "'" + fecha + "'")
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
                const newQ = `
                    select
                        id,
                        tramiteid as idProcedure,
                        fechaevento as eventDate,
                        observacion as observation
                    from tramiteeventos
                    where id = ${id}`

                //console.log(newQ)
                const result = await db.ejecutar(newQ)
                if (!result.length) { throw new NotFoundError('Evento de tramite no encontrado.') }
                return result[0]
            } catch (err) {
                switch (err.constructor) {
                    case NotFoundError:
                        throw err
                    default:
                        throw new Error('Hubo un error al buscar el evento del tramite.' + err.message)
                }
            }
        },

        buscarTodosPorIdTramite: async (idProcedure) => {
            try {
                const newQ = `
                    select
                        id,
                        tramiteid as idProcedure,
                        fechaevento as eventDate,
                        observacion as observation
                    from tramiteeventos
                    where tramiteid = ${idProcedure}`

                //console.log(newQ)
                const result = await db.ejecutar(newQ)
                return result
            } catch (err) {
                throw new Error('Hubo un error al buscar los eventos del tramite.' + err.message)
            }
        }
    }
}

export default crearDaoEventoTramite