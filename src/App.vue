<template>
  <div id="app">
    <TheHeader />
    <div class="appcontainer">
      <router-view />
    </div>
    <TheFooter />
  </div>
</template>

<script>
import './App.scss'
import TheHeader from '@/components/TheHeader.vue'
import TheFooter from '@/components/TheFooter.vue'

export default {
  components: {
    TheHeader,
    TheFooter
  }
}// Add components, computed props, hooks, methods etc that are part of app.
</script>
