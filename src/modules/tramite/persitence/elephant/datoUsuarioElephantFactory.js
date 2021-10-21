import crearDaoUsuario from './daoUsuarioElephant.js'
import crearElephantClient from '../../../../common/elephantClient.js'

const elephantClient = crearElephantClient()
const daoUsuario = crearDaoUsuario(elephantClient)

function getDaoUsuario() {return daoUsuario}

export default getDaoUsuario