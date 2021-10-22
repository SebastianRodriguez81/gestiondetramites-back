import { createEmailRecordatorio } from './emailRecordatorio.js'
import { getAuth } from '../../config/index.js'

const credencialesEnv = getAuth()
console.log(credencialesEnv);

async function crearMailer() {
  return  createEmailRecordatorio(credencialesEnv.mail, credencialesEnv.pass)
}

export {
  crearMailer
}