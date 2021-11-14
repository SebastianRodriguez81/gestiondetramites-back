import getTramiteModels from "../model/modelTramiteFactory.js"
import getUsuarioModels from "../../usuario/model/modelUsurioFactory.js"
// import getTramite from "../model/tramiteFactory.js"
// import getTramiteLicenciaConducir from "../model/tramiteLicenciaConducirFactory.js"
// import getTipoTramite from "../model/tipoTramiteFactory.js"
import crearObtenerTramitePorId from "./obtenerTramitePorId.js"
import crearObtenerTramitesPorUsuario from "./obtenerTramitesPorUsuario.js"
import crearObtenerTramitesPendiente from "./obtenerTramitesPendiente.js"
import crearObtenerTramitesEnProceso from "./obtenerTramitesEnProceso.js"
import crearObtenerTramitesEnProcesoAnalista from "./obtenerTramitesEnProcesoAnalista.js"
import crearObtenerTramitesEnProcesoResponsable from "./obtenerTramitesEnProcesoResponsable.js"
import crearObtenerTramitesFinalizado from "./obtenerTramitesFinalizado.js"
import crearObtenerTramitesCantidades from "./obtenerTramitesCantidades.js"
import crearObtenerEventosTramite from "./obtenerEventosTramite.js"
import crearObtenerTiposTramite from "./obtenerTiposTramite.js"
import crearObtenerTramite from "./obtenerTramites.js"
import crearAltaTramite from "./altaTramite.js"
import crearAltaTramiteLicenciaConducir from "./altaTramiteLicenciaConducir.js"
import crearAsignarAnalista from "./asignarAnalista.js"
import crearAsignarResponsable from "./asignarResponsable.js"
import crearAsignarFechaRevision from "./asignarFechaRevision.js"
import crearAsignarFechaRetiro from "./asignarFechaRetiro.js"
import crearFinalizarTramite from "./finalizarTramite.js"
import {crearMailer} from "../../../common/mailing/mailerFactory.js"
import obtenerClienteOrion from "../../../common/Orion/orionClient.js"

const tramteModels = getTramiteModels()
const usuarioModels = getUsuarioModels()

function getTramiteApplications() {
    return {

        getAltaTramites: function() {
            const tramite = tramteModels.getTramite()
            const orionClient = obtenerClienteOrion()
            const altaTramiteLicenciaConducir = this.getAltaTramitesLicenciaConducir()
            const obtenerAltaTramite = crearAltaTramite(tramite, orionClient, altaTramiteLicenciaConducir)
            return obtenerAltaTramite
        },

        getAltaTramitesLicenciaConducir: function() {
            const tramiteLicenciaConducir = tramteModels.getTramiteLicenciaConducir()
            const obtenerAltaTramiteLicenciaConducir = crearAltaTramiteLicenciaConducir(tramiteLicenciaConducir)
            return obtenerAltaTramiteLicenciaConducir
        },

        getAsignarAnalista: function() {
            const tramite = tramteModels.getTramite()
            const usuarioMunicipal = usuarioModels.getUsuarioMunicipal()
            const eventoTramite = tramteModels.getEventoTramite()
            const asignarAnalista = crearAsignarAnalista(tramite, usuarioMunicipal, eventoTramite)
            return asignarAnalista
        },

        getAsignarResponsable: function() {
            const tramite = tramteModels.getTramite()
            const usuarioMunicipal = usuarioModels.getUsuarioMunicipal()
            const eventoTramite = tramteModels.getEventoTramite()
            const asignarResponsable = crearAsignarResponsable(tramite, usuarioMunicipal, eventoTramite)
            return asignarResponsable
        },

        getAsignarFechaRevision: function() {
            const tramite = tramteModels.getTramite()
            const mailer = crearMailer()
            const usuarioCiudadano = usuarioModels.getUsuarioCiudadano()
            const eventoTramite = tramteModels.getEventoTramite()
            const notificacionUsuario = usuarioModels.getNotificacionUsuario()
            const asignarFechaRevision = crearAsignarFechaRevision(tramite, mailer, usuarioCiudadano, eventoTramite, notificacionUsuario)
            return asignarFechaRevision
        },

        getAsignarFechaRetiro: function() {
            const tramite = tramteModels.getTramite()
            const mailer = crearMailer()
            const usuarioCiudadano = usuarioModels.getUsuarioCiudadano()
            const eventoTramite = tramteModels.getEventoTramite()
            const notificacionUsuario = usuarioModels.getNotificacionUsuario()
            const asignarFechaRetiro = crearAsignarFechaRetiro(tramite, mailer, usuarioCiudadano, eventoTramite, notificacionUsuario)
            return asignarFechaRetiro
        },

        getFinalizarTramite: function() {
            const tramite = tramteModels.getTramite()
            const mailer = crearMailer()
            const usuarioCiudadano = usuarioModels.getUsuarioCiudadano()
            const eventoTramite = tramteModels.getEventoTramite()
            const notificacionUsuario = usuarioModels.getNotificacionUsuario()
            const finalizarTramite = crearFinalizarTramite(tramite, mailer, usuarioCiudadano, eventoTramite, notificacionUsuario)
            return finalizarTramite
        },

        getObtenerTramitePorId: function () {
            const tramite = tramteModels.getTramite()
            const licenciaConducir = tramteModels.getTramiteLicenciaConducir()
            const obtenerTipoTramitePorId = crearObtenerTramitePorId(tramite, licenciaConducir)
            return obtenerTipoTramitePorId
        },

        getObtenerTramitesPorUsuario: function () {
            const tramite = tramteModels.getTramite()
            const obtenerTipoTramitesPorUsuario = crearObtenerTramitesPorUsuario(tramite)
            return obtenerTipoTramitesPorUsuario
        },

        getObtenerTramitesPendiente: function () {
            const tramite = tramteModels.getTramite()
            const obtenerTipoTramitesPendiente = crearObtenerTramitesPendiente(tramite)
            return obtenerTipoTramitesPendiente
        },        

        getObtenerTramitesEnProceso: function () {
            const tramite = tramteModels.getTramite()
            const obtenerTipoTramitesEnProceso = crearObtenerTramitesEnProceso(tramite)
            return obtenerTipoTramitesEnProceso
        },

        getObtenerTramitesEnProcesoAnalista: function () {
            const tramite = tramteModels.getTramite()
            const obtenerTipoTramitesEnProcesoAnalista = crearObtenerTramitesEnProcesoAnalista(tramite)
            return obtenerTipoTramitesEnProcesoAnalista
        },

        getObtenerTramitesEnProcesoResponsable: function () {
            const tramite = tramteModels.getTramite()
            const obtenerTipoTramitesEnProcesoResponsable = crearObtenerTramitesEnProcesoResponsable(tramite)
            return obtenerTipoTramitesEnProcesoResponsable
        },

        getObtenerTramitesFinalizado: function () {
            const tramite = tramteModels.getTramite()
            const obtenerTipoTramitesFinalizado = crearObtenerTramitesFinalizado(tramite)
            return obtenerTipoTramitesFinalizado
        },

        getObtenerTramitesCantidades: function () {
            const tramite = tramteModels.getTramite()
            const obtenerTipoTramitesCantidades = crearObtenerTramitesCantidades(tramite)
            return obtenerTipoTramitesCantidades
        },

        getObtenerEventosTramite: function () {
            const eventoTramite = tramteModels.getEventoTramite()
            const obtenerEventosTramite = crearObtenerEventosTramite(eventoTramite)
            return obtenerEventosTramite
        },

        getObtenerTiposTramite: function () {
            const tipoTramite = tramteModels.getTipoTramite()
            const obtenerTipoTramite = crearObtenerTiposTramite(tipoTramite)
            return obtenerTipoTramite
        },

        getObtenerTramites: function () {
            const tramite = tramteModels.getTramite()
            const obtenerTramite = crearObtenerTramite(tramite)
            return obtenerTramite
        }
    }
}

export default getTramiteApplications