<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { getAmsterdamWeather } from '@/services/weatherService';
import type { WeatherData } from '@/services/weatherService';
import WeatherCard from '@/components/WeatherCard.vue';

const weatherData = ref<WeatherData[]>([]);
const loading = ref(true);
const error = ref<string | null>(null);

onMounted(async () => {
  try {
    weatherData.value = await getAmsterdamWeather();
  } catch (e) {
    error.value = 'Failed to load weather data';
  } finally {
    loading.value = false;
  }
});
</script>

<template>
  <div class="weather-view">
    <div class="content-container">
      <h1>Amsterdam Weather Forecast</h1>
      <div v-if="loading" class="loading">Loading weather data...</div>
      <div v-else-if="error" class="error">{{ error }}</div>
      <div v-else class="forecast-grid">
        <WeatherCard v-for="day in weatherData" :key="day.dt" :weather="day" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.weather-view {
  flex: 1;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.content-container {
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}

h1 {
  text-align: center;
  margin: 2rem 0;
  color: var(--color-heading);
  font-size: 2.5rem;
}

.forecast-grid {
  display: grid;
  width: 100%;
  gap: 1.5rem;
  justify-content: center;
  grid-template-columns: repeat(4, minmax(250px, 1fr));
}

/* Responsive breakpoints */
@media (max-width: 1200px) {
  .forecast-grid {
    grid-template-columns: repeat(3, minmax(250px, 1fr));
  }
}

@media (max-width: 900px) {
  .forecast-grid {
    grid-template-columns: repeat(2, minmax(250px, 1fr));
  }
}

@media (max-width: 600px) {
  .forecast-grid {
    grid-template-columns: 1fr;
  }
}

.loading,
.error {
  text-align: center;
  padding: 2rem;
  font-size: 1.2rem;
}

.error {
  color: #dc3545;
}
</style>
