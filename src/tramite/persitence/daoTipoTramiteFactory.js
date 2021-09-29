import crearDaoTipoTramite from './daoTipoTramite.js'

let daoTipoTramite
daoTipoTramite = crearDaoTipoTramite(null)

function getDaoTipoTramite() {
    return daoTipoTramite
}

export default getDaoTipoTramite