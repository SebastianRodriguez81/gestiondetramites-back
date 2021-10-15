import dotenv from 'dotenv'
dotenv.config()

const getPort = () => process.env.PORT || 4000

export default getPort