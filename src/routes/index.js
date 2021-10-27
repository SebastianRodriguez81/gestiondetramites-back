import express from "express";
import tramiteRouter from "./tramite.js";
import usuarioRouter from "./usuario.js";

const router = express.Router();

/** AGREGAR AQUI LAS RUTAS **/
router.use("/procedures", tramiteRouter);
router.use("/users", usuarioRouter);

/****************************/

export default router;
