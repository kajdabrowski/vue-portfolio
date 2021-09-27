<template>
  <div class="casecardbig__container">
    <div class="casecardbig__upper">
      <h1 class="heading">
        {{ heading }}
      </h1>
      <img :src="require('@/assets/images/' + imageName + '')" />
    </div>
    <div class="casecardbig__lower">
      <a target="_blank" :href="href">View code on GitHub ></a>
      <p>
        {{ description }}
      </p>
    </div>
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
