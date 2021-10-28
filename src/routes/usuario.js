import express from 'express'
import { ValidationError } from '../common/errors.js'
import getUsuarioApplications from '../modules/usuario/application/applicationUsuarioFactory.js'

const usuarioRouter = express.Router()
const usuarioApplications = getUsuarioApplications()

//#region POST
usuarioRouter.post('/citizens', async (req, res, next) => {
    try {
        if (typeof req.body.email !== 'string' ||
            typeof req.body.name !== 'string' ||
            typeof req.body.pass !== 'string' ||
            typeof req.body.surname !== 'string' ||
            typeof req.body.dni !== 'string' ||
            typeof req.body.address !== 'string' ||
            typeof req.body.birthdate !== 'string'
        ) {
            throw new ValidationError("Datos errornes y/o faltantes.")
        }
        
        const altaUsuarioCiudadano = usuarioApplications.getAltaUsuarioCiudadano()
        const respuesta = await altaUsuarioCiudadano.ejecutar(req.body)
        res.json(respuesta)
    } catch (error) {
        next(error)
    }
})
//#endregion

//#region PUT
//#endregion

//#region GET
usuarioRouter.get('/citizens', async (req, res, next) => {
    try {        
        if (isNaN(req.query.idUser) && (typeof req.query.email !== 'string')) {
             throw new ValidationError("Identificador de usuario erroneo o faltantes.") }
        const obtenerUsuarioCiudadno = usuarioApplications.getObtenerUsuarioCiudadano()
        const respuesta = await obtenerUsuarioCiudadno.ejecutar(req.query.idUser, req.query.email)
        res.json(respuesta)
    } catch (error) {
        next(error)
    }
})

usuarioRouter.get('/municipal', async (req, res, next) => {
    try {
        if (isNaN(req.query.idUser) && (typeof req.query.email !== 'string')) { throw new ValidationError("Identificador de usuario erroneo o faltantes.") }
        const obtenerUsuarioMunicipal = usuarioApplications.getObtenerUsuarioMunicipal()
        const respuesta = await obtenerUsuarioMunicipal.ejecutar(req.query.idUser, req.query.email)
        res.json(respuesta)
    } catch (error) {
        next(error)
    }
})

usuarioRouter.get('/municipal/responsible', async (req, res, next) => {
    try {        
        const obtenerUsuariosMunicipalResponsable = usuarioApplications.getObtenerUsuariosMunicipalResponsable()
        const respuesta = await obtenerUsuariosMunicipalResponsable.ejecutar()
        res.json(respuesta)
    } catch (error) {
        next(error)
    }
})

usuarioRouter.get('/obtenerTodos/', async (req, res, next) => {
    try {
        const obtenerUsuarios = usuarioApplications.getObtenerUsuarios()
        const respuesta = await obtenerUsuarios.ejecutar()
        res.json(respuesta)
    } catch (error) {
        next(error)
    }
})
//#endregion

export default usuarioRouter