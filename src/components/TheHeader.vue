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
  padding: 1em;
  font-family: Roboto, sans-serif;
  font-weight: bold;
  color: black;
  background-color: white;
  display: flex;
  justify-content: space-between;
  position: fixed; //fixed menu
  width: 100%; //fixed menu
  top: 0; //fixed menu
}

//OLD ROUTER LINK CLASS
// .router-link-exact-active {
//   text-decoration: underline rgba(0, 0, 0, 1);
//   text-underline-offset: 0.2em;
//   transition: text-underline-offset 500ms;
//   text-decoration-thickness: 0.12em;
//   zoom: 115%;
// }

//Hover underline - how to set on non-active router links on hover?
.router-link-exact-active {
  display: inline-block;
  position: relative;
  color: black;
  zoom: 120%;
}

.router-link-exact-active:after {
  content: "";
  position: absolute;
  width: 100%;
  transform: scaleX(0);
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: black;
  transform-origin: bottom center;
  transition: transform 0.35s ease-out;
}

.router-link-exact-active:hover:after {
  transform: scaleX(1);
  transform-origin: bottom center;
}

</style>
