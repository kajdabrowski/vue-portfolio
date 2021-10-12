<template>
    <footer class="footer">
        <p class="footer__star">*</p>
        <h1 class="footer__text">GET IN TOUCH</h1>
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
  height: auto;
  width: 100vw;

  a{
    display: flex;
    flex-direction: column;
    text-decoration: none;
    margin: 0.5em;
    color: white;
    font-weight: 700;
  }

  &__links {
    max-width: 5em;
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
  // font-family: Roboto, sans-serif;
  color: #f9f9f9;
  font-weight: 700;
  // font-size: 5em;
  margin-bottom: 0;
}

//Mobile portrait
@media (min-width: 320px) and (max-width: 480px){
  .footer__text{
    display: none;
  }
  .footer__star{
    display: none;
  }
  .footer__links{
    display: flex;
    flex-direction: row;
  }
}
</style>
