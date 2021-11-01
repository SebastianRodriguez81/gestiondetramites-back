import express from "express";
import { ValidationError } from "../common/errors.js";
import getUsuarioApplications from "../modules/usuario/application/applicationUsuarioFactory.js";

const usuarioRouter = express.Router();
const usuarioApplications = getUsuarioApplications();

//#region POST
usuarioRouter.post("/citizens", async (req, res, next) => {
    try {
        if (
            typeof req.body.email !== "string" ||
            typeof req.body.name !== "string" ||
            typeof req.body.pass !== "string" ||
            typeof req.body.surname !== "string" ||
            typeof req.body.dni !== "string" ||
            typeof req.body.address !== "string" ||
            typeof req.body.birthdate !== "string"
        ) {
            throw new ValidationError("Datos errornes y/o faltantes.");
        }

        const altaUsuarioCiudadano =
            usuarioApplications.getAltaUsuarioCiudadano();
        const respuesta = await altaUsuarioCiudadano.ejecutar(req.body);
        res.json(respuesta);
    } catch (error) {
        next(error);
    }
});
//#endregion

//#region PUT
usuarioRouter.put("/citizens/changeAddress", async (req, res, next) => {
    try {
        if (
            isNaN(req.query.idUser) &&
            typeof req.query.email !== "string" &&
            typeof req.query.address !== "string"
        ) {
            throw new ValidationError(
                "Identificador de usuario erroneo o faltantes."
            );
        }
        const obtenerUsuarioCiudadno =
            usuarioApplications.getObtenerUsuarioCiudadano();
        const usuario = await obtenerUsuarioCiudadno.ejecutar(
            req.query.idUser,
            req.query.email
        );
        usuario.address = req.query.address;
        console.log(usuario);
        const respuesta = usuario.persistir();
        res.json(respuesta);
    } catch (error) {
        next(error);
    }
});
//#endregion

//#region GET
usuarioRouter.get("/citizens", async (req, res, next) => {
    console.log("hola");
    try {
        if (isNaN(req.query.idUser) && typeof req.query.email !== "string") {
            throw new ValidationError(
                "Identificador de usuario erroneo o faltantes."
            );
        }
        const obtenerUsuarioCiudadno =
            usuarioApplications.getObtenerUsuarioCiudadano();
        const respuesta = await obtenerUsuarioCiudadno.ejecutar(
            req.query.idUser,
            req.query.email
        );
        res.json(respuesta);
    } catch (error) {
        next(error);
    }
});

usuarioRouter.get("/citizens/notifications", async (req, res, next) => {
    try {
        if (isNaN(req.query.idUser)) {
            throw new ValidationError(
                "Identificador de usuario erroneo o faltantes."
            );
        }
        // const obtenerUsuarioCiudadno = usuarioApplications.getObtenerUsuarioCiudadano()
        // const respuesta = await obtenerUsuarioCiudadno.ejecutar(req.query.idUser, req.query.email)

        const respuesta = [
            {
                id: 1,
                idUser: 1,
                NotificationDate: "2021-10-30",
                menssage: "Mensaje preuba 1",
            },
            {
                id: 1,
                idUser: 1,
                NotificationDate: "2021-10-29",
                menssage: "Mensaje preuba 2",
            },
            {
                id: 1,
                idUser: 1,
                NotificationDate: "2021-10-28",
                menssage: "Mensaje preuba 3",
            },
        ];
        res.json(respuesta);
    } catch (error) {
        next(error);
    }
});

usuarioRouter.get("/municipal", async (req, res, next) => {
    try {
        if (isNaN(req.query.idUser) && typeof req.query.email !== "string") {
            throw new ValidationError(
                "Identificador de usuario erroneo o faltantes."
            );
        }
        const obtenerUsuarioMunicipal =
            usuarioApplications.getObtenerUsuarioMunicipal();
        const respuesta = await obtenerUsuarioMunicipal.ejecutar(
            req.query.idUser,
            req.query.email
        );
        res.json(respuesta);
    } catch (error) {
        next(error);
    }
});

usuarioRouter.get("/municipal/responsible", async (req, res, next) => {
    try {
        const obtenerUsuariosMunicipalResponsable =
            usuarioApplications.getObtenerUsuariosMunicipalResponsable();
        const respuesta = await obtenerUsuariosMunicipalResponsable.ejecutar();
        res.json(respuesta);
    } catch (error) {
        next(error);
    }
});

usuarioRouter.get("/obtenerTodos/", async (req, res, next) => {
    try {
        const obtenerUsuarios = usuarioApplications.getObtenerUsuarios();
        const respuesta = await obtenerUsuarios.ejecutar();
        res.json(respuesta);
    } catch (error) {
        next(error);
    }
});
//#endregion

export default usuarioRouter;
