import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'animate.css'
// import animated from 'animate.css'

import TheHeader from '@/components/TheHeader.vue'
import TheFooter from '@/components/TheFooter.vue'
import BaseIntro from '@/components/BaseIntro.vue'
import BaseIntroAbout from '@/components/BaseIntroAbout.vue'
import BaseParagraph from '@/components/BaseParagraph.vue'
import ExperienceTable from '@/components/ExperienceTable.vue'
import ImageText from '@/components/ImageText.vue'
import CaseCardBig from '@/components/CaseCardBig.vue'
import OtherProjectGrid from '@/components/OtherProjectGrid.vue'

Vue.config.productionTip = false
Vue.component('TheHeader', TheHeader)
Vue.component('TheFooter', TheFooter)
Vue.component('BaseIntro', BaseIntro)
Vue.component('BaseIntroAbout', BaseIntroAbout)
Vue.component('BaseParagraph', BaseParagraph)
Vue.component('ExperienceTable', ExperienceTable)
Vue.component('ImageText', ImageText)
Vue.component('CaseCardBig', CaseCardBig)
Vue.component('OtherProjectGrid', OtherProjectGrid)

// Vue.use(animated)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
