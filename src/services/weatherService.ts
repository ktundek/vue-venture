const API_KEY = 'bd5e378503939ddaee76f12ad7a97608'
const ROME_LAT = 41.9028
const ROME_LON = 12.4964

export interface WeatherData {
  dt: number
  temp: { day: number; min: number; max: number }
  weather: Array<{ id: number; main: string; description: string; icon: string }>
  humidity: number
  wind_speed: number
}

export async function getRomeWeather(): Promise<WeatherData[]> {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${ROME_LAT}&lon=${ROME_LON}&units=metric&cnt=14&appid=${API_KEY}`,
  )
  const data = await response.json()
  return data.list
}
