import getUsuarioCiudadano from "./usuarioCiudadanoFactory.js";
import getUsuarioMunicipio from "./usuarioMunicipioFactory.js";

function crearUsuario(daoUsuario) {
    return {
        id: null,
        tiposUsuarioIdx: null,
        correo: null,
        nombre: null,
        apellido: null,
        fechaCreacion: null,
        eliminado: null,
        ultimaModificacion: null,
        tipoDeUsuario: null,

        async buscarTodos(
            id,
            tiposUsuarioId,
            correo,
            nombre,
            apellido,
            fechaCreacionDesde,
            fechaCreacionHasta,
            ultimaModificacion
        ) {
            return await daoUsuario.buscarTodos(
                id,
                tiposUsuarioId,
                correo,
                nombre,
                apellido,
                fechaCreacionDesde,
                fechaCreacionHasta,
                ultimaModificacion
            );
        },
        setTiposUsuarioIdx(tiposUsuarioIdx) {
            this.tiposUsuarioIdx = tiposUsuarioIdx;
        },
        setCorreo(correo) {
            this.correo = correo;
        },
        setNombre(nombre) {
            this.nombre = nombre;
        },
        setApellido(apellido) {
            this.apellido = apellido;
        },
        setFechaCreacion(fechaCreacion) {
            this.fechaCreacion = fechaCreacion;
        },
        setEliminado(eliminado) {
            this.eliminado = eliminado;
        },
        setUltimaModificacion(ultimaModificacion) {
            this.ultimaModificacion = ultimaModificacion;
        },

        async persistir() {
            if (!this.tiposUsuarioIdx) {
                throw new Error("Tipo de usuario faltante");
            }

            const result = await daoUsuario.persistir(this);

            if (!this.id) {
                this.id = result;
            }

            return result;
        },
        //obtener datos, pasamos el id del usuario y el usuario busca en su dao todos sus datos de la base

        //getTipoDeUsuario a partir del id hardcodeado establezco el tipo de usuario
        getTipoDeUsuario() {
            switch (tiposUsuarioIdx) {
                case 1:
                    this.tipoDeUsuario = "Usuario Ciudadano";
                    break;
                case 2:
                    this.tipoDeUsuario = "Usuario Municipio";
                    break;

                default:
                    this.tipoDeUsuario = null;
                    break;
            }
        },
        //puede ser una entidad o enum de tipo de usuario y a partir de ahi establecer los datos para el tipo
        establecerTipoDeUsuario() {
            return {
                establecerTipoDeUsuarioCiudadano(
                    dni,
                    domicilio,
                    fechaDeNacimiento
                ) {
                    if ((tipoDeUsuario = !"Usuario Ciudadano")) {
                        throw new Error("Error. No es usuario ciudadano");
                    }
                    tipoDeUsuario = getUsuarioCiudadano();
                    tipoDeUsuario.usuarioId = this.id;
                    tipoDeUsuario.dni = dni;
                    tipoDeUsuario.domicilio = domicilio;
                    tipoDeUsuario.fechaDeNacimiento = fechaDeNacimiento;
                    tipoDeUsuario.usuario = this;
                },
                establecerTipoDeUsuarioMunicipio(
                    usuarioMunicipioRolesId,
                    tipoTramiteHabilitaciones
                ) {
                    if ((tipoDeUsuario = !"Usuario Municipio")) {
                        throw new Error("Error. No es Usuario Municipio");
                    }
                    tipoDeUsuario = getUsuarioMunicipio();
                    tipoDeUsuario.usuarioId = this.id;
                    tipoDeUsuario.usuarioMunicipioRolesId =
                        usuarioMunicipioRolesId;
                    tipoDeUsuario.tipoTramiteHabilitaciones =
                        tipoTramiteHabilitaciones;
                    tipoDeUsuario.usuario = this;
                },
            };
        },
    };
}

export default crearUsuario;