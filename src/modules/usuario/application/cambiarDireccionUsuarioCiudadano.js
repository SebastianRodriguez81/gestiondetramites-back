function crearCambiarDireccion(usuarioCiudadano) {
    return {
        async ejecutar(idUser, address) {
            await usuarioCiudadano.obtenerDatos(idUser);
            usuarioCiudadano.user.address = address;
            const respuesta = await usuarioCiudadano.persistir();
            return respuesta
        }
    }
}

export default crearCambiarDireccion