import crearDaoUsuario from './elephant/daoUsuarioElephant.js'
import crearDaoUsuarioCiudadano from './elephant/daoUsuarioCiudadanoElephant.js'
import crearDaoUsuarioMunicipal from './elephant/daoUsuarioMunicipalElephant.js'
import crearDaoNotificacionUsuario from './elephant/daoNotificacionUsuarioElephant.js'
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
        },

        getDaoUsuarioMunicipal: function () {
            const elephantClient = crearElephantClient()
            const daoUsuarioMunicipal = crearDaoUsuarioMunicipal(elephantClient)
            return daoUsuarioMunicipal
        },

        getDaoNotificacionUsuario: function () {
            const elephantClient = crearElephantClient()
            const daoNotificacionUsuario = crearDaoNotificacionUsuario(elephantClient)
            return daoNotificacionUsuario
        }
    }
}

export default getUsuarioDaos