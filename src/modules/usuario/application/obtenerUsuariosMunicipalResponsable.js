function crearObtenerUsuariosMunicipalResponsable(usuarioMunicipal) {
    return {
        async ejecutar() {            
            return usuarioMunicipal.obtenerResponsables()
        }
    }
}

export default crearObtenerUsuariosMunicipalResponsable