import { getValidDate } from "../../../common/validDate.js"
import { ValidationError } from '../../../common/errors.js'

function crearTramite(daoTramite) {
    return {
        id: null,
        idState: null,
        idProcedureType: null,
        idUserCitizen: null,
        idUserMunicipal: null,
        userName: null,
        userSurname: null,
        userDni: null,
        //userEmail: null,
        userAddress: null,
        userBirthdate: null,
        creationDate: null,
        anlystAssignmentDate: null,
        assignmentDate: null,
        revisionDate: null,
        withdrawalDate: null,
        completedDate: null,
        rejected: null,
        reasonRejection: null,
        lastModificationDate: null,

        async persistir() {
            const result = await daoTramite.persistir(this)
            if (!this.id) { this.id = result }
            return this;
        },

        async obtenerDatos(id) {
            const datos = await daoTramite.obtenerDatos(id)           
            this.id = datos.id
            this.idState = datos.idstate
            this.idProcedureType = datos.idproceduretype
            this.idUserCitizen = datos.idusercitizen
            this.idUserMunicipal = datos.idusermunicipal
            this.userName = datos.username
            this.userSurname = datos.usersurname
            this.userDni = datos.userdni
            //this.userEmail = datos.userEmail
            this.userAddress = datos.useraddress
            this.userBirthdate = datos.userbirthdate ? datos.userbirthdate.toISOString().split('T')[0] :  datos.userbirthdate
            this.creationDate = datos.creationdate ? datos.creationdate.toISOString().split('T')[0] : datos.creationdate
            this.anlystAssignmentDate = datos.anlystassignmentdate ? datos.anlystassignmentdate.toISOString().split('T')[0] : datos.anlystassignmentdate           
            this.assignmentDate = datos.assignmentdate ? datos.assignmentdate.toISOString().split('T')[0] : datos.assignmentdate
            this.revisionDate = datos.revisiondate ? datos.revisiondate.toISOString().split('T')[0] : datos.revisiondate
            this.withdrawalDate = datos.withdrawaldate ? datos.withdrawaldate.toISOString().split('T')[0] : datos.withdrawaldate
            this.completedDate = datos.completeddate ? datos.completeddate.toISOString().split('T')[0] : datos.completeddate
            this.rejected = datos.rejected
            this.reasonRejection = datos.reasonrejection
            this.lastModificationDate = datos.lastmodificationdate

            return this
        },

        async obtenerCantidades() {
            return await daoTramite.obtenerCantidades()
        },

        async buscarTodos(estadosIdx, tiposTramiteIdx, fechaCreacionDesde, fechaCreacionHasta, usuariosId, usuariosAsigId, id, opEstadosIdx1, opEstadosIdx2, opEstadosIdx3, idUsermunicipalRole) {

            const dbResult = await daoTramite.buscarTodos(estadosIdx, tiposTramiteIdx, fechaCreacionDesde, fechaCreacionHasta, usuariosId, usuariosAsigId, id, opEstadosIdx1, opEstadosIdx2, opEstadosIdx3, idUsermunicipalRole)
            const resultList = []

            dbResult.forEach(datos => {                
                const tramiteRow = {}

                tramiteRow.id = datos.id
                tramiteRow.idState = datos.idstate
                tramiteRow.idProcedureType = datos.idproceduretype
                tramiteRow.idUserCitizen = datos.idusercitizen
                tramiteRow.idUserMunicipal = datos.idusermunicipal
                tramiteRow.userName = datos.username
                tramiteRow.userSurname = datos.usersurname
                tramiteRow.userDni = datos.userdni
                tramiteRow.userEmail = datos.userEmail
                tramiteRow.userAddress = datos.useraddress
                tramiteRow.userBirthdate = datos.userbirthdate ? datos.userbirthdate.toISOString().split('T')[0] :  datos.userbirthdate
                tramiteRow.creationDate = datos.creationdate ? datos.creationdate.toISOString().split('T')[0] : datos.creationdate
                tramiteRow.anlystAssignmentDate = datos.anlystassignmentdate ? datos.anlystassignmentdate.toISOString().split('T')[0] : datos.anlystassignmentdate
                tramiteRow.assignmentDate = datos.assignmentdate ? datos.assignmentdate.toISOString().split('T')[0] : datos.assignmentdate
                tramiteRow.revisionDate = datos.revisiondate ? datos.revisiondate.toISOString().split('T')[0] : datos.revisiondate
                tramiteRow.withdrawalDate = datos.withdrawaldate ? datos.withdrawaldate.toISOString().split('T')[0] : datos.withdrawaldate
                tramiteRow.completedDate = datos.completeddate ? datos.completeddate.toISOString().split('T')[0] : datos.completeddate
                tramiteRow.rejected = datos.rejected
                tramiteRow.reasonRejection = datos.reasonrejection
                tramiteRow.lastModificationDate = datos.lastmodificationdate ? datos.lastmodificationdate.toISOString().split('T')[0] : datos.lastmodificationdate

                tramiteRow.stateCode = datos.statecode
                tramiteRow.stateDescription = datos.statedescription
                tramiteRow.statePublicDescription = datos.statepublicdescription

                tramiteRow.procedureTypeCode = datos.proceduretypecode
                tramiteRow.procedureTypeDescription = datos.proceduretypedescription

                tramiteRow.userCitizenEmail = datos.usercitizenemail
                tramiteRow.userCitizenName = datos.usercitizenname
                tramiteRow.userCitizenSurname = datos.usercitizensurname
                tramiteRow.userCitizenDni = datos.usercitizendni
                tramiteRow.userCitizenAddress = datos.usercitizenaddress
                tramiteRow.userCitizenBirthdate = datos.usercitizenbirthdate ? datos.usercitizenbirthdate.toISOString().split('T')[0] : datos.usercitizenbirthdate
               
                tramiteRow.userMunicipalEmail = datos.usermunicipalemail
                tramiteRow.userMunicipalName = datos.usermunicipalname
                tramiteRow.userMunicipalSurname = datos.usermunicipalsurname

                tramiteRow.idUserMunicipalRole = datos.idusermunicipalrole
                tramiteRow.userMunicipalRoleCode = datos.usermunicipalrolecode
                tramiteRow.userMunicipalRoleDesciption = datos.usermunicipalroledesciption          

                resultList.push(tramiteRow)                
            })
            
            return resultList
            
        },

        asignarAnalista(idUser) {
            if (this.idState != 1) { throw new ValidationError("El estado del tramite no permite esta accion.") }
            this.idUserMunicipal = idUser
            this.anlystAssignmentDate = getValidDate()
            this.idState = 2
            return this
        },

        asignarResponsable(idUser) {
            if (this.idState != 2) { throw new ValidationError("El estado del tramite no permite esta accion.") }
            this.idUserMunicipal = idUser
            this.assignmentDate = getValidDate()
            this.idState = 3
            return this
        },

        asignarFechaRevision(revisionDate) {
            if (this.idState != 3) { throw new ValidationError("El estado del tramite no permite esta accion.") }
            if (this.revisionDate) { throw new ValidationError("El estado del tramite no permite esta accion.") }
            this.revisionDate = revisionDate            
            return this
        },

        asignarFechaRetiro(withdrawalDate) {
            if (this.idState != 3) { throw new ValidationError("El estado del tramite no permite esta accion.") }
            if (!this.revisionDate) { throw new ValidationError("El estado del tramite no permite esta accion.") }           
            this.withdrawalDate = withdrawalDate
            this.idState = 4
            return this
        },

        finalizarTramite() {
            if (this.idState != 4) { throw new ValidationError("El estado del tramite no permite esta accion.") }
            this.completedDate = getValidDate()
            this.idState = 5
            return this
        },

        rechazarTramite(reasonRejection) {
            if (this.idState != 4) { throw new ValidationError("El estado del tramite no permite esta accion.") }
            this.completedDate = getValidDate()
            this.rejected = true
            this.reasonRejection = reasonRejection
            this.idState = 5
            return this
        },

        obtenerCodigo(){
            let codigo = ''
            if (this.id) {
                switch (this.idProcedureType) {
                    case 1:
                        codigo = 'LICC-'+this.id.toString().padStart(5, '0')
                        break;              
                    
                }
            }
            return codigo
        }
    }
}

export default crearTramite