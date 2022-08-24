<template>
    <div>
        <Header></Header>
        <div class="main">
          <router-view></router-view>
        </div>
    </div>
</template>

<script>
import Header from '../../components/header.vue'

export default {
  components: {
    Header
  }
}
</script>

<style lang="scss" scoped>
.main {
  position: fixed;
  top: 61px;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
}
</style>