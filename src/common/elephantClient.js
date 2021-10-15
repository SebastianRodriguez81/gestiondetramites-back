import pg from "pg";
import {getDbConnectionString} from '../config/index.js'

function crearElephantClient() {
  return {
    ejecutar: (queryString) => {
      return new Promise((resolve, reject) => {
        const conString = getDbConnectionString()
        const client = new pg.Client(conString);
        client.connect(function (err) {
          if (err) {
            reject('could not connect to postgres', err);
          }
          client.query(queryString, function (err, result) {
            if (err) {
              reject(err);
            }
            if (result) {
              client.end();
              resolve(result.rows);
            } else {
              reject('error inesperado')
            }
          });
        });
      });
    },
  };
}

export default crearElephantClient