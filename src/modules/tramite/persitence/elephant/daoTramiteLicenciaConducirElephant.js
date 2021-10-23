function crearDaoTramiteLicenciaConducir(db) {

    return {

        obtenerDatosLicencia: async (tramitesId) => {

            const newQ = `  select
                                tipotramitelicencia as subProcedureType,
                                claselicencia as licenceCode,
                                selfieurl as selfieUrl,
                                selfiedniurl as selfieDniUrl,
                                frentedniurl as frontDniUrl,
                                dorsodniurl as backDniUrl,
                                libredeudasurl as debtFreeUrl
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

            const qTabla = 'licenciaconducirdatos'
            const qFormer = db.getQueryBuilder()

            qFormer.setTabla(qTabla)
            qFormer.setQueryType(qFormer.getQueryTypes().insert)
            qFormer.addCampo('id', "default")
            qFormer.addCampo('tramitesid', tramiteLicenciaConducir.tramite.id)
            qFormer.addCampo('tipotramitelicencia', "'" + tramiteLicenciaConducir.subProcedureType + "'")
            qFormer.addCampo('claselicencia', "'" + tramiteLicenciaConducir.licenceCode + "'")
            qFormer.addCampo('selfieurl', "'" + tramiteLicenciaConducir.selfieUrl + "'")
            qFormer.addCampo('selfiedniurl', "'" + tramiteLicenciaConducir.selfieDniUrl + "'")
            qFormer.addCampo('frentedniurl', "'" + tramiteLicenciaConducir.frontDniUrl + "'")
            qFormer.addCampo('dorsodniurl', "'" + tramiteLicenciaConducir.backDniUrl + "'")
            qFormer.addCampo('libredeudasurl', "'" + tramiteLicenciaConducir.debtFreeUrl + "'")

            const newQ = qFormer.getQuerry()
            console.log(newQ)

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