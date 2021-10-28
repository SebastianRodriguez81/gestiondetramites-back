import { ValidationError, NotFoundError } from '../common/errors.js'

function errorHandler(err, req, res, next) {
    console.error(err.stack);

    switch (err.constructor) {
        case ValidationError:
            res.status(400).send('Error de validacion: ' + err.message)
            break

        case NotFoundError:
            res.status(404).send('Entidad no encontrada: ' + err.message)
            break

        default:
            res.status(500).send('ups..!'+ err.message)
            break
    }
}

export default errorHandler