<template>
  <div class="test">
    <div class="nav">
      <question-bank-nav></question-bank-nav>
    </div>
    <div class="question">
      <div class="question-bank-list">
        <question-bank-list :questionList="questionList" @click="onclick"></question-bank-list>
      </div>
      <div class="question-bank-view">
        <question-bank-view :questionId="questionId"></question-bank-view>
      </div>
    </div>
    
  </div>
</template>

<script>
import questionBankNav from "../../components/questionBank/questionBankNav.vue";
import questionBankList from "../../components/questionBank/questionBankList"
import questionBankView from "../../components/questionBank/questionBankView"
export default {
  name: 'questionBank',
  components: {
    questionBankNav,
    questionBankList,
    questionBankView
  },
  data() {
    return {
      questionList: [
        {
          id: 1,
          title: "啊实打实大撒大声地啊实打实",
          content: "啊实打实大撒大声地啊实打实啊实打实大撒大声地啊实打实",
        },
        {
          id: 2,
          title: "啊实打实大撒大声地啊实打实",
          content: "啊实打实大撒大声地啊实打实啊实打实大撒大声地啊实打实",
        },
        {
          id: 3,
          title: "啊实打实大撒大声地啊实打实",
          content: "啊实打实大撒大声地啊实打实啊实打实大撒大声地啊实打实",
        },
        {
          id: 4,
          title: "啊实打实大撒大声地啊实打实",
          content: "啊实打实大撒大声地啊实打实啊实打实大撒大声地啊实打实",
        },
        {
          id: 5,
          title: "啊实打实大撒大声地啊实打实",
          content: "啊实打实大撒大声地啊实打实啊实打实大撒大声地啊实打实",
        },
        {
          id: 6,
          title: "啊实打实大撒大声地啊实打实",
          content: "啊实打实大撒大声地啊实打实啊实打实大撒大声地啊实打实",
        },
        {
          id: 7,
          title: "啊实打实大撒大声地啊实打实",
          content: "啊实打实大撒大声地啊实打实啊实打实大撒大声地啊实打实",
        },
        {
          id: 8,
          title: "啊实打实大撒大声地啊实打实",
          content: "啊实打实大撒大声地啊实打实啊实打实大撒大声地啊实打实",
        },
        {
          id: 9,
          title: "啊实打实大撒大声地啊实打实",
          content: "啊实打实大撒大声地啊实打实啊实打实大撒大声地啊实打实",
        },
        {
          id: 10,
          title: "啊实打实大撒大声地啊实打实",
          content: "啊实打实大撒大声地啊实打实啊实打实大撒大声地啊实打实",
        },
        {
          id: 11,
          title: "啊实打实大撒大声地啊实打实啊实打实大撒大声地啊实打实啊实打实大撒大声地啊实打实啊实打实大撒大声地啊实打实",
          content: "啊实打实大撒大声地啊实打实啊实打实大撒大声地啊实打实",
        },
        {
          id: 12,
          title: "啊实打实大撒大声地啊实打实",
          content: "啊实打实大撒大声地啊实打实啊实打实大撒大声地啊实打实",
        },
        {
          id: 14,
          title: "啊实打实大撒大声地啊实打实",
          content: "啊实打实大撒大声地啊实打实啊实打实大撒大声地啊实打实",
        },
        {
          id: 15,
          title: "啊实打实大撒大声地啊实打实",
          content: "啊实打实大撒大声地啊实打实啊实打实大撒大声地啊实打实",
        },
        {
          id: 16,
          title: "啊实打实大撒大声地啊实打实",
          content: "啊实打实大撒大声地啊实打实啊实打实大撒大声地啊实打实",
        },
        {
          id: 17,
          title: "啊实打实大撒大声地啊实打实",
          content: "啊实打实大撒大声地啊实打实啊实打实大撒大声地啊实打实",
        },
        {
          id: 18,
          title: "啊实打实大撒大声地啊实打实",
          content: "啊实打实大撒大声地啊实打实啊实打实大撒大声地啊实打实",
        }
      ],
      questionId:''
    };
  },
  watch: {
    list (newValue) {
      console.log(newValue)
    }
  },
  methods: {
    onclick (val) {
      this.questionId = val.id
      console.log(val)
    }
  }
};
</script>

<style lang="scss" scoped>
.test {
  display: flex;
  .nav {
    max-width: 200px;
    height: calc(100vh - 61px);
  }
  .question {
    padding-top: 20px;
    padding-left: 30px;
    margin: 0 auto;
    flex: 1;
    display: flex;
    .question-bank-list {
    }
    .question-bank-view {
      flex: 1;
    }
  }
}

</style>
