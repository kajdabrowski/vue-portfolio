<template>
  <div class="imagetext__container">
    <div class="imagetext">
      <div class="imagetext__text">
        <h1 class="imagetext__text--content">
          {{ textContent }}
        </h1>
      </div>
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
