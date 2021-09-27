<template>
  <div id="app">
      <nav class="nav">
        <router-link class="nav__link nav__link--left" to="/"
          >KAJ DABROWSKI</router-link
        >
        <router-link class="nav__link nav__link--right" to="/work"
          >WORK</router-link
        >
        <router-link class="nav__link nav__link--right" to="/about"
          >ABOUT</router-link
        >
      </nav>
      <router-view />
      <footer class="footer">
        <p class="footer__star">*</p>
        <!--Fulhack-->
        <p class="footer__text">GET IN TOUCH</p>
        <div class="footer__links">
          <a target="_blank" href="https://github.com/kajdabrowski">GITHUB</a>
          <a target="_blank" href="https://se.linkedin.com/in/kaj-dabrowski-a550b4202"
            >LINKEDIN</a
          >
          <a target="_blank" href="kaj.dabrowski@gmail.com">GMAIL</a>
        </div>
      </footer>
  </div>
</template>

<script>
import './App.scss'

export default {}// Add components, computed props, hooks, methods etc that are part of app.
</script>
