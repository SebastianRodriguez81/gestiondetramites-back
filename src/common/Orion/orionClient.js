import crearClienteAxios from '../axios-client/crearClienteAxios.js'

function obtenerClienteOrion() {
    return {
        informarNuevoTramite: async function (tramite) {

            const codigoTramite = tramite.obtenerCodigo()

            let nombreTipoTramite
            switch (tramite.idProcedureType) {
                case 1:
                    nombreTipoTramite = 'LicenciaConducir'
                    break;
            
                default:
                    throw new Error('Error al obtener los datos del tipo de tramite para Orion.')
            }
           
            let nombreEstado
            switch (parseInt(tramite.idState)) {
                case 1:
                    nombreEstado = 'EnProceso'                   
                    break;

                case 2:
                    nombreEstado = 'AsigandoAnalista'
                    break;

                case 3:
                    nombreEstado = 'AsigandoResponsable'
                    break;

                case 4:
                    nombreEstado = 'FechaRetiro'
                    break;

                case 5:
                    nombreEstado = 'Finalizado'
                    break;
            
                default:
                    throw new Error('Error al obtener los datos del estado para Orion.')
            }

            let tramiteOrion = {
                id: tramite.id,
                type: "tramites",
                code:{
                    value: codigoTramite,
                    type: "String"
                },
                procedureType:{
                    value: tramite.idProcedureType,
                    type: "Integer"
                },
                procedureTypeName:{
                    value: nombreTipoTramite,
                    type: "String"
                },               
                state: {
                    value: parseInt(tramite.idState),
                    type: "Integer"
                },
                stateName: {
                    value: nombreEstado,
                    type: "Integer"
                },
                rejected: {
                    value: tramite.rejected,
                    type: "Boolean"
                },
                userMunicipal: {
                    value: tramite.idUserCitizen,
                    type: "Integer"
                },
                userMunicipal: {
                    value: tramite.idUserMunicipal,
                    type: "Integer"
                }
            }

            const clienteAxios = crearClienteAxios()            

            try {
                //await clienteAxios.post("192.168.0.38:1026/v2/entities", tramiteOrion)
            } catch (error) {
                console.log(error)
            }
        }
    }

}

export default obtenerClienteOrion