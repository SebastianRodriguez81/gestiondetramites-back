import crearDaoEventoTramite from './elephant/daoEventoTramiteElephant.js'
import crearElephantClient from '../../../common/elephantClient.js'

function getTramiteDaos() {
    return {
        getDaoEventoTramite: function () {
            const elephantClient = crearElephantClient()
            const daoEventoTramite = crearDaoEventoTramite(elephantClient)
            return daoEventoTramite
        }
    }
}

export default getTramiteDaos