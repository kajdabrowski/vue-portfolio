<template>
  <div class="home">
    <BaseIntro msg="WEB DEV STUDENT BASED IN STOCKHOLM" />
    <BaseParagraph
      msg="Hi, my name is Kaj."
    />
    <BaseParagraph msg="I study Javascript-development at IT-Högskolan in Stockholm. I enjoy working in the intersection of technology and media and combine writing code with writing punchy copy.
    I believe that your content is just as important as the look and feel of your website - and I can help you with both. If you know of any opportunities or just feel like getting a cup of coffee, please get in touch!" />
    <ImageText textContent="WEB DEVELOPMENT & COPY WRITING" imageName="laptop.png"/>
    <ExperienceTable />
  </div>
</template>

<script>
import BaseIntro from '@/components/BaseIntro.vue'
import BaseParagraph from '@/components/BaseParagraph.vue'
import ExperienceTable from '@/components/ExperienceTable.vue'
import ImageText from '@/components/ImageText.vue'

export default {
  name: 'Home',
  components: {
    BaseIntro,
    BaseParagraph,
    ExperienceTable,
    ImageText
  }
}
</script>

<style lang="scss" scoped>
.home{
  margin: 2em;
}
</style>
