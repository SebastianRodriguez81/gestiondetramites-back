import {crearMailer} from "./mailerFactory.js";

const mailer = await crearMailer();
let datos = {
    from: "tramiterio",
    to: "osaccani@gmail.com",
    asunto: "tramite recordatorio",
    mensaje: "enviamos recordatorio",
};
//console.log(mailer);
await mailer.send(datos);
