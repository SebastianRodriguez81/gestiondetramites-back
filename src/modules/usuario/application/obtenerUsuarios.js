function crearObtenerUsuarios(usuario) {
    return {
        async ejecutar(
            tiposUsuarioId,
            correo,
            nombre,
            apellido,
            fechaCreacionDesde,
            fechaCreacionHasta,
            ultimaModificacion
        ) {
            return await usuario.buscarTodos(
                tiposUsuarioId,
                correo,
                nombre,
                apellido,
                fechaCreacionDesde,
                fechaCreacionHasta,
                ultimaModificacion
            );
        },
    };
}

export default crearObtenerUsuarios;
