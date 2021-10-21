function crearUsuarioCiudadano(daoUsuario) {
    //dao usuairo o usuario ciudadano?
    return {
        id: null,
        usuarioId: null,
        dni: null,
        domicilio: null,
        fechaDeNacimiento: null,
        usuario: null,
        //pongo el usuario para establecerlo a partir del usuarioid

        async buscarTodos(id, usuarioId, dni, domicilio, fechaDeNacimiento) {
            return await daoUsuario.buscarTodos(
                id,
                usuarioId,
                dni,
                domicilio,
                fechaDeNacimiento
            );
        },
        setUsuarioId(usuarioId) {
            this.usuarioId = usuarioId;
        },
        setDni(dni) {
            this.dni = dni;
        },
        setdomicilio(domicilio) {
            this.domicilio = domicilio;
        },
        setfechaDeNacimiento(fechaDeNacimiento) {
            this.fechaDeNacimiento = fechaDeNacimiento;
        },

        async persistir() {
            if (!this.usuarioId) {
                throw new Error("Uuario faltante");
            }

            const result = await daoUsuario.persistir(this);

            if (!this.id) {
                this.id = result;
            }

            return result;
        },
    };
}

export default crearUsuarioCiudadano;
