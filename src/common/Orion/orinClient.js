import crearClienteAxios from '../axios-client/crearClienteAxios.js'

function obtenerClienteOrion() {
    return {
        informarNuevoTramite: function (tramite) {

            let tramiteOrion = {
                id: tramite.id,
                type: "tramites",
                state: {
                    value: tramite.idState,
                    type: "Integer"
                },
                userMunicipal: {
                    value: tramite.idUserMunicipal,
                    type: "Integer"
                }
            }

            const clienteAxios = crearClienteAxios()

            try {
                await clienteAxios.post("localhost:1026/v2/entities", tramiteOrion)
            } catch (error) {
                console.log(error)
            }
        }
    }

}