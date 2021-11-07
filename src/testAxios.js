import {getPort} from './config/index.js'
import {crearServidor} from './server/express.js'
import {crearClienteAxios} from './common/axios-client/crearClienteAxios.js'

const port = getPort()
const servidor = crearServidor()

await servidor.conectar(port)

try {
    const clienteAxios = crearClienteAxios()
    
    clienteAxios.get('http://localhost:4000/api/procedures/obtenerTodos')
    .then((respuesta) => {
        console.log(respuesta)
    })
    .catch((error) => {
        console.log(error.message)
    })
} catch (error) {
    console.log(error)
}

