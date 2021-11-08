import axios from 'axios'

const crearClienteAxios = (url, ) => {
    return {
        get: function (url, ) { return axios.get(url, )},

        post: async function (url, body) {
            axios.post(url, body)
                .then((res) => {
                    return true
                })
                .catch((err) => {                    
                    console.log(err.message)
                    throw new Error(err.message)                    
                })
        },


        put:  function (url, ) { return axios.put(url, )},
        
        patch:  function (url, ) { return axios.patch(url, )}
    }
}

export default crearClienteAxios

