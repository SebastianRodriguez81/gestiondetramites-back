import { getValidDate } from "../../../common/validDate.js"
import { ValidationError } from '../../../common/errors.js'

function crearNotificacionUsuario(daoNotificacionUsuario) {
    return {
        id: null,       
        idUser: null,
        notificationDate: null,
        message: null,
        read: null,

        mensajeFechaRevision(codigoTramite, fechaRevision){
            return `Se solicito presnetarce el dia ${fechaRevision} para revision el tramite ${codigoTramite}.`
        },

        mensajeFechaRetiro(codigoTramite, fechaRetiro){
            return `Se solicito presnetarce el dia ${fechaRetiro} para retirar el tramite ${codigoTramite}.`
        },

        mensajeFinzalido(codigoTramite){
            return `Se finzalizo el tramite ${codigoTramite}.`
        },

        mensajeRechazado(codigoTramite, motivo){
            return `Se rechazo el tramite ${codigoTramite}. Motivo: ${motivo}`
        },

        async persistir() {
            const result = await daoNotificacionUsuario.persistir(this)
            if (!this.id) { this.id = result }
            return this
        },

        async obtenerDatos(id) {
            const data = await daoNotificacionUsuario.obtenerDatosPorId(id)                
            this.id = data.id       
            this.idUser = data.iduser           
            this.notificationDate = data.notificationdate ? data.notificationdate.toISOString().split('T')[0] :  data.notificationdate
            this.message = data.message
            this.read = data.read

            return this
        },      

        async buscarTodos(idUser) {
            const dbResult = await daoNotificacionUsuario.buscarTodosPorIdUsuario(idUser)
            const resultList = []

            dbResult.forEach(data => {                
                const row = {}

                row.id = data.id               
                row.idUser = data.iduser               
                row.notificationDate = data.notificationdate ? data.notificationdate.toISOString().split('T')[0] :  data.notificationdate               
                row.message = data.message
                row.read = data.read             

                resultList.push(row)                
            })
            
            return resultList            
        }       
    }
}

export default crearNotificacionUsuario