<template>
  <div class="intro">
      <h1 class="animate__animated animate__bounce intro intro__text">
        {{ msg }}
      </h1>
  </div>
</template>

<script>
import './BaseIntro.scss'

export default {
  name: 'BaseIntro',
  props: {
    msg: String
  }
}
</script>
