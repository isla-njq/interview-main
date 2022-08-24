<template>
  <div>
    <div>
      <span>题目分类：</span>
      <div>
        <subject-classify>javascript</subject-classify>
      </div>
    </div>
  </div>
</template>

<script>
import subjectClassify from './subjectClassify.vue';
export default {
  components: {
    subjectClassify
  }
}
</script>