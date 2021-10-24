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
        userAddress: null,
        userBirthdate: null,
        creationDate: null,
        assignmentDate: null,
        revisionDate: null,
        withdrawalDate: null,
        completedDate: null,
        rejected: null,
        reasonRejection: null,

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
            this.userAddress = datos.useraddress
            this.userBirthdate = datos.userbirthdate ? datos.userbirthdate.toISOString().split('T')[0] :  datos.userbirthdate
            this.creationDate = datos.creationdate ? datos.creationdate.toISOString().split('T')[0] : datos.creationdate
            this.assignmentDate = datos.assignmentdate ? datos.assignmentdate.toISOString().split('T')[0] : datos.assignmentdate
            this.revisionDate = datos.revisiondate ? datos.revisiondate.toISOString().split('T')[0] : datos.revisiondate
            this.withdrawalDate = datos.withdrawaldate ? datos.withdrawaldate.toISOString().split('T')[0] : datos.withdrawaldate
            this.completedDate = datos.completeddate ? datos.completeddate.toISOString().split('T')[0] : datos.completeddate
            this.rejected = datos.rejected
            this.reasonRejection = datos.reasonrejection

            return this
        },

        async obtenerCantidades() {
            return await daoTramite.obtenerCantidades()
        },

        async buscarTodos(estadosIdx, tiposTramiteIdx, fechaCreacionDesde, fechaCreacionHasta, usuariosId, usuariosAsigId, id, opEstadosIdx1, opEstadosIdx2, opEstadosIdx3) {
            return await daoTramite.buscarTodos(estadosIdx, tiposTramiteIdx, fechaCreacionDesde, fechaCreacionHasta, usuariosId, usuariosAsigId, id, opEstadosIdx1, opEstadosIdx2, opEstadosIdx3);
        },

        asignarResponsable(idUser) {
            if (this.idState != 1) { throw new ValidationError("El estado del tramite no permite esta accion.") }
            this.idUserMunicipal = idUser
            this.assignmentDate = getValidDate()
            this.idState = 2
            return this
        },

        asignarFechaRevision(revisionDate) {
            if (this.idState != 2) { throw new ValidationError("El estado del tramite no permite esta accion.") }
            this.revisionDate = revisionDate
            this.idState = 3
            return this
        },

        asignarFechaRetiro(withdrawalDate) {
            if (this.idState != 3) { throw new ValidationError("El estado del tramite no permite esta accion.") }
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
        }
    }
}

export default crearTramite