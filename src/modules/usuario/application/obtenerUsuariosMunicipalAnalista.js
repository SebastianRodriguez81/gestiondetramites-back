function crearObtenerUsuariosMunicipalResponsable(usuarioMunicipal) {
    return {
        async ejecutar() {            
            return usuarioMunicipal.obtenerAnalistas()
        }
    }
}

export default crearObtenerUsuariosMunicipalResponsable