import { getValidDate } from "../../../common/validDate.js"
import { ValidationError } from '../../../common/errors.js'

function crearEventoTramite(daoEventoTramite) {
    return {
        id: null,       
        idProcedure: null,
        eventDate: null,
        observation: null,

        mensajeAsignarAnalista(nombreAnalista){
            return `Asigando a ${nombreAnalista} para analisis.`
        },

        mensajeAsignarResponsable(nombreResponsable){
            return `Asigando a ${nombreResponsable} para gestion.`
        },

        mensajeFechaRevision(fechaRevision){
            return `Se solicito presnetarce el dia ${fechaRevision} para revision el tramite.`
        },

        mensajeFechaRetiro(fechaRetiro){
            return `Se solicito presnetarce el dia ${fechaRetiro} para retirar el tramite.`
        },

        mensajeFinzalido(){
            return `Se finzalizo el tramite.`
        },

        mensajeRechazado(motivo){
            return `Se rechazo el tramite. Motivo: ${motivo}`
        },

        async persistir() {
            const result = await daoEventoTramite.persistir(this)
            if (!this.id) { this.id = result }
            return this;
        },

        async obtenerDatos(id) {
            const data = await daoEventoTramite.obtenerDatosPorId(id)           
            this.id = data.id       
            this.idProcedure = data.idprocedure           
            this.eventDate = data.eventdate ? data.eventdate.toISOString().split('T')[0] :  data.eventdate
            this.observation = data.observation

            return this
        },      

        async buscarTodos(idProcedure) {
            const dbResult = await daoEventoTramite.buscarTodosPorIdTramite(idProcedure)
            const resultList = []

            dbResult.forEach(data => {                
                const row = {}

                row.id = data.id               
                row.idProcedure = data.idprocedure               
                row.eventDate = data.eventdate ? data.eventdate.toISOString().split('T')[0] :  data.eventdate               
                row.observation = data.observation             

                resultList.push(row)                
            })
            
            return resultList            
        }       
    }
}

export default crearEventoTramite