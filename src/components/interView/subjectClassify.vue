<template>
  <div class="subject-classify" :style="'background-color: '+ color + ';'">
    <slot></slot>
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
  justify-self: flex-end;
  font-weight: 500;
  cursor: pointer;
  text-align: center;
  box-sizing: border-box;
}
</style>