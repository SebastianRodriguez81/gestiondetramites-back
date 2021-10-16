function crearDaoTipoTramite(client) {

    return {
        buscarTodos: async () => {
            try {
                const result = await client.ejecutar('select * from tipostramite');                
                return result;
            } catch (err) {
                throw new Error('Hubo un error al buscar las mascotas.' + err.message)
            }
        }
    }
}

export default crearDaoTipoTramite