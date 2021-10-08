<template>
  <div class="skillgrid">
    <h2 class="skillgrid__title">I WORK WITH</h2>
    <div class="skillgrid__wrapper">
      <div class="wrapper__row1 wrapper__row1--item1">
        <img src="@/assets/images/mdi_language-javascript.png" alt="JS-logo" />
        <p>JavaScript</p>
      </div>
      <div class="wrapper__row1 wrapper__row1--item2">
        <img src="@/assets/images/mdi_vuejs.png" alt="Vue-logo" />
        <p>Vue.js</p>
      </div>
        <div class="wrapper__row1 wrapper__row1--item3">
          <img src="@/assets/images/mdi_react.png" alt="React-logo" />
          <p>React.js</p>
        </div>
        <div class="wrapper__row2 wrapper__row2--item1">
          <img src="@/assets/images/mdi_nodejs.png" alt="NodeJS-logo" />
          <p>Node</p>
        </div>
        <div class="wrapper__row2 wrapper__row2--item2">
          <img src="@/assets/images/mdi_language-css3.png" alt="CSS3-logo" />
          <p>CSS3</p>
        </div>
        <div class="wrapper__row2 wrapper__row2--item3">
          <img src="@/assets/images/mdi_language-html5.png" alt="HTML5-logo" />
          <p>HTML5</p>
        </div>
    </div>
  </div>
</template>

<script>
import './SkillGrid.scss'

export default {
  name: 'SkillGrid'
}
</script>
