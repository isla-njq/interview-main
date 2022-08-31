<template>
  <div class="test">
    <question :questionsession="questionList"></question>
    <test-footer></test-footer>
  </div>
</template>

<script>
import question from "../../components/test/question";
import testFooter from "../../components/test/testFooter"
export default {
  name: 'test',
  components: {
    question,
    testFooter
  },
  data() {
    return {
      questionList: {
        id: 1,
        title: "js12321321321adsadas",
        content: ['爱上地阿斯达斯多巴适哦大赛打死哦大叔大婶爱上地阿斯达斯多巴适哦大赛打死哦大叔大婶爱上地阿斯达斯多巴适哦大赛打死哦大叔大婶爱上地阿斯达斯多巴适哦大赛打死哦大叔大婶爱上地阿斯达斯多巴适哦大赛打死哦大叔大婶','爱上地阿斯达斯多巴适哦大赛打死哦大叔大婶爱上地阿斯达斯多巴适哦大赛打死哦大叔大婶爱上地阿斯达斯多巴适哦大赛打死哦大叔大婶爱上地阿斯达斯多巴适哦大赛打死哦大叔大婶爱上地阿斯达斯多巴适哦大赛打死哦大叔大婶','爱上地阿斯达斯多巴适哦大赛打死哦大叔大婶爱上地阿斯达斯多巴适哦大赛打死哦大叔大婶爱上地阿斯达斯多巴适哦大赛打死哦大叔大婶爱上地阿斯达斯多巴适哦大赛打死哦大叔大婶爱上地阿斯达斯多巴适哦大赛打死哦大叔大婶','爱上地阿斯达斯多巴适哦大赛打死哦大叔大婶爱上地阿斯达斯多巴适哦大赛打死哦大叔大婶爱上地阿斯达斯多巴适哦大赛打死哦大叔大婶爱上地阿斯达斯多巴适哦大赛打死哦大叔大婶爱上地阿斯达斯多巴适哦大赛打死哦大叔大婶','爱上地阿斯达斯多巴适哦大赛打死哦大叔大婶爱上地阿斯达斯多巴适哦大赛打死哦大叔大婶爱上地阿斯达斯多巴适哦大赛打死哦大叔大婶爱上地阿斯达斯多巴适哦大赛打死哦大叔大婶爱上地阿斯达斯多巴适哦大赛打死哦大叔大婶','爱上地阿斯达斯多巴适哦大赛打死哦大叔大婶爱上地阿斯达斯多巴适哦大赛打死哦大叔大婶爱上地阿斯达斯多巴适哦大赛打死哦大叔大婶爱上地阿斯达斯多巴适哦大赛打死哦大叔大婶爱上地阿斯达斯多巴适哦大赛打死哦大叔大婶'],
      },
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
</style>
