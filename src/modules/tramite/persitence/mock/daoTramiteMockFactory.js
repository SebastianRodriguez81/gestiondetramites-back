import crearDaoTramite from './daoTramiteMock.js'

let daoTramite
daoTramite = crearDaoTramite(null)

function getDaoTramite() {
    return daoTramite
}

export default getDaoTramite