import express from 'express'
import { ValidationError } from '../common/errors.js'
import getUsuarioApplications from '../modules/usuario/application/applicationUsuarioFactory.js'

const usuarioRouter = express.Router()
const usuarioApplications = getUsuarioApplications()

//#region POST
usuarioRouter.post('/', async (req, res, next) => {
    res.json("segui participando")
})
//#endregion

//#region PUT

//#endregion

//#region GET
usuarioRouter.get('/citizens', async (req, res, next) => {
    try {
        if (isNaN(req.query.idUser)) { throw new ValidationError("Identificador de usuario erroneo o faltantes.") }
        const obtenerUsuarioCiudadnoPorId = usuarioApplications.getObtenerUsuarioCiudadanoPorId()
        const respuesta = await obtenerUsuarioCiudadnoPorId.ejecutar(req.query.idUser)
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