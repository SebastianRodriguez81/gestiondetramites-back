import getUsuarioDaos from "../persitence/persistenceUsuarioElephant.js"
import crearUsuario from "./usuario.js"
import crearUsuarioCiudadano from "./usuarioCiudadano.js"
import crearUsuarioMunicipio from "./usuarioMunicipio.js"

const usuarioDaos = getUsuarioDaos()

function getUsuarioModels() {
    return {
        getUsuario: function () {
            let daoUsuario = usuarioDaos.getDaoUsuario()
            let usuario = crearUsuario(daoUsuario)
            return usuario
        },

        getUsuarioCiudadano: function () {
            let daoUsuarioCiudadano = usuarioDaos.getDaoUsuarioCiudadano();
            let usuarioCiudadano = crearUsuarioCiudadano(daoUsuarioCiudadano)
            return usuarioCiudadano;
        },

        getUsuarioMunicipio: function () {
            let daoUsuario = usuarioDaos.getDaoUsuario()
            let usuarioMunicipio = crearUsuarioMunicipio(daoUsuario)
            return usuarioMunicipio
        }
    }
}

export default getUsuarioModels