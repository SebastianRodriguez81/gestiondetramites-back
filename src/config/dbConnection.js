import dotenv from 'dotenv'
dotenv.config()

const getDbConnectionString = () => process.env.DBCONECTIONSTRING

export default getDbConnectionString