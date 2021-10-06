import {getPort} from './config/index.js'
import {crearServidor} from './server/express.js'

const port = getPort()
const servidor = crearServidor()

await servidor.conectar(port)