<template>
    <div class="paragraph">
        <p class="paragraph paragraph__text">
            {{msg}}
        </p>
    </div>
</template>

<script>
import './BaseParagraph.scss'

export default {
  name: 'BaseParagraph',
  props: {
    msg: String
  }
}
</script>
