<template>
  <div class="work">
    <CaseCardBig
      heading="E-WALLET"
      imageName="ewallet1.png"
      href="https://github.com/kajdabrowski/iths-e-wallet"
      description="E-wallet is a simple app built in Vuejs. The user can add and remove credit cards, set one card as active and see all cards available to them.
       The page has a Home view showing all cards, and an Add card view where new cards can be added by filling out a form. The new card is then
       added to the Home view."
    />
    <CaseCardBig
      heading="OPLASK"
      imageName="oplask1.png"
      href="https://github.com/kajdabrowski/oplask"
      description="Oplask is a single page application image-gallery built in Vue. The user can perform a keyword-search using the Unsplash API and receive a gallery of nine images.
      The user can generate additional results or go back to the previous page using the left and right arrows. Randomized images are generated using the random button.
      Images can be added to favorites by clicking the heart icon in the lower right corner of each image."
    />
    <OtherProjectGrid />
  </div>
</template>

<script>
import CaseCardBig from '@/components/CaseCardBig.vue'
import OtherProjectGrid from '@/components/OtherProjectGrid.vue'

export default {
  name: 'Work',
  components: {
    CaseCardBig,
    OtherProjectGrid
  }
}
</script>
