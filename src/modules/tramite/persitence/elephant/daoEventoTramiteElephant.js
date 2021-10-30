import { NotFoundError } from "../../../../common/errors.js"
import { getValidDate } from "../../../../common/validDate.js"

function crearDaoEventoTramite(db) {
    return {
        persistir: async (eventoTramite) => {
            const qTabla = 'tramiteeventos'
            const qFormer = db.getQueryBuilder()            

            qFormer.setTabla(qTabla)
            qFormer.addCampo('tramiteid', eventoTramite.idProcedure)
            eventoTramite.eventDate ? qFormer.addCampo('fechaevento', "'" + eventoTramite.eventDate + "'") : qFormer.addCampo('fechaevento', eventoTramite.eventDate)
            eventoTramite.observation ? qFormer.addCampo('observacion', "'" + eventoTramite.observation + "'") : qFormer.addCampo('observacion', eventoTramite.observation)

            if (eventoTramite.id) {
                // UPDATE  
                qFormer.setQueryType(qFormer.getQueryTypes().update)                
                qFormer.addCondicion("id", "=", eventoTramite.id)
            } else {               
                //INSERT
                qFormer.setQueryType(qFormer.getQueryTypes().insert)
                qFormer.addCampo('id', "default")               
            }

            const newQ = qFormer.getQuerry()
            console.log(newQ)
            try {
                const result = await db.ejecutar(newQ);
                return result;
            } catch (err) {
                throw new Error('Hubo un error al persistir el evento: ' + err.message)
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