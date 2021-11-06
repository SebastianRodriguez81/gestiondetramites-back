import express from 'express'
import { ValidationError } from '../common/errors.js'
import getTramiteApplications from '../modules/tramite/application/applicationTramiteFactory.js'

const tramiteRouter = express.Router()
const tamiteApplications = getTramiteApplications()

//#region POST
tramiteRouter.post('/', async (req, res, next) => {
    try {
        if (typeof req.body.idUser !== 'number') { throw new ValidationError("Identificador de usuario erroneo o faltante.") }
        if (typeof req.body.idProcedureType !== 'number') { throw new ValidationError("Tipo de tramie errorneo o faltante.") }
        if (typeof req.body.userName !== 'string') { throw new ValidationError("Nombre errorneo o faltante.") }
        if (typeof req.body.userSurname !== 'string') { throw new ValidationError("Apellido errorneo o faltante.") }
        if (!req.body.userDni) { throw new ValidationError("DNI errorneo o faltante.") }
        if (typeof req.body.userAddress !== 'string') { throw new ValidationError("Direccion errornea o faltante.") }
        if (typeof req.body.userBirthdate !== 'string') { throw new ValidationError("FEcha de nacimiento errornea o faltante.") }
        if (typeof req.body.subProcedureType !== 'string') { throw new ValidationError("Clase de tramie errorneo o faltante.") }
        if (typeof req.body.licenceCode !== 'string') { throw new ValidationError("Codigo de licencia errorna o faltante.") }
        if (typeof req.body.selfieUrl !== 'string') { throw new ValidationError("Foto selfie errorna o faltante.") }
        if (typeof req.body.selfieDniUrl !== 'string') { throw new ValidationError("Foto selfie y dni errorna o faltante.") }
        if (typeof req.body.frontDniUrl !== 'string') { throw new ValidationError("Foto frente dni errorna o faltante.") }
        if (typeof req.body.backDniUrl !== 'string') { throw new ValidationError("Foto dorso dni errorna o faltante.") }
        if (typeof req.body.debtFreeUrl !== 'string') { throw new ValidationError("Foto libre de deudas errorna o faltante.") }

        const altaTramite = tamiteApplications.getAltaTramites()
        const respuesta = await altaTramite.ejecutar(req.body)
        res.json(respuesta)
    } catch (error) {
        next(error)
    }
})
//#endregion

//#region PUT
tramiteRouter.put('/setUserAnalist', async (req, res, next) => {
    try {       
        if (typeof req.body.idProcedure !== 'number' ){throw new ValidationError("Identificador de tramie erroneo o faltantes.")}
        if (typeof req.body.idUser !== 'number' ){throw new ValidationError("Identificador de usuario erroneo o faltantes.")}
        const asignarAnalista = tamiteApplications.getAsignarAnalista()
        const respuesta = await asignarAnalista.ejecutar(req.body.idProcedure, req.body.idUser)
        res.json(respuesta)
    } catch (error) {
        next(error)
    }
}),

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
        if (req.query.idUsermunicipalRole) { if (isNaN(req.query.idUsermunicipalRole)) { throw new ValidationError("Identificador de rol erroneo o faltantes.") } }
        const obtenerTramitesPendiente = tamiteApplications.getObtenerTramitesPendiente()
        const respuesta = await obtenerTramitesPendiente.ejecutar(req.query.idUsermunicipalRole)
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

tramiteRouter.get('/events', async (req, res, next) => {
    try {        
        if (isNaN(req.query.idProcedure)) {throw new ValidationError("Identificador de tramie erroneo o faltantes.")}
        const obtenerEventosTramite = tamiteApplications.getObtenerEventosTramite()
        const respuesta = await obtenerEventosTramite.ejecutar(req.query.idProcedure)
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

tramiteRouter.post('/Orion', async (req, res, next) => {
    try {
        
        console.log("******************************** EVENTO DE ORION ***************************************")
        res.json(true)
    } catch (error) {
        next(error)
    }
})
//#endregion

export default tramiteRouter