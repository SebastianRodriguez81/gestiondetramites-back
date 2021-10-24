function crearUsuario(daoUsuario) {
    return {
        id: null,
        idUserType: null,
        email: null,
        pass: null,
        name: null,
        surname: null,
        creationDate: null, 
        //userTypeCode: null,    

        async persistir() {
            const result = await daoUsuario.persistir(this)
            if (!this.id) { this.id = result }
            return this;
        },

        async obtenerDatos(id) {
            const datos = await daoUsuario.obtenerDatosPorId(id)           
            this.id = datos.id
            this.idUserType = datos.idusertype
            this.email = datos.email
            this.name = datos.name
            this.surname = datos.surname
            this.creationDate = datos.creationdate ? datos.creationdate.toISOString().split('T')[0] : datos.creationdate
            //this.userTypeCode = datos.usertypecode
            return this
        },

        async buscarTodos() {
            return await daoUsuario.buscarTodos();
        },      
        
        // getTipoDeUsuario() {
        //     switch (idUserType) {
        //         case 1:
        //             this.tipoDeUsuario = "Usuario Ciudadano";
        //             break;
        //         case 2:
        //             this.tipoDeUsuario = "Usuario Municipio";
        //             break;

        //         default:
        //             this.tipoDeUsuario = null;
        //             break;
        //     }
        // },

        //puede ser una entidad o enum de tipo de usuario y a partir de ahi establecer los datos para el tipo
        // establecerTipoDeUsuario() {
        //     return {
        //         establecerTipoDeUsuarioCiudadano(
        //             dni,
        //             domicilio,
        //             fechaDeNacimiento
        //         ) {
        //             if ((tipoDeUsuario = !"Usuario Ciudadano")) {
        //                 throw new Error("Error. No es usuario ciudadano");
        //             }
        //             tipoDeUsuario = getUsuarioCiudadano();
        //             tipoDeUsuario.usuarioId = this.id;
        //             tipoDeUsuario.dni = dni;
        //             tipoDeUsuario.domicilio = domicilio;
        //             tipoDeUsuario.fechaDeNacimiento = fechaDeNacimiento;
        //             tipoDeUsuario.usuario = this;
        //         },
        //         establecerTipoDeUsuarioMunicipio(
        //             usuarioMunicipioRolesId,
        //             tipoTramiteHabilitaciones
        //         ) {
        //             if ((tipoDeUsuario = !"Usuario Municipio")) {
        //                 throw new Error("Error. No es Usuario Municipio");
        //             }
        //             tipoDeUsuario = getUsuarioMunicipio();
        //             tipoDeUsuario.usuarioId = this.id;
        //             tipoDeUsuario.usuarioMunicipioRolesId =
        //                 usuarioMunicipioRolesId;
        //             tipoDeUsuario.tipoTramiteHabilitaciones =
        //                 tipoTramiteHabilitaciones;
        //             tipoDeUsuario.usuario = this;
        //         },
        //     }
        // }
    }
}

export default crearUsuario;