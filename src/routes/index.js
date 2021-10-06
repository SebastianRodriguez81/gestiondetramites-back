import express from 'express'
import tramiteRouter from './tramite.js'

const router = express.Router()

/** AGREGAR AQUI LAS RUTAS **/
router.use('/tramites', tramiteRouter)

/****************************/

export default router