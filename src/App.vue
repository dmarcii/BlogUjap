<template>
  <div id="app">
    <div id="nav">
      <Navigation />
  
    </div>
    <router-view/>
  </div>
</template>

<script>
import Navigation from '@/components/layout/Navigation'

export default {

  components: {
    Navigation  
  }
}
</script>


<style lang="scss">
@import "https://cdn.jsdelivr.net/npm/bulma@0.9.1/css/bulma.min.css"

</style>
