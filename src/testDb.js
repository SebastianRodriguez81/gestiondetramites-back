import crearElephantClient from './tramite/persitence/elephant/elephantClient.js'

const cliente = crearElephantClient("postgres://biybwjma:omVD5lIa_1FpaSdhiwODrCBsiAOf01P7@fanny.db.elephantsql.com/biybwjma")
cliente.consultar("select * from estados")
