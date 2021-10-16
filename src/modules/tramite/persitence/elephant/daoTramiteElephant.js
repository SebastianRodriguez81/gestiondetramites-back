function crearDaoTramite(db) {

    return {
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


            const qFormer = db.getQueryBuilder(qTabla)           

            if (estadosId) {qFormer.addCondicion(`estadosIdx = ${estadosId}`)}
            if (tiposTramiteId) {qFormer.addCondicion(`tiposTramiteIdx = ${tiposTramiteId}`)}
            if (fechaCreacionDesde) {qFormer.addCondicion(`fechaCreacion >= ${fechaCreacionDesde}`)}
            if (fechaCreacionHasta) {qFormer.addCondicion(`fechaCreacion <= ${fechaCreacionHasta}`)}
            if (usuariosId) {qFormer.addCondicion(`usuariosId = ${usuariosId}`)}
            if (usuariosAsigId) {qFormer.addCondicion(`usuariosAsigId = ${usuariosAsigId}`)}
            qFormer.addCondicion(`eliminado = false`)
            
            // TEST
            // qFormer.addCampo('tipostramiteIdx')
            // qFormer.addCampo('id')

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