function crearDaoTramite(db) {
    return {
        persistir: async (usuario) => {
            try {
                const result = await db.ejecutar(newQ);
                return result;
            } catch (err) {
                throw new Error(
                    "Hubo un error al buscar los tipos de tramites: " +
                        err.message
                );
            }
        },
    };
}

export default crearDaoTramite;
