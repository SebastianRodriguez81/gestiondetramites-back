import pg from "pg";
import {getDbConnectionString} from '../config/index.js'

function crearElephantClient() {
  var conString = getDbConnectionString()
  var client = new pg.Client(conString);

  return {
    connect: (queryString) => {
      return new Promise((resolve, reject) => {
        client.connect(function (err) {
          if (err) {
            reject('could not connect to postgres', err);
          }
          client.query(queryString, function (err, result) {
            if (err) {
              reject(err);
            }
            resolve(result.rows);
          });
        });
      });
    },
  };
}

export default crearElephantClient