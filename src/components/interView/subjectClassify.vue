<template>
  <div class="subject-classify" :style="'background-color: '+ color + ';'">
    <div class="text">
      <span><slot></slot></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'subjectClassify',
  props:{
    color: {
      value: String,
      default: '#333333'
    }
  }
}
</script>

<style lang="scss" scoped>
.subject-classify {
  width: 160px;
  height: 80px;
  line-height: 24px;
  display: inline-block;
  font-weight: 500;
  cursor: pointer;
  box-sizing: border-box;
  margin: 10px;
  border-radius: 5px;
  .text {
    transition: all 0.5s;
    &:hover {
      transform: scale(125%);
    }
  }
  .text {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    span {
      margin: auto;
    }
  }
}
</style>