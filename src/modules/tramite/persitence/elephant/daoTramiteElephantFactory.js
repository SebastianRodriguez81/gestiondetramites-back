import crearDaoTramite from './daoTramiteElephant.js'
import crearElephantClient from '../../../../common/elephantClient.js'

const elephantClient = crearElephantClient()
const daoTramite = crearDaoTramite(elephantClient)

function getDaoTramite() {return daoTramite}

export default getDaoTramite