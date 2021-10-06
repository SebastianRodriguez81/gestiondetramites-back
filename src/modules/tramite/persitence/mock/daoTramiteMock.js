function crearDaoTipoTramite(db) {

    return {
        buscarTodos: async (estadoId, tipoTramiteId, fechaCreacion, usuarioId, usuarioAsigId) => {
            try {
                console.log(db)
                let listaTramites = [{
                        id: 456,
                        numero: 456,
                        estado: {
                            id: 1,
                            codigo: 'Pendiente'
                        },
                        tipoTramite: {
                            id: 1,
                            codigo: 'Vehicular'
                        },
                        fechaCreacion: '02/06/2022',
                        usuario: {
                            id: 96,
                            correo: 'pepeArgento@gmail.com',
                            nombre: 'Pepe',
                            apellido: 'Argento'
                        },
                        usuarioAsignado: null
                    },
                    {
                        id: 457,
                        numero: 457,
                        estado: {
                            id: 1,
                            codigo: 'Pendiente'
                        },
                        tipoTramite: {
                            id: 1,
                            codigo: 'Vehicular'
                        },
                        fechaCreacion: '05/07/2022',
                        usuario: {
                            id: 97,
                            correo: 'monicaArgento@gmail.com',
                            nombre: 'Monica',
                            apellido: 'Argento'
                        },
                        usuarioAsignado: null
                    },
                    {
                        id: 458,
                        numero: 458,
                        estado: {
                            id: 1,
                            codigo: 'Pendiente'
                        },
                        tipoTramite: {
                            id: 1,
                            codigo: 'Vehicular'
                        },
                        fechaCreacion: '09/11/2022',
                        usuario: {
                            id: 99,
                            correo: 'perroArgento@gmail.com',
                            nombre: 'Perro',
                            apellido: 'Argento'
                        },
                        usuarioAsignado: null

                    }
                ]

                return listaTramites
            } catch (err) {
                throw new Error('Hubo un error al buscar las mascotas.' + err.message)
            }
        }
    }
}

export default crearDaoTipoTramite