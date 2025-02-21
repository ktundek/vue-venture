<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="app-container">
    <header>
      <nav>
        <RouterLink to="/">Weather</RouterLink>
        <!-- <RouterLink to="/about">About</RouterLink> -->
        <!-- <RouterLink to="/home">Home</RouterLink> -->
      </nav>
    </header>

    <RouterView />
  </div>
</template>

<style scoped>
.app-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}

header {
  width: 100%;
  padding: 1.5rem;
  background-color: rgba(255, 255, 255, 0.95);
  border-bottom: 1px solid var(--color-border);
  display: flex;
  justify-content: center;
  position: sticky;
  top: 0;
  z-index: 100;
}

nav {
  max-width: 1400px;
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 3rem;
  font-size: 1.1rem;
}

nav a {
  color: var(--color-text);
  text-decoration: none;
  padding: 0.5rem 1.5rem;
  border-radius: 4px;
  transition: all 0.3s ease;
  font-weight: 500;
}

nav a:hover {
  background-color: var(--color-background-soft);
}

nav a.router-link-active {
  font-weight: 600;
  color: var(--color-primary);
  background-color: var(--color-background-mute);
}
</style>
