<template>
    <div class="introabout">
        <h1 class="introabout introabout__row1">
            {{msg1}}
        </h1>
        <h1 class="introabout introabout__row2">
            {{msg2}}
        </h1>
    </div>
</template>

<script>
import './BaseIntroAbout.scss'
export default {
  name: 'BaseIntroAbout',
  props: {
    msg1: String,
    msg2: String
  }
}
</script>
