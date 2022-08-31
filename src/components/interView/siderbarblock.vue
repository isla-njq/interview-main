<template>
  <div class="sider-bar-block">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'siderBarBlock',
  data () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.sider-bar-block {
  width: 80%;
  margin: 20px auto;
  border-radius: 5px;
  border: 1px solid #000000;
  padding: 10px 20px 20px;
  box-sizing: border-box;
  transition: all 0.5s;
  &:hover {
    box-shadow: 5px 5px 20px #888888;
  }
}
</style>