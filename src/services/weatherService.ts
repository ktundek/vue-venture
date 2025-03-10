const API_KEY = 'bd5e378503939ddaee76f12ad7a97608' // some public API key.
const AMSTERDAM_LAT = 52.377956
const AMSTERDAM_LON = 4.89707

export interface WeatherData {
  dt: number
  temp: { day: number; min: number; max: number }
  weather: Array<{ id: number; main: string; description: string; icon: string }>
  humidity: number
  wind_speed: number
}

export async function getAmsterdamWeather(): Promise<WeatherData[]> {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${AMSTERDAM_LAT}&lon=${AMSTERDAM_LON}&units=metric&cnt=14&appid=${API_KEY}`,
  )
  const data = await response.json()
  return data.list
}
