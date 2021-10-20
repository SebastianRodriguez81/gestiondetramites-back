import express from 'express'
import tramiteRouter from './tramite.js'

const router = express.Router()

/** AGREGAR AQUI LAS RUTAS **/
router.use('/procedures', tramiteRouter)

/****************************/

export default router