<template>
  <div class="mistakes-view">
    <div class="answer-go" @click="gotest">去做题</div>
    <div class="answer-show" @click="answerShow = !answerShow" v-text="answerTest"></div>
    <div class="mistakes-name">
      <div class="title">123.&nbsp;&nbsp;&nbsp;{{mistakessession.title}}</div>
      <div class="all-content">
        <p class="content" v-for="(item, index) in mistakessession.content" :key="index">
          {{item}}
        </p>
      </div>
    </div>
    <div :class="[answerShow ? 'close mistakes-answer' : 'open mistakes-answer']">
      <h3>参考答案</h3>
      <div class="answer">
        <div>
          {{mistakessession.content[0]}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    mistakesId: [String, Number]
  },
  data () {
    return {
      mistakessession: {
        id: 1,
        title: "js12321321321adsadas",
        content: ['爱上地阿斯达斯多巴适哦大赛打死哦大叔大婶爱上地阿斯达斯多巴适哦大赛打死哦大叔大婶爱上地阿斯达斯多巴适哦大赛打死哦大叔大婶爱上地阿斯达斯多巴适哦大赛打死哦大叔大婶爱上地阿斯达斯多巴适哦大赛打死哦大叔大婶','爱上地阿斯达斯多巴适哦大赛打死哦大叔大婶爱上地阿斯达斯多巴适哦大赛打死哦大叔大婶爱上地阿斯达斯多巴适哦大赛打死哦大叔大婶爱上地阿斯达斯多巴适哦大赛打死哦大叔大婶爱上地阿斯达斯多巴适哦大赛打死哦大叔大婶','爱上地阿斯达斯多巴适哦大赛打死哦大叔大婶爱上地阿斯达斯多巴适哦大赛打死哦大叔大婶爱上地阿斯达斯多巴适哦大赛打死哦大叔大婶爱上地阿斯达斯多巴适哦大赛打死哦大叔大婶爱上地阿斯达斯多巴适哦大赛打死哦大叔大婶','爱上地阿斯达斯多巴适哦大赛打死哦大叔大婶爱上地阿斯达斯多巴适哦大赛打死哦大叔大婶爱上地阿斯达斯多巴适哦大赛打死哦大叔大婶爱上地阿斯达斯多巴适哦大赛打死哦大叔大婶爱上地阿斯达斯多巴适哦大赛打死哦大叔大婶','爱上地阿斯达斯多巴适哦大赛打死哦大叔大婶爱上地阿斯达斯多巴适哦大赛打死哦大叔大婶爱上地阿斯达斯多巴适哦大赛打死哦大叔大婶爱上地阿斯达斯多巴适哦大赛打死哦大叔大婶爱上地阿斯达斯多巴适哦大赛打死哦大叔大婶','爱上地阿斯达斯多巴适哦大赛打死哦大叔大婶爱上地阿斯达斯多巴适哦大赛打死哦大叔大婶爱上地阿斯达斯多巴适哦大赛打死哦大叔大婶爱上地阿斯达斯多巴适哦大赛打死哦大叔大婶爱上地阿斯达斯多巴适哦大赛打死哦大叔大婶'],
      },
      answerShow: true
    }
  },
  watch: {
    mistakesId :{
      handler (newValue, oldValue) {
        if(newValue !== oldValue) {
          this.answerShow = true
        }
      } 
    }
  },
  computed: {
    answerTest () {
      return this.answerShow ? '查看答案' : '收起答案'
    }
  },
  methods: {
    gotest () {
      this.$router.push({
        path:'test',
        query:{
          id: this.mistakesId
        }
      })
    }
  }
};
</script>

<style lang="scss" scoped>
.mistakes-view {
  width: 100%;
  height: calc(100vh - 121px);
  display: flex;
  position: relative;
  .answer-go {
    position: absolute;
    top: 20px;
    right: 150px;
    cursor: pointer;
    &:hover {
      color: rgba(110, 232, 232, .5);
    }
  }
  .answer-show {
    position: absolute;
    top: 20px;
    right: 30px;
    cursor: pointer;
  }
  .mistakes-name {
    flex: 1;
    box-sizing: border-box;
    height: 100%;
    .title {
      font-size: 20px;
      font-weight: 600;
      padding: 20px 10px;
      border-bottom: 1px solid #b5b1b1;
      margin-bottom: 20px;
    }
    .all-content {
      height: calc(100% - 70px);
      width: 98%;
      overflow-x: hidden;
      overflow-y: auto;
      &::-webkit-scrollbar {
        width: 5px;
        height: 5px;
      }
      &::-webkit-scrollbar-track {
        border-radius: 10px;
        background-color: white;
      }
      &::-webkit-scrollbar-thumb {
        border-radius: 10px;
        background-color: rgba(#b5b1b1, .5);
        margin: 3px 0;
      }
      .content {
        padding:  0px 10px 20px;
        font-size: 16px;
        line-height: 30px;
        letter-spacing: 1px;
        width: 95%;
        margin: auto;
        overflow: hidden;
        white-space: normal;
        word-break: break-all;
        .content-text {
          width: 100%;
          display: inline-block;
          margin-top: 0;
          margin-bottom: 0.8em;
        }
      }
    }
    
  }
  .mistakes-answer {
    flex: 1;
    height: 100%;
    box-sizing: border-box;
    .answer {
      padding: 20px 0px;
      font-size: 14px;
      overflow-x: hidden;
      overflow-y: auto;
      &::-webkit-scrollbar {
        width: 5px;
        height: 5px;
      }
      &::-webkit-scrollbar-track {
        border-radius: 10px;
        background-color: white;
      }
      &::-webkit-scrollbar-thumb {
        border-radius: 10px;
        background-color: rgba(#b5b1b1, .5);
        margin: 3px 0;
      }
      div {
        height: 475px;
      }
    }
  }
  .open {
    max-width: 100%;
    padding: 68px 10px 0;
    overflow: hidden;
    transition: all 1s;
  }
  .close {
    max-width: 0px;
    padding: 68px 0px 0;
    overflow: hidden;
    transition: all 1s;
  }
}
</style>
