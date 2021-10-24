import { getValidDate } from "../../../../common/validDate.js"

function crearDaoTramite(db) {

    return {
        persistir: async (tramite) => {
            const qTabla = 'tramites'
            const qFormer = db.getQueryBuilder()
            const fecha = getValidDate()

            if (tramite.id) {
                // UPDATE       
                qFormer.setTabla(qTabla)
                qFormer.setQueryType(qFormer.getQueryTypes().update)
                qFormer.addCampo('estadosidx', tramite.idState)
                qFormer.addCampo('tipostramiteidx', tramite.idProcedureType)
                qFormer.addCampo('usuariosid', tramite.idUserCitizen)
                qFormer.addCampo('usuariosasigid', tramite.idUserMunicipal)
                tramite.userName ? qFormer.addCampo('nombre', "'" + tramite.userName + "'") : qFormer.addCampo('nombre', tramite.userName)
                tramite.userSurname ? qFormer.addCampo('apellido', "'" + tramite.userSurname + "'") : qFormer.addCampo('apellido', tramite.userSurname)
                tramite.userDni ? qFormer.addCampo('dni', "'" + tramite.userDni + "'") : qFormer.addCampo('dni', tramite.userDni)
                tramite.userAddress ? qFormer.addCampo('domicilio', "'" + tramite.userAddress + "'") : qFormer.addCampo('domicilio', tramite.userAddress)
                tramite.userBirthdate ? qFormer.addCampo('fechanacimiento', "'" + tramite.userBirthdate + "'") : qFormer.addCampo('fechanacimiento', tramite.userBirthdate)
                tramite.userBirthdate ? qFormer.addCampo('fechacreacion', "'" + tramite.userBirthdate + "'") : qFormer.addCampo('fechacreacion', tramite.userBirthdate)
                tramite.assignmentDate ? qFormer.addCampo('fechaasigancion', "'" + tramite.assignmentDate + "'") : qFormer.addCampo('fechaasigancion', tramite.assignmentDate)
                tramite.revisionDate ? qFormer.addCampo('fecharevision', "'" + tramite.revisionDate + "'") : qFormer.addCampo('fecharevision', tramite.revisionDate)
                tramite.withdrawalDate ? qFormer.addCampo('fecharetiro', "'" + tramite.withdrawalDate + "'") : qFormer.addCampo('fecharetiro', tramite.withdrawalDate)
                tramite.completedDate ? qFormer.addCampo('fechafinalizado', "'" + tramite.completedDate + "'") : qFormer.addCampo('fechafinalizado', tramite.completedDate)
                qFormer.addCampo('rechazado', tramite.rejected)
                tramite.reasonRejection ? qFormer.addCampo('rechazomotivo', "'" + tramite.reasonRejection + "'") : qFormer.addCampo('rechazomotivo', tramite.reasonRejection)
                qFormer.addCampo('eliminado', false)
                qFormer.addCampo('ultimamodifciacion', "'" + fecha + "'")
                qFormer.addCondicion("id", "=", tramite.id)

            } else {
                // INSERT
                qFormer.setTabla(qTabla)
                qFormer.setQueryType(qFormer.getQueryTypes().insert)
                qFormer.addCampo('id', "default")
                qFormer.addCampo('estadosidx', tramite.idState)
                qFormer.addCampo('tipostramiteidx', tramite.idProcedureType)
                qFormer.addCampo('usuariosid', tramite.idUserCitizen)
                tramite.idUserMunicipal ? qFormer.addCampo('usuariosasigid', tramite.idUserMunicipal) : 1 == 1
                tramite.userName ? qFormer.addCampo('nombre', "'" + tramite.userName + "'") : qFormer.addCampo('nombre', tramite.userName)
                tramite.userSurname ? qFormer.addCampo('apellido', "'" + tramite.userSurname + "'") : qFormer.addCampo('apellido', tramite.userSurname)
                tramite.userDni ? qFormer.addCampo('dni', "'" + tramite.userDni + "'") : qFormer.addCampo('dni', tramite.userDni)
                tramite.userAddress ? qFormer.addCampo('domicilio', "'" + tramite.userAddress + "'") : qFormer.addCampo('domicilio', tramite.userAddress)
                tramite.userBirthdate ? qFormer.addCampo('fechanacimiento', "'" + tramite.userBirthdate + "'") : qFormer.addCampo('fechanacimiento', tramite.userBirthdate)
                qFormer.addCampo('fechacreacion', "'" + fecha + "'")
                qFormer.addCampo('rechazado', tramite.rejected)
                qFormer.addCampo('eliminado', false)
                qFormer.addCampo('ultimamodifciacion', "'" + fecha + "'")
            }

            const newQ = qFormer.getQuerry()
            console.log(newQ)            

            try {
                const result = await db.ejecutar(newQ);
                return result;
            } catch (err) {
                throw new Error('Hubo un error al persistir el tramite: ' + err.message)
            }
        },

        obtenerDatos: async (id) => {
            const qTabla = 'tramites'
            const qFormer = db.getQueryBuilder()
            const fecha = getValidDate()

            qFormer.setTabla(qTabla)
            qFormer.setQueryType(qFormer.getQueryTypes().select)
            qFormer.addCampo('id')
            qFormer.addCampo('estadosidx as idState')
            qFormer.addCampo('tipostramiteidx as idProcedureType')
            qFormer.addCampo('usuariosid as idUserCitizen')
            qFormer.addCampo('usuariosasigid as idUserMunicipal')
            qFormer.addCampo('nombre as userName')
            qFormer.addCampo('apellido as userSurname')
            qFormer.addCampo('dni as userDni')
            qFormer.addCampo('domicilio as userAddress')
            qFormer.addCampo('fechanacimiento as userBirthdate')
            qFormer.addCampo('fechacreacion as creationDate')
            qFormer.addCampo('fechaasigancion as assignmentDate')
            qFormer.addCampo('fecharevision as revisionDate')
            qFormer.addCampo('fecharetiro as withdrawalDate')
            qFormer.addCampo('fechafinalizado as completedDate')
            qFormer.addCampo('rechazado as rejected')
            qFormer.addCampo('rechazomotivo as reasonRejection')
            qFormer.addCondicion("id", "=", id)
            qFormer.addCondicion("eliminado", "=", false)

            const newQ = qFormer.getQuerry()
            //console.log(newQ)            

            try {
                const result = await db.ejecutar(newQ);
                return result[0];
            } catch (err) {
                throw new Error('Hubo un error al obtener el tramite: ' + err.message)
            }
        },

        obtenerCantidades: async () => {
            const newQ = `  select 
                                count(tra.id) as proceduresCount,
                                tra.estadosidx as idState,
                                es.codigo as stateCode,
                                es.descripcion as stateDescription,
                                es.descripcionPublica as statePublicDescription
                            from estados as es
                            join tramites as tra
                            on tra.estadosIdx = es.idx
                            group by estadosidx, es.codigo, es.descripcion, es.descripcionPublica`

            try {
                const result = await db.ejecutar(newQ);
                return result;
            } catch (err) {
                throw new Error('Hubo un error al persistir el tramite: ' + err.message)
            }
        },

        buscarTodos: async (estadosIdx, tiposTramiteIdx, fechaCreacionDesde, fechaCreacionHasta, usuariosId, usuariosAsigId, id, opEstadosIdx1, opEstadosIdx2, opEstadosIdx3) => {

            const qTabla = 'tramites as tra'
            const qTUser = 'usuarios as usu'
            const qTUserAsig = 'usuarios as usuasig'
            const qTEstado = 'estados as est'
            const qTTipo = 'tipostramite as tipo'
            const qTUserCiudadano = 'usuariosciudadano as ctz'

            const qFormer = db.getQueryBuilder()

            qFormer.setTabla(qTabla)
            qFormer.setQueryType(qFormer.getQueryTypes().select)
            console.log(opEstadosIdx1)
            console.log(opEstadosIdx2)
            console.log(opEstadosIdx3)
            if (opEstadosIdx1 && opEstadosIdx2 && opEstadosIdx3) { qFormer.addCondicion("tra.estadosIdx", "in", `( ${opEstadosIdx1} , ${opEstadosIdx2}, ${opEstadosIdx3})`) }
            if (estadosIdx) { qFormer.addCondicion("tra.estadosIdx", "=", estadosIdx) }
            if (tiposTramiteIdx) { qFormer.addCondicion("tra.tiposTramiteIdx", "=", tiposTramiteIdx) }
            if (fechaCreacionDesde) { qFormer.addCondicion("tra.fechaCreacion", ">=", fechaCreacionDesde) }
            if (fechaCreacionHasta) { qFormer.addCondicion("tra.fechaCreacion", "<=", fechaCreacionHasta) }
            if (usuariosId) { qFormer.addCondicion("tra.usuariosId", "=", usuariosId) }
            if (usuariosAsigId) { qFormer.addCondicion("tra.usuariosAsigId", "=", usuariosAsigId) }
            if (id) { qFormer.addCondicion("tra.id", "=", id) }

            qFormer.addCondicion("usu.eliminado", "=", false)
            qFormer.addCondicion("tra.eliminado", "=", false)

            qFormer.addJoin("join", qTEstado, "est.idx = tra.estadosIdx")
            qFormer.addJoin("join", qTTipo, "tipo.idx = tra.tiposTramiteIdx")
            qFormer.addJoin("join", qTUser, "usu.id = tra.usuariosId")
            qFormer.addJoin("join", qTUserCiudadano, "ctz.usuariosId = usu.id")
            qFormer.addJoin("left join", qTUserAsig, "usuasig.id = tra.usuariosAsigId")

            qFormer.addCampo("tra.id")
            qFormer.addCampo("tra.nombre as userName")
            qFormer.addCampo("tra.apellido as userSurname")
            qFormer.addCampo("tra.dni as userDni")
            qFormer.addCampo("tra.domicilio as userAddress")
            qFormer.addCampo("tra.fechaNacimiento as userBirthdate")
            qFormer.addCampo("tra.fechaCreacion as creationDate")
            qFormer.addCampo("tra.fechaasigancion as assignmentDate")
            qFormer.addCampo("tra.fechaRevision as revisionDate")           
            qFormer.addCampo("tra.fechaRetiro as withdrawalDate")
            qFormer.addCampo("tra.fechafinalizado as completedDate")
            qFormer.addCampo("tra.rechazado as rejected")
            qFormer.addCampo("tra.rechazomotivo as reasonRejection")

            qFormer.addCampo("tra.estadosidx as idState")
            qFormer.addCampo("est.codigo as stateCode")
            qFormer.addCampo("est.descripcion as stateDescription")
            qFormer.addCampo("est.descripcionPublica as statePublicDescription")

            qFormer.addCampo("tra.tipostramiteidx as idProcedureType")
            qFormer.addCampo("tipo.codigo as procedureTypeCode")
            qFormer.addCampo("tipo.descripcion as procedureTypeDescription")

            qFormer.addCampo("tra.usuariosid as idUserCitizen")
            qFormer.addCampo("usu.correo as userCitizenEmail")
            qFormer.addCampo("usu.nombre as userCitizenName")
            qFormer.addCampo("usu.apellido as userCitizenSurname")
            qFormer.addCampo("ctz.dni as userCitizenDni")
            qFormer.addCampo("ctz.Domicilio as userCitizenAddress")
            qFormer.addCampo("ctz.fechaNacimiento as userCitizenBirthdate")

            qFormer.addCampo("tra.usuariosasigid as idUserMunicipal")
            qFormer.addCampo("usuasig.correo as userMunicipalEmail")
            qFormer.addCampo("usuasig.nombre as userMunicipalName")
            qFormer.addCampo("usuasig.apellido as userMunicipalSurname")

            const newQ = qFormer.getQuerry()
            //console.log(newQ)

            try {
                const result = await db.ejecutar(newQ);
                return result;
            } catch (err) {
                throw new Error('Hubo un error al buscar los tipos de tramites: ' + err.message)
            }
        }
    }
}

export default crearDaoTramite