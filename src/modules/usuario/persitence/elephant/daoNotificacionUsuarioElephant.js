import { NotFoundError } from "../../../../common/errors.js"
import { getValidDate, getValidDateTime } from "../../../../common/validDate.js"

function crearDaoNotificacionUsuario(db) {
    return {
        persistir: async (notificacionUsuario) => {
            const qTabla = 'usuarionotificaciones'
            const qFormer = db.getQueryBuilder() 
            const fecha = getValidDateTime()           

            qFormer.setTabla(qTabla)
            qFormer.addCampo('usuarioid ', notificacionUsuario.idUser)            
            notificacionUsuario.message ? qFormer.addCampo('mensaje', "'" + notificacionUsuario.message + "'") : qFormer.addCampo('mensaje', notificacionUsuario.message)

            if (notificacionUsuario.id) {
                // UPDATE  
                qFormer.setQueryType(qFormer.getQueryTypes().update)
                notificacionUsuario.notificationDate ? qFormer.addCampo('fechanotificacion', "'" + notificacionUsuario.notificationDate + "'") : qFormer.addCampo('fechanotificacion', notificacionUsuario.notificationDate)                
                qFormer.addCondicion("id", "=", notificacionUsuario.id)
            } else {               
                //INSERT
                qFormer.setQueryType(qFormer.getQueryTypes().insert)
                qFormer.addCampo('fechanotificacion', "'" + fecha + "'")               
                qFormer.addCampo('id', "default")               
            }

            const newQ = qFormer.getQuerry()
            console.log(newQ)
            try {
                const result = await db.ejecutar(newQ);
                return result;
            } catch (err) {
                throw new Error('Hubo un error al persistir la notificacion: ' + err.message)
            }
        },     

        obtenerDatosPorId: async (id) => {
            try {
                const newQ = `
                    select
                        noti.id,
                        noti.usuarioid as idUser,
                        noti.fechanotificacion as notificationDate,
                        noti.mensaje as message,
                        noti.fechanotificacion <= coalesce(usu.fechaultimanotificacion, '0001-01-01 00:00:01') as read

                    from usuarionotificaciones as noti
                    join usuarios as usu
                        on usu.id = noti.usuarioid
                    where noti.id = ${id}`

                //console.log(newQ)
                const result = await db.ejecutar(newQ)
                if (!result.length) { throw new NotFoundError('Notificacion del usuario no encontrada.') }
                return result[0]
            } catch (err) {
                switch (err.constructor) {
                    case NotFoundError:
                        throw err
                    default:
                        throw new Error('Hubo un error al buscar las notificaciones del usuario.' + err.message)
                }
            }
        },

        buscarTodosPorIdUsuario: async (idUsuario) => {            
            
            try {
                const newQ = `
                    select
                        noti.id,
                        noti.usuarioid as idUser,
                        noti.fechanotificacion as notificationDate,
                        noti.mensaje as message,
                        noti.fechanotificacion <= coalesce(usu.fechaultimanotificacion, '0001-01-01 00:00:01') as read

                    from usuarionotificaciones as noti
                    join usuarios as usu
                        on usu.id = noti.usuarioid
                    where noti.usuarioid = ${idUsuario}`

                //console.log(newQ)
                const result = await db.ejecutar(newQ)
                return result
            } catch (err) {
                throw new Error('Hubo un error al buscar las notificaciones del usuario.' + err.message)
            }
        }
    }
}

export default crearDaoNotificacionUsuario