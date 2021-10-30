import getTramiteDaos from "../persitence/persistenceTramiteFactory.js"
import crearTramite from "./tramite.js"
import crearTramiteLicenciaConducir from "./tramiteLicenciaConducir.js"
import crearEventoTramite from "./eventoTramite.js"
import crearTipoTramite from "./tipoTramite.js"

const tramiteDaos = getTramiteDaos()

function getTramiteModels() {

    return {
        getTramite: function (){
            const daoTramite = tramiteDaos.getDaoTramite()
            const tramite = crearTramite(daoTramite)
            return tramite
        },

        getTramiteLicenciaConducir: function (){
            const tramite = this.getTramite()
            const daoTramiteLicenciaConducir = tramiteDaos.getDaoTramiteLicenciaConducir()
            const tramiteLicenciaConducir = crearTramiteLicenciaConducir(tramite, daoTramiteLicenciaConducir)
            return tramiteLicenciaConducir
        },

        getEventoTramite: function (){
            const daoEventoTramite = tramiteDaos.getDaoEventoTramite()
            const eventoTramite = crearEventoTramite(daoEventoTramite)
            return eventoTramite
        },

        getTipoTramite: function (){
            const daoTipoTramite = tramiteDaos.getDaoTipoTramite()
            const tipoTramite = crearTipoTramite(daoTipoTramite)
            return tipoTramite
        }
    }
}

export default getTramiteModels