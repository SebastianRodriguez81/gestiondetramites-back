function crearDaoTramite(db) {

    return {
        buscarTodos: async (estadosId, tiposTramiteId, fechaCreacionDesde, fechaCreacionHasta, usuariosId, usuariosAsigId) => {            

            const qTabla = 'tramites'
            let qEstadoId = ''
            let qTipoTramiteId = ''
            let qFechaCreacionDesde = ''
            let qFechaCreacionHasta = ''
            let qUsuarioId = ''
            let qUsuarioAsigId = ''

            if (estadosId) {qEstadoId = `(estadosIdx = ${estadosId}) and `}
            if (tiposTramiteId) {qTipoTramiteId = `(tiposTramiteIdx = ${tiposTramiteId}) and `}
            if (fechaCreacionDesde) {qFechaCreacionDesde = `(fechaCreacion >= ${fechaCreacionDesde}) and `}
            if (fechaCreacionHasta) {qFechaCreacionHasta = `(fechaCreacion <= ${fechaCreacionHasta}) and `}
            if (usuariosId) {qUsuarioId = `(usuariosId = ${usuariosId}) and `}
            if (usuariosAsigId) {qUsuarioAsigId = `(usuariosAsigId = ${usuariosAsigId}) and `}

            const querry = `
            select 
            * 
            from ${qTabla} 
            where 
            ${qEstadoId} ${qTipoTramiteId} ${qFechaCreacionDesde} ${qFechaCreacionHasta} ${qUsuarioId} ${qUsuarioAsigId}          
            eliminado = false
            `
            
            console.log(querry)

            try {
                const result = await db.ejecutar(querry);
                return result;
            } catch (err) {
                throw new Error('Hubo un error al buscar los tipos de tramites: ' + err.message)
            }
        }
    }
}

export default crearDaoTramite