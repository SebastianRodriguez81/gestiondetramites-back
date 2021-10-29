import { createEmailRecordatorio } from './emailRecordatorio.js'
import { getAuth } from '../../config/index.js'

const credencialesEnv = getAuth()

async function crearMailer() {
  return  createEmailRecordatorio(credencialesEnv.mail, credencialesEnv.pass)
}

export {
  crearMailer
}