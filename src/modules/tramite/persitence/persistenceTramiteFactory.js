import crearDaoTramite from './elephant/daoTramiteElephant.js'
import crearDaoTramiteLicenciaConducir from './elephant/daoTramiteLicenciaConducirElephant.js'
import crearDaoEventoTramite from './elephant/daoEventoTramiteElephant.js'
import crearDaoTipoTramite from './elephant/daoTipoTramiteElephant.js'
import crearElephantClient from '../../../common/elephantClient.js'

function getTramiteDaos() {
    return {
        getDaoTramite: function () {
            const elephantClient = crearElephantClient()
            const daoTramite = crearDaoTramite(elephantClient)
            return daoTramite
        },

        getDaoTramiteLicenciaConducir: function () {
            const elephantClient = crearElephantClient()
            const daoTramiteLicenciaConducir = crearDaoTramiteLicenciaConducir(elephantClient)
            return daoTramiteLicenciaConducir
        },

        getDaoEventoTramite: function () {
            const elephantClient = crearElephantClient()
            const daoEventoTramite = crearDaoEventoTramite(elephantClient)
            return daoEventoTramite
        },

        getDaoTipoTramite: function () {
            const elephantClient = crearElephantClient()
            const daoTipoTramite = crearDaoTipoTramite(elephantClient)
            return daoTipoTramite
        }
    }
}

export default getTramiteDaos