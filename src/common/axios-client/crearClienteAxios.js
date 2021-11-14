import axios from 'axios'

const crearClienteAxios = (url, ) => {

    return {

        get: function (url, ) {
            const headers = { 'Content-Type': 'application/json' }
            return axios.get(url, {
                headers: headers
            })
        },

        post: async function (url, body) {
            const headers = { 'Content-Type': 'application/json', 'fiware-service': 'gestionDeTramites' }

            axios.post(url, body, {
                    headers: headers
                })
                .then((res) => {
                    return true
                })
                .catch((err) => {
                    console.log(err.message)
                    throw new Error(err.message)
                })
        },

        put: function (url, ) {
            return axios.put(url, )
        },

        patch: function (url, ) {
            return axios.patch(url, )
        }
    }
}

export default crearClienteAxios