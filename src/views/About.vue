<template>
  <div class="about">
    <BaseIntroAbout msg1="A LITTLE" msg2=" BIT ABOUT ME" />
    <BaseParagraph
      msg="Hi, I'm Kaj Dabrowski, a web development student residing in the southern parts of Stockholm.
      I enjoy learning about new technologies, creative problem-solving and building and managing my own
    projects from start to finish. The fact that there is always something new to learn and multiple ways to increase my skill-level is what I love the most about this field
     - boredom is simply never an option."
    />
     <BaseParagraph msg="In a previous life I earned a bachelors degree in journalism and history and I have more than 10 years of experience working for various media outlets and production companies, both as a print journalist and producer. I still have a love for writing high quality copy and enjoy combining these skillsets in my everyday work - from making the website or
application to providing content for it." />
    <BaseParagraph msg="I am currently a student at IT-Högskolan in Stockholm where I study Javascript development. I am always open to new opportunities and love meeting new people - if you'd like to collaborate on something or simply meet up for a coffee, please feel free to contact me." />
    <SkillGrid />
  </div>
</template>

<script>
import BaseIntroAbout from '@/components/BaseIntroAbout.vue'
import BaseParagraph from '@/components/BaseParagraph.vue'
import SkillGrid from '@/components/SkillGrid.vue'

export default {
  name: 'About',
  components: {
    BaseIntroAbout,
    BaseParagraph,
    SkillGrid
  }
}
</script>
