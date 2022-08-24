<template>
  <div>
    <div class="question" v-for="(item, index) in questionList" :key="index">
      <question :list.sync="list" :questionId="item.id" :questionTitle="item.title" :questionContent="item.content"></question>
    </div>
    
  </div>
</template>

<script>
import question from "../../components/question.vue";
export default {
  components: {
    question,
  },
  data() {
    return {
      questionList: [
        {
          id: 1,
          title: "js、、、、、、adsadas",
          content: "1232312312323hhhaaa",
        },
        {
          id: 2,
          title: "js、、、、、、adsadas",
          content: "1232312312323hhhaaa",
        },{
          id: 3,
          title: "js、、、、、、adsadas",
          content: "1232312312323hhhaaa",
        },{
          id: 4,
          title: "js、、、、、、adsadas",
          content: "1232312312323hhhaaa",
        },
      ],
      list:[]
    };
  },
  watch: {
    list (newValue) {
      console.log(newValue)
    }
  }
};
</script>

<style lang="scss" scoped>
.question {
  margin: auto;
}
</style>
