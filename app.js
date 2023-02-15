import * as dotenv from 'dotenv'
dotenv.config()

const area = 'salkia'
const accessKey = process.env.API_KEY
const url = `http://api.weatherstack.com/current?access_key=${accessKey}&query=${area}`
console.log(url)
