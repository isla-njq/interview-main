<template>
  <div class="question">
    <div class="question-name">
      <div class="title">123.&nbsp;&nbsp;&nbsp;{{questionsession.title}}</div>
      <div class="all-content">
        <p class="content" v-for="(i, index) in questionsession.content" :key="index">
          {{i}}
        </p>
      </div>
    </div>
    <div class="question-body">
      <div class="text">
        <el-input
          :class="[isAnswer ? 'textAnswer': '']"
          type="textarea"
          placeholder="请输入答案"
          resize="none"
          :readonly="isAnswer"
          v-model="text">
        </el-input>
        <div v-if="!isAnswer" style="margin: 20px 0;">
          <el-button type="primary" @click="answer" round>查看答案</el-button>
        </div>
        <div v-else style="margin: 20px 0;">
          <h3  style="display:inline-block; vertical-align: middle;">参考答案：</h3>         
          <div style="display:inline-block;" v-if="aftertoEdit">
            <span style="display: inline-block; margin: 0 20px; vertical-align: middle;">你的答案正确吗:</span>
            <el-button @click="toEdit(0)" type="success" plain>正确</el-button>
            <el-button @click="toEdit(1)" type="danger" plain>错误</el-button>
          </div>
        </div>
      </div>
      <div class="end">
        <div v-if="theAnswer" :class="theAnswer ? 'answer' : ''">
          {{rightAnswer}}
        </div>
      </div>
    </div>
    <div>
      <el-dialog
        title="提示"
        :visible.sync="istoEdit"
        append-to-body
        width="30%"
        >
        <span v-html="istoEditText"></span>
        <span slot="footer" class="dialog-footer">
          <el-button @click="submit(isFlag, 1)">取 消</el-button>
          <el-button type="primary" @click="submit(isFlag)">确 定</el-button>
        </span>
      </el-dialog>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    questionsession: {
      value: Object
    }
  },
  data () {
    return {
      text: '',
      rightAnswer: '',
      theAnswer: false,
      istoEdit: false,
      isFlag: 0,
      istoEditText: '',
      aftertoEdit: true
    }
  },
  computed: {
    isAnswer() {
      return this.theAnswer
    }
  },
  methods: {
    answer () {
      this.theAnswer = !this.theAnswer
      this.rightAnswer = 'asdddddddddddddd'
    },
    selectQuestion () {
      return true
    },
    toEdit (el) {
      if(this.selectQuestion()) {
          this.istoEdit = true
          this.istoEditText = el? '这道题在你的错题集中，是否需要移出错题集' : '这道题不在你的错题集中，是否需要加入错题集'
          this.isFlag = el
          return
      }
      this.submit(el)
    },
    submit (el, row) {
      if(this.istoEdit) this.istoEdit = false
      console.log(el, row)
      this.$message({
        message: row ? '回答成功' : el ? '移出成功' : '加入成功',
        type: 'success'
      })
      this.aftertoEdit = false
    }
  }
};
</script>

<style lang="scss" scoped>
.question {
  width: 100%;
  height: calc(100vh - 121px);
  display: flex;
  .question-name {
    flex: 1;
    box-sizing: border-box;
    height: 100%;
    margin: 0 40px;
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
  .question-body {
    flex: 1;
    box-sizing: border-box;
    height: calc(100vh - 121px);
    margin: 10px 40px;
    display: flex;
    flex-direction: column;
    .text {
      flex: 1;
      margin: 20px 0;
      .textAnswer {
        border-radius: 5px;
        border: 1px solid #DCDFE6;
        ::v-deep .el-textarea__inner {
          border: 0px !important;
        }
      }
      ::v-deep {
        .el-textarea {
          height: 80%;
          font-size: 16px;
          .el-textarea__inner {
            min-height: 100% !important;
          }
        }
        
      }
    }
    .end {
      flex: 1;
      max-height: 50%;
      .answer {
        height: 95%;
        box-sizing: border-box;
        overflow-y: auto;
        animation: Bubble 3s;
        line-height: 30px;
        letter-spacing: 0.5px;
        font-size: 14px;
        font-weight: 500;
      }
    }
    
  }
  @keyframes Bubble {
    0% {
      color: rgba($color: #000000, $alpha: 0);
      transform: translateY(100px);
    }
    100% {
      color: rgba($color: #000000, $alpha: 1);
      transform: translateY(0px);
    }
  }
}
</style>
