import express from 'express'
import { ValidationError } from '../common/errors.js'
import getTramiteApplications from '../modules/tramite/application/applicationTramiteFactory.js'

const tramiteRouter = express.Router()
const tamiteApplications = getTramiteApplications()

//#region POST
tramiteRouter.post('/', async (req, res, next) => {
    try {    
        if (typeof req.body.idUser !== 'number' ||
            typeof req.body.idProcedureType !== 'number' ||
            typeof req.body.userName !== 'string' ||
            typeof req.body.userSurname !== 'string' ||
            typeof req.body.userDni !== 'string' ||
            typeof req.body.userAddress !== 'string' ||
            typeof req.body.userBirthdate !== 'string' ||
            typeof req.body.subProcedureType !== 'string' ||
            typeof req.body.licenceCode !== 'string' ||
            typeof req.body.selfieUrl !== 'string' ||
            typeof req.body.selfieDniUrl !== 'string' ||
            typeof req.body.frontDniUrl !== 'string' ||
            typeof req.body.backDniUrl !== 'string' ||
            typeof req.body.debtFreeUrl !== 'string'
        ){throw new ValidationError("Datos errornes y/o faltantes.")}

            const altaTramite = tamiteApplications.getAltaTramites()
            const respuesta = await altaTramite.ejecutar(req.body)
            res.json(respuesta)
    } catch (error) {
        next(error)
    }
})
//#endregion

//#region PUT
tramiteRouter.put('/setUserRespon', async (req, res, next) => {
    try {       
        if (typeof req.body.idProcedure !== 'number' ){throw new ValidationError("Identificador de tramie erroneo o faltantes.")}
        if (typeof req.body.idUser !== 'number' ){throw new ValidationError("Identificador de usuario erroneo o faltantes.")}
        const asignarResponsable = tamiteApplications.getAsignarResponsable()
        const respuesta = await asignarResponsable.ejecutar(req.body.idProcedure, req.body.idUser)
        res.json(respuesta)
    } catch (error) {
        next(error)
    }
})

tramiteRouter.put('/setRevisionDate', async (req, res, next) => {
    try {       
        if (typeof req.body.idProcedure !== 'number' ){throw new ValidationError("Identificador de tramie erroneo o faltantes.")}
        if (typeof req.body.revisionDate !== 'string' ){throw new ValidationError("Fecha de revision erronea o faltantes.")}        
        const asignarFechaRevision = tamiteApplications.getAsignarFechaRevision()
        const respuesta = await asignarFechaRevision.ejecutar(req.body.idProcedure, req.body.revisionDate)
        res.json(respuesta)
    } catch (error) {
        next(error)
    }
})

tramiteRouter.put('/setWithdrawalDate', async (req, res, next) => {
    try {       
        if (typeof req.body.idProcedure !== 'number' ){throw new ValidationError("Identificador de tramie erroneo o faltantes.")}
        if (typeof req.body.withdrawalDate !== 'string' ){throw new ValidationError("Fecha de retiro erronea o faltantes.")}        
        const asignarFechaRetiro = tamiteApplications.getAsignarFechaRetiro()
        const respuesta = await asignarFechaRetiro.ejecutar(req.body.idProcedure, req.body.withdrawalDate)
        res.json(respuesta)
    } catch (error) {
        next(error)
    }
})

tramiteRouter.put('/finishProcedure', async (req, res, next) => {
    try {       
        if (typeof req.body.idProcedure !== 'number' ){throw new ValidationError("Identificador de tramie erroneo o faltantes.")}
        if (typeof req.body.rejected !== 'boolean' ){throw new ValidationError("Identificador de rechazo erroneo o faltantes.")}
        if (req.body.rejected && typeof req.body.reasonRejection !== 'string') { throw new ValidationError("Motivo de retiro erronea o faltantes.") }
        const finalizarTramite = tamiteApplications.getFinalizarTramite()
        const respuesta = await finalizarTramite.ejecutar(req.body.idProcedure, req.body.rejected, req.body.reasonRejection)
        res.json(respuesta)
    } catch (error) {
        next(error)
    }
})
//#endregion

//#region GET
tramiteRouter.get('/', async (req, res, next) => {
    try {        
        if (isNaN(req.query.idProcedure)) {throw new ValidationError("Identificador de tramie erroneo o faltantes.")}
        const obtenerTramitePorId = tamiteApplications.getObtenerTramitePorId()
        const respuesta = await obtenerTramitePorId.ejecutar(req.query.idProcedure)
        res.json(respuesta)
    } catch (error) {
        next(error)
    }
})

tramiteRouter.get('/user', async (req, res, next) => {
    try {
        if (isNaN(req.query.idUser)) { throw new ValidationError("Identificador de usuario erroneo o faltantes.") }
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
        if (isNaN(req.query.idUser)) {throw new ValidationError("Identificador de usuario erroneo o faltantes.")}
        const obtenerTramitesEnProceso = tamiteApplications.getObtenerTramitesEnProceso()
        const respuesta = await obtenerTramitesEnProceso.ejecutar(req.query.idUser)
        res.json(respuesta)
    } catch (error) {
        next(error)
    }
})

tramiteRouter.get('/historical', async (req, res, next) => {
    try {
        const obtenerTramitesFinzalizado = tamiteApplications.getObtenerTramitesFinalizado()
        const respuesta = await obtenerTramitesFinzalizado.ejecutar()
        res.json(respuesta)
    } catch (error) {
        next(error)
    }
})

tramiteRouter.get('/dashboard', async (req, res, next) => {
    try {
        const obtenerTramitesCantidades = tamiteApplications.getObtenerTramitesCantidades()
        const respuesta = await obtenerTramitesCantidades.ejecutar()
        res.json(respuesta)
    } catch (error) {
        next(error)
    }
})

tramiteRouter.get('/procedureTypes', async (req, res, next) => {
    try {
        const obtenerTipoTramite = tamiteApplications.getObtenerTiposTramite()
        const respuesta = await obtenerTipoTramite.ejecutar()
        res.json(respuesta)
    } catch (error) {
        next(error)
    }
})

tramiteRouter.get('/obtenerTodos/', async (req, res, next) => {
    try {
        const obtenerTramite = tamiteApplications.getObtenerTramites()
        const respuesta = await obtenerTramite.ejecutar(req.query.estadosIdx, req.query.tiposTramiteIdx, req.query.fechaCreacionDesde, req.query.fechaCreacionHasta, req.query.usuariosId, req.query.usuariosAsigId)
        res.json(respuesta)
    } catch (error) {
        next(error)
    }
})
//#endregion

export default tramiteRouter