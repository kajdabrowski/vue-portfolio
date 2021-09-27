<template>
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
</template>

<script>
export default {
  name: 'TheHeader'
}
</script>

<style lang="scss" scoped>

.nav {
  padding: 2em;
  font-family: Roboto, sans-serif;
  font-weight: bold;
  color: black;
  display: flex;
  justify-content: space-between;
  position: fixed; //fixed menu
  width: 100%; //fixed menu
  top: 0; //fixed menu
  &__link--left {
    color: black;
    justify-content: flex-start;
    text-decoration: none;
  }
  &__link--right {
    color: black;
    justify-content: flex-end;
    text-decoration: none;
  }
}

.router-link-exact-active {
  text-decoration: underline;
  text-decoration-thickness: 0.1em;
  zoom: 115%;
}
</style>
