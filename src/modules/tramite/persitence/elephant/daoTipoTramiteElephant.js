import pg from 'pg'

function buscar() {

    return new Promise((resolve, reject) => {

        var conString = "postgres://biybwjma:omVD5lIa_1FpaSdhiwODrCBsiAOf01P7@fanny.db.elephantsql.com/biybwjma"
        var client = new pg.Client(conString);
        client.connect(function (err) {
            if (err) {
                return console.error('could not connect to postgres', err);
            }
            client.query('SELECT * from tipostramite', function (err, result) {
                if (err) {
                    reject(err);
                }
                resolve(result.rows)


            });
        });

    });


}

function crearDaoTipoTramite(client) {

    return {
        buscarTodos: async () => {

            try {
                const result = await buscar();
                console.log(result);
                return result;
            } catch (err) {
                throw new Error('Hubo un error al buscar las mascotas.' + err.message)
            }
        }
    }
}




export default crearDaoTipoTramite