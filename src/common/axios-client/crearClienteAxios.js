import axios from 'axios'

const crearClienteAxios = (url, ) => {
    return {
        get: function (url, ) { return axios.get(url, )},
        post:  function (url, ) { return axios.post(url, )},
        put:  function (url, ) { return axios.put(url, )},
        patch:  function (url, ) { return axios.patch(url, )}
    }
}

export { crearClienteAxios }

