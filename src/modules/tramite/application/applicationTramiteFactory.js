import getTramite from "../model/tramiteFactory.js";
import getTramiteLicenciaConducir from "../model/tramiteLicenciaConducirFactory.js";
import getTipoTramite from "../model/tipoTramiteFactory.js";
import crearObtenerTramitePorId from "./obtenerTramitePorId.js"
import crearObtenerTramitesPorUsuario from "./obtenerTramitesPorUsuario.js"
import crearObtenerTramitesPendiente from "./obtenerTramitesPendiente.js"
import crearObtenerTramitesEnProceso from "./obtenerTramitesEnProceso.js"
import crearObtenerTramitesFinalizado from "./obtenerTramitesFinalizado.js"
import crearObtenerTramitesCantidades from "./obtenerTramitesCantidades.js"
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
import getUsuarioModels from "../../usuario/model/modelUsurioFactory.js"

function getTramiteApplications() {
    return {

        getAltaTramites: function() {
            let altaTramiteLicenciaConducir = this.getAltaTramitesLicenciaConducir()
            let obtenerAltaTramite = crearAltaTramite(altaTramiteLicenciaConducir)
            return obtenerAltaTramite
        },

        getAltaTramitesLicenciaConducir: function() {
            let tramiteLicenciaConducir = getTramiteLicenciaConducir()
            let obtenerAltaTramiteLicenciaConducir = crearAltaTramiteLicenciaConducir(tramiteLicenciaConducir)
            return obtenerAltaTramiteLicenciaConducir
        },

        getAsignarAnalista: function() {
            let tramite = getTramite()
            let asignarAnalista = crearAsignarAnalista(tramite)
            return asignarAnalista
        },

        getAsignarResponsable: function() {
            let tramite = getTramite()
            let asignarResponsable = crearAsignarResponsable(tramite)
            return asignarResponsable
        },

        getAsignarFechaRevision: function() {
            let tramite = getTramite()
            let asignarFechaRevision = crearAsignarFechaRevision(tramite, crearMailer(), getUsuarioModels().getUsuarioCiudadano())
            return asignarFechaRevision
        },

        getAsignarFechaRetiro: function() {
            let tramite = getTramite()
            let asignarFechaRetiro = crearAsignarFechaRetiro(tramite, crearMailer(), getUsuarioModels().getUsuarioCiudadano())
            return asignarFechaRetiro
        },

        getFinalizarTramite: function() {
            let tramite = getTramite()
            let finalizarTramite = crearFinalizarTramite(tramite, crearMailer(), getUsuarioModels().getUsuarioCiudadano())
            return finalizarTramite
        },

        getObtenerTramitePorId: function () {
            let tramite = getTramite()
            let licenciaConducir = getTramiteLicenciaConducir()
            let obtenerTipoTramitePorId = crearObtenerTramitePorId(tramite, licenciaConducir)
            return obtenerTipoTramitePorId
        },

        getObtenerTramitesPorUsuario: function () {
            let tramite = getTramite()
            let obtenerTipoTramitesPorUsuario = crearObtenerTramitesPorUsuario(tramite)
            return obtenerTipoTramitesPorUsuario
        },

        getObtenerTramitesPendiente: function () {
            let tramite = getTramite()
            let obtenerTipoTramitesPendiente = crearObtenerTramitesPendiente(tramite)
            return obtenerTipoTramitesPendiente
        },

        getObtenerTramitesEnProceso: function () {
            let tramite = getTramite()
            let obtenerTipoTramitesEnProceso = crearObtenerTramitesEnProceso(tramite)
            return obtenerTipoTramitesEnProceso
        },

        getObtenerTramitesFinalizado: function () {
            let tramite = getTramite()
            let obtenerTipoTramitesFinalizado = crearObtenerTramitesFinalizado(tramite)
            return obtenerTipoTramitesFinalizado
        },

        getObtenerTramitesCantidades: function () {
            let tramite = getTramite()
            let obtenerTipoTramitesCantidades = crearObtenerTramitesCantidades(tramite)
            return obtenerTipoTramitesCantidades
        },

        getObtenerTiposTramite: function () {
            let tipoTramite = getTipoTramite()
            let obtenerTipoTramite = crearObtenerTiposTramite(tipoTramite)
            return obtenerTipoTramite
        },

        getObtenerTramites: function () {
            let tramite = getTramite()
            let obtenerTramite = crearObtenerTramite(tramite)
            return obtenerTramite
        }
    }
}

export default getTramiteApplications