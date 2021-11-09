import { getValidDate } from "../../../common/validDate.js"
import { ValidationError } from '../../../common/errors.js'
import moment from 'moment'

function crearNotificacionUsuario(daoNotificacionUsuario) {
    return {
        id: null,       
        idUser: null,
        notificationDate: null,
        title: null,
        message: null,
        read: null,

        mensajeFechaRevision(codigoTramite, fechaRevision){
            const fechaForamteada = moment(fechaRevision).format("DD/MM/YYYY")
            return `Se solicito presnetarce el dia ${fechaForamteada} para revision el tramite ${codigoTramite}.`
        },

        mensajeFechaRetiro(codigoTramite, fechaRetiro){
            const fechaForamteada = moment(fechaRetiro).format("DD/MM/YYYY")
            return `Se solicito presnetarce el dia ${fechaForamteada} para retirar el tramite ${codigoTramite}.`
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
            this.notificationDate = data.notificationdate ? moment(data.notificationdate).format("DD/MM/YYYY HH:MM:SS") :  data.notificationdate
            this.title = data.title
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
                row.notificationDate = data.notificationdate ? moment(data.notificationdate).format("DD/MM/YYYY HH:MM:SS") :  data.notificationdate               
                row.title = data.title
                row.message = data.message
                row.read = data.read             

                resultList.push(row)                
            })
            
            return resultList            
        }       
    }
}

export default crearNotificacionUsuario