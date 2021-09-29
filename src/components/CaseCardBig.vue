<template>
  <div class="casecardbig__container">
      <h1 class="casecardbig__heading">
        {{ heading }}
      </h1>
      <img class="casecardbig__img" :src="require('@/assets/images/' + imageName + '')" />
      <a target="_blank" :href="href">View code on GitHub ></a>
      <p>
        {{ description }}
      </p>
  </div>
</template>

<script>
import './CaseCardBig.scss'

export default {
  name: 'CaseCardBig',
  props: {
    heading: String,
    imageName: String,
    description: String,
    href: String
  }
}
</script>
