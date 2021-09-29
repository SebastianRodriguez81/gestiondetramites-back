import dotenv from 'dotenv'
dotenv.config()
//comentario random
const getPort = () => process.env.PORT || 4000

export {
  getPort
}