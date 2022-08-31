<template>
  <div class="testfooter">
    <div class="last">下一题</div>
  </div>
</template>

<script>
export default {
  name: 'testfooter'
}
</script>

<style lang="scss" scoped>
.testfooter {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 60px;
  line-height: 40px;
  padding: 10px;
  border-top: 1px solid #aaaaaa;
  box-sizing: border-box;
  z-index: 2001;
  background: white;
  .last {
    float: right;
    margin: 0 20px;
  }
}
</style>