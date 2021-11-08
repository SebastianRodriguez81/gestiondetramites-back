import {getPort} from './config/index.js'
import {crearServidor} from './server/express.js'
import crearClienteAxios from './common/axios-client/crearClienteAxios.js'

const port = getPort()
const servidor = crearServidor()

await servidor.conectar(port)

try {
    const clienteAxios = crearClienteAxios()
   
    clienteAxios.get('http://localhost:3535/api/procedures/obtenerTodos')
    .then((respuesta) => {
        console.log(sds)
        //console.log(respuesta)
    })
    .catch((error) => {
        console.log(error.message)
    })



    const tramite = {

   
        idProcedureType: 1,
        idUser: 10,
     
        userName: "Edgard",
        userSurname: "Capurisse",
        userDni: "92876136",
        userAddress: "Caseros 2334",
        userBirthdate: "1981-12-30",
        creationDate: "2021-10-23",
        assignmentDate: "2021-11-03",
        revisionDate: "2021-11-05",
        withdrawalDate: "2021-11-06",
        completedDate: "2021-11-03",
        rejected: true,
        reasonRejection: "sos un genio!",
        lastModificationDate: "2021-11-03",
        procedureTypeDescription: "Licencia conducir",
        idLicence: 5,
        subProcedureType: "Primera licencia",
        licenceCode:"A1",
        selfieUrl: "https://picsum.photos/200/300",
        selfieDniUrl: "https://picsum.photos/200/300",
        frontDniUrl: "https://picsum.photos/200/300",
        backDniUrl: "https://picsum.photos/200/300",
        debtFreeUrl: "https://picsum.photos/200/300"

    }
    
    await clienteAxios.post('http://localhost:3535/api/procedures', tramite)
   
} catch (error) {
    console.log(error.message)
}

