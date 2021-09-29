import {
    getPort
} from './config.js'
import {
    crearServidor
} from './common/server/index.js'

const port = getPort()
const servidor = crearServidor()

//test

await servidor.conectar(port)