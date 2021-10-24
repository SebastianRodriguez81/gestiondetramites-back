import getUsuarioDaos from "../persitence/persistenceUsuarioElephant.js"
import crearUsuario from "./usuario.js"
import crearUsuarioCiudadano from "./usuarioCiudadano.js"
import crearUsuarioMunicipal from "./usuarioMunicipial.js"

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

        getUsuarioMunicipal: function () {
            let daoUsuarioMunicipal = usuarioDaos.getDaoUsuarioMunicipal()
            let usuarioMunicipal = crearUsuarioMunicipal(daoUsuarioMunicipal)
            return usuarioMunicipal
        }
    }
}

export default getUsuarioModels