function crearDaoTramite(db) {

    return {

        persistir: async (tramite) => {           
            
            const qTabla = 'tramites'
            const qFormer = db.getQueryBuilder()
            const objFecha = new Date()
            const fecha = objFecha.getFullYear()+"-"+objFecha.getMonth()+"-"+objFecha.getDay()

            //console.log(tramite)   

            if (tramite.id){
                // UPDATE
                
            }else{
                // INSERT
                qFormer.setTabla(qTabla)
                qFormer.setQueryType(qFormer.getQueryTypes().insert)
                qFormer.addCampo('id',"default")
                qFormer.addCampo('estadosidx',tramite.estadosIdx)
                qFormer.addCampo('tipostramiteidx',tramite.tiposTramiteIdx)
                qFormer.addCampo('usuariosid',tramite.usuariosId)
                tramite.usuarioAsigId? qFormer.addCampo('usuariosasigid',tramite.usuariosAsigId) : 
                tramite.fechaCreacion? qFormer.addCampo('fechacreacion',tramite.fechaCreacion) : qFormer.addCampo('fechacreacion',"'"+fecha+"'")
                qFormer.addCampo('eliminado',false)
                qFormer.addCampo('ultimamodifciacion',"'"+fecha+"'")
            }        

            const newQ = qFormer.getQuerry()
            //console.log(newQ)

            try {
                const result = await db.ejecutar(newQ);
                return result;
            } catch (err) {
                throw new Error('Hubo un error al persistir el tramite: ' + err.message)
            }
        },

        buscarTodos: async (estadosIdx, tiposTramiteIdx, fechaCreacionDesde, fechaCreacionHasta, usuariosId, usuariosAsigId, id) => {   
                              
            const qTabla = 'tramites as tra'
            const qTUser = 'usuarios as usu'
            const qTUserAsig = 'usuarios as usuasig'
            const qTEstado = 'estados as est'
            const qTTipo = 'tipostramite as tipo'
            const qTUserCiudadano = 'usuariosciudadano as ctz'


            const qFormer = db.getQueryBuilder()
            
            qFormer.setTabla(qTabla)
            qFormer.setQueryType(qFormer.getQueryTypes().select)

            if (estadosIdx) {qFormer.addCondicion("tra.estadosIdx","=",estadosIdx)}
            if (tiposTramiteIdx) {qFormer.addCondicion("tra.tiposTramiteIdx","=",tiposTramiteIdx)}
            if (fechaCreacionDesde) {qFormer.addCondicion("tra.fechaCreacion",">=",fechaCreacionDesde)}
            if (fechaCreacionHasta) {qFormer.addCondicion("tra.fechaCreacion","<=",fechaCreacionHasta)}
            if (usuariosId) {qFormer.addCondicion("tra.usuariosId","=",usuariosId)}
            if (usuariosAsigId) {qFormer.addCondicion("tra.usuariosAsigId","=",usuariosAsigId)}
            if (id) {qFormer.addCondicion("tra.id","=",id)}
            qFormer.addCondicion("usu.eliminado","=",false)
            qFormer.addCondicion("tra.eliminado","=",false)

            qFormer.addJoin("join",qTEstado, "est.idx = tra.estadosIdx")
            qFormer.addJoin("join",qTTipo, "tipo.idx = tra.tiposTramiteIdx")
            qFormer.addJoin("join",qTUser, "usu.id = tra.usuariosId")
            qFormer.addJoin("join",qTUserCiudadano, "ctz.usuariosId = usu.id")
            qFormer.addJoin("left join",qTUserAsig, "usuasig.id = tra.usuariosAsigId")
            
            qFormer.addCampo("tra.id")
            qFormer.addCampo("tra.nombre")
            qFormer.addCampo("tra.apellido")
            qFormer.addCampo("tra.domicilio")
            qFormer.addCampo("tra.fechaNacimiento")
            qFormer.addCampo("tra.fechaCreacion")
            qFormer.addCampo("tra.fechaRevision")
            qFormer.addCampo("tra.fechaRetiro")
            qFormer.addCampo("tra.rechazado")            
            qFormer.addCampo("tra.rechazoMotivo")

            qFormer.addCampo("tra.estadosidx")
            qFormer.addCampo("est.codigo as estadoCodigo")
            qFormer.addCampo("est.descripcion as estadoDescripcion")
            qFormer.addCampo("est.descripcionPublica as estadoDescripcionPublica")

            qFormer.addCampo("tra.tipostramiteidx")
            qFormer.addCampo("tipo.codigo as tipoTramiteCodigo")
            qFormer.addCampo("tipo.descripcion as tipoTramiteDescripcion")

            qFormer.addCampo("tra.usuariosid")            
            qFormer.addCampo("usu.correo as usuariosCorreo")
            qFormer.addCampo("usu.nombre as usuariosNombre")
            qFormer.addCampo("usu.apellido as usuariosApellido")
            qFormer.addCampo("ctz.dni as usuariosDni")
            qFormer.addCampo("ctz.Domicilio as usuariosDomicilio")
            qFormer.addCampo("ctz.fechaNacimiento as usuariosFechaNacimiento")

            qFormer.addCampo("tra.usuariosasigid")
            qFormer.addCampo("usuasig.id as usuariosAsigId")
            qFormer.addCampo("usuasig.correo as usuariosAsigCorreo")
            qFormer.addCampo("usuasig.nombre as usuariosAsigNombre")           
            qFormer.addCampo("usuasig.apellido as usuariosaAsigApellido")
            
            //qFormer.addCampo("*")

            const newQ = qFormer.getQuerry()

            console.log(newQ)

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