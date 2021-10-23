import ValidationError from '../common/errors.js'

function errorHandler(err, req, res, next) {
    console.error(err.stack);

    switch (err.constructor) {
        case ValidationError:
            res.status(461).send('Error de validacion: ' + err.message)
            break;

        default:
            res.status(500).send('ups..!');
            break;
    }
}

export default errorHandler