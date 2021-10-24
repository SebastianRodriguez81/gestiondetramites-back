import crearDaoUsuario from './elephant/daoUsuarioElephant.js'
import crearDaoUsuarioCiudadano from './elephant/daoUsuarioCiudadanoElephant.js'
import crearElephantClient from '../../../common/elephantClient.js'

function getUsuarioDaos() {
    return {
        getDaoUsuario: function () {
            const elephantClient = crearElephantClient()
            const daoUsuario = crearDaoUsuario(elephantClient)
            return daoUsuario
        },

        getDaoUsuarioCiudadano: function () {
            const elephantClient = crearElephantClient()
            const daoUsuarioCiudadano = crearDaoUsuarioCiudadano(elephantClient)
            return daoUsuarioCiudadano
        }
    }
}

export default getUsuarioDaos