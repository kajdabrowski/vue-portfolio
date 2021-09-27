<template>
    <footer class="footer">
        <p class="footer__star">*</p>
        <p class="footer__text">GET IN TOUCH</p>
        <div class="footer__links">
          <a target="_blank" href="https://github.com/kajdabrowski">GITHUB</a>
          <a target="_blank" href="https://se.linkedin.com/in/kaj-dabrowski-a550b4202"
            >LINKEDIN</a
          >
          <a target="_blank" href="kaj.dabrowski@gmail.com">GMAIL</a>
        </div>
      </footer>
</template>

<script>
export default {
  name: 'TheFooter'
}
</script>

<style lang="scss" scoped>
.footer {
  display: flex;
  justify-content: space-between;
  background-color: black;
  padding: 2em;
//   height: auto;
//   width: auto;
  width: 100%;

  a{
    display: flex;
    flex-direction: column;
    text-decoration: none;
    margin: 0.5em;
    color: white;
    font-weight: 700;
  }

  &__links {
    flex-direction: column;
    color: white;
    :hover {
      zoom: 115%;
    }
    :active {
      text-decoration: none;
    }
    :visited {
      color: white;
      text-decoration: none;
    }
    font-family: Roboto, sans-serif;
    color: white;
  }

}

.footer__star{
    color: black;
}

.footer__text {
  font-family: Roboto, sans-serif;
  color: #f9f9f9;
  font-weight: 700;
  font-size: 5em;
}
</style>
