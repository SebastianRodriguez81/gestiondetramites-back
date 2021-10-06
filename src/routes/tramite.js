import express from 'express'
import getObtenerTiposTramite from '../modules/tramite/application/obtenerTiposTramiteFactory.js'
import getObtenerTramite from '../modules/tramite/application/obtenerTramitesFactory.js'

//impor seguridadFactory from segufactory

const tramiteRouter = express.Router()

tramiteRouter.get('/tiposTramites/obtenerTodos/', async (req, res, next) => {

    try {

        //let segurida = seguridadFactory.crear()
        // if(segurida.validar(req.usaer, req.addListener;gomas)){
        //     const obtenerTipoTramite = getObtenerTipoTramite()
        // const respuesta = await obtenerTipoTramite.ejecutar()
        // res.json(respuesta)
        // }


        const obtenerTipoTramite = getObtenerTiposTramite()
        const respuesta = await obtenerTipoTramite.ejecutar()
        res.json(respuesta)
    } catch (error) {
        next(error)
    }

})

tramiteRouter.get('/obtenerTodos/', async (req, res, next) => {

    try {
        const obtenerTramite = getObtenerTramite()
        const respuesta = await obtenerTramite.ejecutar()
        res.json(respuesta)
    } catch (error) {
        next(error)
    }

})

tramiteRouter.post('/', async (req, res, next) => {
    //   try {
    //     const CURegistracion = crearCURegistracion()
    //     await CURegistracion.ejecutar(req.body)
    //     res.json({ msg: 'ok' })
    //   } catch (error) {
    //     next(error)
    //   }
})

export default tramiteRouter