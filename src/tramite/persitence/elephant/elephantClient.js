import pg from "pg";

function crearElephantClient(conString) {
  var conString =
    "postgres://biybwjma:omVD5lIa_1FpaSdhiwODrCBsiAOf01P7@fanny.db.elephantsql.com/biybwjma"; //Can be found in the Details page
  var client = new pg.Client(conString);

  return {
    connect: () => {
      client.connect(function (err) {
        if (err) {
          return console.error("could not connect to postgres", err);
        }
      });
    },
    close: () => {
      client.end();
    },
  };
}
export {crearElephantClient}
/* client.query('select * from estados', function(err, result) {
    if(err) {
      return console.error('error running query', err);
    }
    console.log(result);
  }); */
