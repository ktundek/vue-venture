<script setup lang="ts">
import type { WeatherData } from '@/services/weatherService';

defineProps<{
  weather: WeatherData
}>();

const getWeatherIcon = (icon: string) => `https://openweathermap.org/img/wn/${icon}@2x.png`;
const formatDate = (timestamp: number) => new Date(timestamp * 1000).toLocaleDateString('en-US', {
  weekday: 'long',
  month: 'short',
  day: 'numeric'
});
</script>

<template>
  <div class="weather-card">
    <h3>{{ formatDate(weather.dt) }}</h3>
    <img :src="getWeatherIcon(weather.weather[0].icon)" :alt="weather.weather[0].description">
    <div class="temperatures">
      <span class="min">{{ Math.round(weather.temp.min) }}°C</span>
      <span class="max">{{ Math.round(weather.temp.max) }}°C</span>
    </div>
    <div class="details">
      <p>{{ weather.weather[0].description }}</p>
      <p>Humidity: {{ weather.humidity }}%</p>
      <p>Wind: {{ Math.round(weather.wind_speed) }} km/h</p>
    </div>
  </div>
</template>

<style scoped>
.weather-card {
  background: var(--color-card-bg);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  padding: 1.5rem;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  height: 100%;
  border: 1px solid var(--color-border);
}

.weather-card:hover {
  transform: translateY(-5px);
}

.temperatures {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin: 1rem 0;
}

.max {
  color: var(--color-temp-max);
  font-weight: bold;
}

.min {
  color: var(--color-temp-min);
}

.details {
  font-size: 0.9rem;
  color: var(--color-text-soft);
}

img {
  width: 80px;
  height: 80px;
  margin: 0 auto;
}

h3 {
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
  color: var(--color-heading);
}
</style>
