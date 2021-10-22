import { createEmailComprobante } from "./emailComprobante.js";

function crearEmailModule(auth) {
    const emailComprobante = createEmailComprobante(auth.mail, auth.pass);

    return {
        avisoRecordatorio: async (datosMensaje) => {
            const mensaje = `<div> Hola ${datosMensaje.nombre} ${datosMensaje.apellido},<br> Recordamos que tu fecha de presentacion es el: ${datosMensaje.fecha}, a las ${datosMensaje.hora}! </div>`;
            const subject = "Recordatorio presentacion trámite";
            const datosMail = {
                from: "Tramites - Ciudades Inteligente",
                to: datosMensaje.email,
                subject: subject,
                mensaje: mensaje,
            };
            await emailComprobante.send(datosMail);
        },
    };
}

export { crearEmailModule };
