function crearDaoTipoTramite(db) {

    return {
        buscarTodos: async () => {
            try {
                console.log(db)
                return ['vehicular']
            } catch (err) {
                throw new Error('Hubo un error al buscar las mascotas.' + err.message)
            }
        }
    }
}

export default crearDaoTipoTramite