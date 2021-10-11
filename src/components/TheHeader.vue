<template>
  <nav class="nav">
    <router-link class="nav__link" to="/"
      >KAJ DABROWSKI</router-link
    >
    <router-link class="nav__link" to="/work"
      >WORK</router-link
    >
    <router-link class="nav__link" to="/about"
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
//Desktop
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
  margin-bottom: 0.5em;
  // margin: 2em;
}

.nav__link {
  display: inline-block;
  position: relative;
  color: black;
  margin: 0.5em;
}

.nav__link:after {
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

.nav__link:hover:after {
  transform: scaleX(1);
  transform-origin: bottom center;
}

.router-link-exact-active{
  zoom: 120%;
}

//Tablets, portrait
// @media (min-width: 768px) and (max-width: 1024px){
//   .nav{
//     max-width: 100%;
//   }
// }

</style>
