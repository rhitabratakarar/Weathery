import * as dotenv from 'dotenv'
import axios from 'axios'

dotenv.config()
const WEATHERSTACK_API_KEY = process.env.WEATHERSTACK_API_KEY
const POSITIONSTACK_API_KEY = process.env.POSITIONSTACK_API_KEY

async function showDecoratedData (locationObject, weatherstackResponse) {
  console.log(`Country: ${locationObject.country}`)
  console.log(`Coordinates: ${locationObject.latitude} ${locationObject.longitude}`)
  console.log(`Name: ${locationObject.name}`)
  console.log(`The current temperature is ${weatherstackResponse.data.current.temperature}°C and feels like` +
    ` ${weatherstackResponse.data.current.feelslike}°C.`)
  console.log(`Weather Description: ${weatherstackResponse.data.current.weather_descriptions[0]}.`)
  console.log('\n')
}

async function getTemperatureData (locationObject) {
  try {
    const weatherStackApiCall = `http://api.weatherstack.com/current?access_key=${WEATHERSTACK_API_KEY}` +
      `&query=${locationObject.latitude},${locationObject.longitude}`
    const weatherstackResponse = await axios.get(weatherStackApiCall)
    showDecoratedData(locationObject, weatherstackResponse)
  } catch (error) {
    console.log(`error occured in function getTemperatureData \n${error}`)
  }
}

async function getTemptDataByLocation (location) {
  try {
    const positionStackApiCall = `http://api.positionstack.com/v1/forward?access_key=${POSITIONSTACK_API_KEY}&query=${location}`
    const response = await axios.get(positionStackApiCall)
    const listOfMatchingLocationsFound = response.data.data
    listOfMatchingLocationsFound.forEach(loc => getTemperatureData(loc))
  } catch (error) {
    console.log(`error occured in function getTemptDataByLocation \n${error}`)
  }
}

getTemptDataByLocation('lumou')
