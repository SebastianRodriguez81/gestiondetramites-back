import { NotFoundError } from "../../../../common/errors.js"

function crearDaoTramiteLicenciaConducir(db) {

    return {

        obtenerDatosLicencia: async (idProcedure) => {

            

            const newQ = `
                        select
                            tra.id,
                            tra.estadosidx as idState,
                            tra.tipostramiteidx as idProcedureType,
                            tra.usuariosid as idUserCitizen,
                            tra.usuariosasigid as idUserMunicipal,
                            tra.nombre as userName,
                            tra.apellido as userSurname,
                            tra.dni as userDni,
                            tra.domicilio as userAddress,
                            tra.fechanacimiento as userBirthdate,
                            tra.fechacreacion as creationDate,
                            tra.fechaasigancion as assignmentDate,
                            tra.fecharevision as revisionDate,
                            tra.fecharetiro as withdrawalDate,
                            tra.fechafinalizado as completedDate,
                            tra.rechazado as rejected,
                            tra.rechazomotivo as reasonRejection,  
                            tra.ultimamodifciacion as lastmodificationdate,                                                  
                            lin.id as idlicence,
                            lin.tipotramitelicencia as subProcedureType,
                            lin.claselicencia as licenceCode,
                            lin.selfieurl as selfieUrl,
                            lin.selfiedniurl as selfieDniUrl,
                            lin.frentedniurl as frontDniUrl,
                            lin.dorsodniurl as backDniUrl,
                            lin.libredeudasurl as debtFreeUrl,
                            tipo.descripcion as proceduretypedescription
                        from tramites as tra
                        join licenciaconducirdatos as lin
                            on lin.tramitesid = tra.id
                        join tipostramite as tipo
                            on tipo.idx = tra.tipostramiteidx
                        where tra.id = ${idProcedure}
                        and tra.eliminado = false`

            //console.log(newQ)
            try {                
                const result = await db.ejecutar(newQ)
                if (!result.length) { throw new NotFoundError('tramite no encontrado.') }
                return result[0]
            } catch (err) {
                switch (err.constructor) {
                    case NotFoundError:
                        throw err

                    default:
                        throw new Error('Hubo un error al obtener los datos del tramite:' + err.message)
                }                
            }

        },

        persistir: async (tramiteLicenciaConducir) => {

            const qTabla = 'licenciaconducirdatos'
            const qFormer = db.getQueryBuilder()

            qFormer.setTabla(qTabla)
            qFormer.setQueryType(qFormer.getQueryTypes().insert)
            qFormer.addCampo('id', "default")
            qFormer.addCampo('tramitesid', tramiteLicenciaConducir.id)
            qFormer.addCampo('tipotramitelicencia', "'" + tramiteLicenciaConducir.subProcedureType + "'")
            qFormer.addCampo('claselicencia', "'" + tramiteLicenciaConducir.licenceCode + "'")
            qFormer.addCampo('selfieurl', "'" + tramiteLicenciaConducir.selfieUrl + "'")
            qFormer.addCampo('selfiedniurl', "'" + tramiteLicenciaConducir.selfieDniUrl + "'")
            qFormer.addCampo('frentedniurl', "'" + tramiteLicenciaConducir.frontDniUrl + "'")
            qFormer.addCampo('dorsodniurl', "'" + tramiteLicenciaConducir.backDniUrl + "'")
            qFormer.addCampo('libredeudasurl', "'" + tramiteLicenciaConducir.debtFreeUrl + "'")

            const newQ = qFormer.getQuerry()
            //console.log(newQ)
            try {
                const result = await db.ejecutar(newQ);
                return result;
            } catch (err) {
                throw new Error('Hubo un error gragar el tramite de licencia de conducir: ' + err.message)
            }
        }
    }
}

export default crearDaoTramiteLicenciaConducir