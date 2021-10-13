<template>
    <footer class="footer">
        <p class="footer__star">*</p>
        <h1 class="footer__text">GET IN TOUCH</h1>
        <div class="footer__links">
          <a target="_blank" href="https://github.com/kajdabrowski">GITHUB</a>
          <a target="_blank" href="https://se.linkedin.com/in/kaj-dabrowski-a550b4202"
            >LINKEDIN</a
          >
          <a target="_blank" href="mailto: kaj.dabrowski@gmail.com">GMAIL</a>
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
    flex-direction: column;
    color: white;
    :hover {
      transform: scale(1.1);// zoom: 115%
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
  color: #f9f9f9;
  font-weight: 700;
  margin-bottom: 0;
}

@media (max-width: 480px){
  .footer{
    &__text{
      display: none;
    }

    &__star{
      display: none;
    }

    &__links{
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      width: 100%;
    }
  }
}
</style>
