function crearDaoTramite(db) {

    return {

        persistir: async (tramite) => {           
            
            const qTabla = 'tramites'
            const qFormer = db.getQueryBuilder()
            const objFecha = new Date()
            const fecha = objFecha.getFullYear()+"-"+objFecha.getMonth()+"-"+objFecha.getDay()

            if (tramite.id){
                // UPDATE
                
            }else{
                // INSERT
                qFormer.setTabla(qTabla)
                qFormer.setQueryType(qFormer.getQueryTypes().insert)
                qFormer.addCampo('id',"default")
                qFormer.addCampo('estadosidx',tramite.estadoTramite.id)
                qFormer.addCampo('tipostramiteidx',tramite.tipoTramite.id)
                qFormer.addCampo('usuariosid',tramite.usuario.id)
                tramite.usuarioAsig? qFormer.addCampo('usuariosasigid',tramite.usuarioAsig.id) : 
                tramite.fechaCreacion? qFormer.addCampo('fechacreacion',tramite.fechaCreacion) : qFormer.addCampo('fechacreacion',"'"+fecha+"'")
                qFormer.addCampo('eliminado',false)
                qFormer.addCampo('ultimamodifciacion',"'"+fecha+"'")
            }            

            const newQ = qFormer.getQuerry()       

            try {
                const result = await db.ejecutar(newQ);
                return result;
            } catch (err) {
                throw new Error('Hubo un error al persistir el tramite: ' + err.message)
            }
        },

        buscarTodos: async (estadosId, tiposTramiteId, fechaCreacionDesde, fechaCreacionHasta, usuariosId, usuariosAsigId) => {   
            
            // OLD **************************************************************

            // const qTabla = 'tramites'
            // let qEstadoId = ''
            // let qTipoTramiteId = ''
            // let qFechaCreacionDesde = ''
            // let qFechaCreacionHasta = ''
            // let qUsuarioId = ''
            // let qUsuarioAsigId = ''

            // if (estadosId) {qEstadoId = `(estadosIdx = ${estadosId}) and `}
            // if (tiposTramiteId) {qTipoTramiteId = `(tiposTramiteIdx = ${tiposTramiteId}) and `}
            // if (fechaCreacionDesde) {qFechaCreacionDesde = `(fechaCreacion >= ${fechaCreacionDesde}) and `}
            // if (fechaCreacionHasta) {qFechaCreacionHasta = `(fechaCreacion <= ${fechaCreacionHasta}) and `}
            // if (usuariosId) {qUsuarioId = `(usuariosId = ${usuariosId}) and `}
            // if (usuariosAsigId) {qUsuarioAsigId = `(usuariosAsigId = ${usuariosAsigId}) and `}

            // const querry = `
            // select 
            // * 
            // from ${qTabla} 
            // where
            // ${qEstadoId} ${qTipoTramiteId} ${qFechaCreacionDesde} ${qFechaCreacionHasta} ${qUsuarioId} ${qUsuarioAsigId}          
            // eliminado = false
            //`

            // OLD **************************************************************

            const qTabla = 'tramites'
            const qFormer = db.getQueryBuilder()
            
            qFormer.setTabla(qTabla)
            qFormer.setQueryType(qFormer.getQueryTypes().select)
            if (estadosId) {qFormer.addCondicion("estadosIdx","=",estadosId)}
            if (tiposTramiteId) {qFormer.addCondicion("tiposTramiteIdx","=",tiposTramiteId)}
            if (fechaCreacionDesde) {qFormer.addCondicion("fechaCreacion",">=",fechaCreacionDesde)}
            if (fechaCreacionHasta) {qFormer.addCondicion("fechaCreacion","<=",fechaCreacionHasta)}
            if (usuariosId) {qFormer.addCondicion("usuariosId","=",usuariosId)}
            if (usuariosAsigId) {qFormer.addCondicion("usuariosAsigId","=",usuariosAsigId)}
            qFormer.addCondicion("eliminado","=",false)

            const newQ = qFormer.getQuerry()

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