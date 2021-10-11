<template>
  <div class="imagetext__container">
    <div class="imagegrid">
        <h1 class="imagetext__container--text">
          {{ textContent }}
        </h1>
    </div>
  </div>
</template>

<script>
import './ImageText.scss'

export default {
  name: 'ImageText',
  props: {
    textContent: String,
    imageName: String
  }
}
</script>
