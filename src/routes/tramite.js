import express from 'express'
import getObtenerTiposTramite from '../modules/tramite/application/obtenerTiposTramiteFactory.js'
import getObtenerTramite from '../modules/tramite/application/obtenerTramitesFactory.js'
import getAltaTramites from '../modules/tramite/application/altaTramiteFactory.js'

const tramiteRouter = express.Router()

tramiteRouter.get('/tiposTramite/obtenerTodos/', async (req, res, next) => {
    try {
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
        const respuesta = await obtenerTramite.ejecutar(req.query.estadosId, req.query.tiposTramiteId, req.query.fechaCreacionDesde, req.query.fechaCreacionHasta, req.query.usuariosId, req.query.usuariosAsigId)
        res.json(respuesta)
    } catch (error) {
        next(error)
    }
})
tramiteRouter.post('/', async (req, res, next) => {
    try {
        const altaTramite = getAltaTramites()        
        const respuesta = await altaTramite.ejecutar(req.body)
        res.json(respuesta)
    } catch (error) {
        next(error)
    }
})

export default tramiteRouter