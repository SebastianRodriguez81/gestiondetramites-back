import express from 'express'
import getObtenerTiposTramite from '../modules/tramite/application/obtenerTiposTramiteFactory.js'
import getObtenerTramite from '../modules/tramite/application/obtenerTramitesFactory.js'
import getAltaTramites from '../modules/tramite/application/altaTramiteFactory.js'
import getTramiteApplications from '../modules/tramite/application/applicationTramiteFactory.js'

const tramiteRouter = express.Router()
const tamiteApplications = getTramiteApplications()

// console.log(tamiteApplications.getObtenerTramitePorUsuario)

//#region POST
tramiteRouter.post('/', async (req, res, next) => {
    try {
        const altaTramite = getAltaTramites()        
        const respuesta = await altaTramite.ejecutar(req.body)
        res.json(respuesta)
    } catch (error) {
        next(error)
    }
})
//#endregion

//#region PUT
//#endregion

//#region GET
tramiteRouter.get('/', async (req, res, next) => {
    try {
        const obtenerTramitesPorUsuario = tamiteApplications.getObtenerTramitesPorUsuario()
        const respuesta = await obtenerTramitesPorUsuario.ejecutar(req.query.idUser)
        res.json(respuesta)
    } catch (error) {
        next(error)
    }
})

tramiteRouter.get('/pending', async (req, res, next) => {
    try {
        const obtenerTramitesPendiente = tamiteApplications.getObtenerTramitesPendiente()
        const respuesta = await obtenerTramitesPendiente.ejecutar()
        res.json(respuesta)
    } catch (error) {
        next(error)
    }
})

tramiteRouter.get('/inProgress', async (req, res, next) => {
    try {
        const obtenerTramitesEnProceso = tamiteApplications.getObtenerTramitesEnProceso()
        const respuesta = await obtenerTramitesEnProceso.ejecutar(req.query.idUser)
        res.json(respuesta)
    } catch (error) {
        next(error)
    }
})

tramiteRouter.get('/historical', async (req, res, next) => {
    try {
        const obtenerTramitesFinzalizado = getObtenerTramitesFinzalizado()
        const respuesta = await obtenerTramitesFinzalizado.ejecutar()
        res.json(respuesta)
    } catch (error) {
        next(error)
    }
})

tramiteRouter.get('/dashboard', async (req, res, next) => {
    try {
        const obtenerTramitesCantidades = getObtenerTramitesCantidades()
        const respuesta = await obtenerTramitesCantidades.ejecutar()
        res.json(respuesta)
    } catch (error) {
        next(error)
    }
})

tramiteRouter.get('/procedureTypes', async (req, res, next) => {
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
        const respuesta = await obtenerTramite.ejecutar(req.query.estadosIdx, req.query.tiposTramiteIdx, req.query.fechaCreacionDesde, req.query.fechaCreacionHasta, req.query.usuariosId, req.query.usuariosAsigId)
        res.json(respuesta)
    } catch (error) {
        next(error)
    }
})
//#endregion

export default tramiteRouter