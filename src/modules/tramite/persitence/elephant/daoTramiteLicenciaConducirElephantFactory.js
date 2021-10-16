import crearDaoTramiteLicenciaConducir from './daoTramiteLicenciaConducirElephant.js'
import crearElephantClient from '../../../../common/elephantClient.js'

const elephantClient = crearElephantClient()
const daoTramiteLicenciaConducir = crearDaoTramiteLicenciaConducir(elephantClient)

function getDaoTramiteLicenciaConducir() {return daoTramiteLicenciaConducir}

export default getDaoTramiteLicenciaConducir