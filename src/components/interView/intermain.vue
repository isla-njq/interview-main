<template>
  <div>
    <div>
      <div class="title">-- 题目分类 --</div>
      <div class="inter-main">
        <subject-classify v-for="(i, index) in classifyList" :key="index">{{i.classifyName}}</subject-classify>
      </div>
      <div class="title">-- 题目推荐 --</div>
    </div>
  </div>
</template>

<script>
import subjectClassify from './subjectClassify.vue';
export default {
  name: 'intermain',
  components: {
    subjectClassify
  },
  data () {
    return {
      classifyList: [
        {
          classifyName: 'javascript'
        },
        {
          classifyName: 'HTML'
        },
        {
          classifyName: 'CSS'
        },
        {
          classifyName: 'Vue'
        },
        {
          classifyName: 'Java'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.title {
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
  font-size: 20px;
  font-weight: 600;
}
.inter-main {
  width: 85%;
  margin: 0 auto;
}
</style>