import getTramiteDaos from "../persitence/persistenceTramiteFactory.js"
import crearEventoTramite from "./eventoTramite.js"

const tramiteDaos = getTramiteDaos()

function getTramiteModels() {

    return {
        getEventoTramite: function (){
            const daoEventoTramite = tramiteDaos.getDaoEventoTramite()
            const eventoTramite = crearEventoTramite(daoEventoTramite)
            return eventoTramite

        }
    }

}

export default getTramiteModels