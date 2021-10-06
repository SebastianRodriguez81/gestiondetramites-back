import pg from "pg";
import {getDbConnectionString} from '../config/index.js'

function crearElephantClient() {
  const conString = getDbConnectionString()
  const client = new pg.Client(conString);

  return {
    ejecutar: (queryString) => {     
      return new Promise((resolve, reject) => {
        client.connect(function (err) {
          if (err) {
            reject('could not connect to postgres', err);
          }
          client.query(queryString, function (err, result) {
            if (err) {
              reject(err);
            }
            if (result) {
              resolve(result.rows);
            }
          });
        });
      });
    },
  };
}

export default crearElephantClient