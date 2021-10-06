import crearDaoTipoTramite from './daoTipoTramiteElephant.js'
import crearElephantClient from '../../../../common/elephantClient.js'

const elephantClient = crearElephantClient(null)
const daoTipoTramite = crearDaoTipoTramite(elephantClient)

function getDaoTipoTramite() {
    return daoTipoTramite
}

export default getDaoTipoTramite