import crearDaoTipoTramite from './daoTipoTramiteMock.js'

let daoTipoTramite
daoTipoTramite = crearDaoTipoTramite(null)

function getDaoTipoTramite() {
    return daoTipoTramite
}

export default getDaoTipoTramite