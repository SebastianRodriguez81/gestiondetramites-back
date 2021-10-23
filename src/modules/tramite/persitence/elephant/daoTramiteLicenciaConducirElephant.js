function crearDaoTramiteLicenciaConducir(db) {

    return {

        obtenerDatosLicencia: async (tramitesId) => {

            const newQ = `  select
                                tipotramitelicencia,
                                claselicencia,
                                selfieurl,
                                selfiedniurl,
                                frentedniurl,
                                dorsodniurl,
                                libredeudasurl
                            from licenciaconducirdatos
                            where tramitesId = ${tramitesId}`

            try {
                const result = await db.ejecutar(newQ);
                return result;
            } catch (err) {
                throw new Error('Hubo un error al persistir el tramite: ' + err.message)
            }

        },
       
        persistir: async (tramiteLicenciaConducir) => {           

            //console.log(tramiteLicenciaConducir)

            const qTabla = 'licenciaconducirdatos'
            const qFormer = db.getQueryBuilder()
            const objFecha = new Date()
            const fecha = objFecha.getFullYear()+"-"+objFecha.getMonth()+"-"+objFecha.getDay()

            qFormer.setTabla(qTabla)
            qFormer.setQueryType(qFormer.getQueryTypes().insert)
            qFormer.addCampo('id',"default")            
            qFormer.addCampo('tipostramiteidx',tramiteLicenciaConducir.tramite.tiposTramiteIdx)
            qFormer.addCampo('tramitesid',tramiteLicenciaConducir.tramite.id)
            qFormer.addCampo('tipolicencia',"'"+tramiteLicenciaConducir.tipoLicencia+"'")   
            tramiteLicenciaConducir.fechaLicencia? qFormer.addCampo('fechalicencia',tramiteLicenciaConducir.fechaLicencia) :
            tramiteLicenciaConducir.fechaTramite? qFormer.addCampo('fechatramite',tramiteLicenciaConducir.fechaTramite) : 
            qFormer.addCampo('retirada',tramiteLicenciaConducir.retirada)
            qFormer.addCampo('eliminado',false)
            qFormer.addCampo('ultimamodifciacion',"'"+fecha+"'")

            const newQ = qFormer.getQuerry()
            //console.log(newQ)

            try {
                const result = await db.ejecutar(newQ);
                return result;
            } catch (err) {
                throw new Error('Hubo un error gragar el tramite de licencia de conducir: ' + err.message)
            }
        }
    }
}

export default crearDaoTramiteLicenciaConducir