<template>
  <div class="question">
    <div class="title">{{questionTitle}}</div>
    <div class="content">{{questionContent}}</div>
    <div class="text">
      <el-input
        :class="[isAnswer ? 'textAnswer': '']"
        type="textarea"
        placeholder="请输入答案"
        resize="none"
        :readonly="isAnswer"
        v-model="text">
      </el-input>
    </div>
    <div v-if="!isAnswer" class="button">
      <el-button type="primary" @click="answer" round>查看答案</el-button>
    </div>
    <div :class="theAnswer ? 'answer' : ''" v-if="theAnswer">
      <div>
        答案：{{rightAnswer}}
      </div>
      <div v-if="aftertoEdit">
        你的答案正确吗？
        <el-button @click="toEdit(0)" type="success" plain>正确</el-button>
        <el-button @click="toEdit(1)" type="danger" plain>错误</el-button>
      </div>
    </div>
    
    <div>
      <el-dialog
        title="提示"
        :visible.sync="istoEdit"
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
    questionId: {
      value: Number
    },
    questionTitle: {
      value: String,
      default: '标题'
    },
    questionContent: {
      value: String,
      default: '内容'
    },
    list: {
      value: Array
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
      this.rightAnswer = '你很棒你很棒你很棒你很棒你很棒你很棒你很棒你很棒你很棒你很棒你很棒你很棒你很棒你很棒你很棒你很棒你很棒你很棒你很棒你很棒你很棒你很棒你很棒你很棒你很棒你很棒你很棒你很棒你很棒你很棒你很棒你很棒你很棒你很棒你很棒你很棒你很棒你很棒你很棒你很棒你很棒你很棒你很棒你很棒你很棒'
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
      this.list.push(this.questionId)
      if (row) {
        this.$message({
          message:'回答成功',
          type: 'success'
        })
        this.aftertoEdit = false
        return
      }
      
      if (el) {
        this.$message({
          message:'移出成功',
          type: 'success'
        })
      } else {
        this.$message({
          message:'加入成功',
          type: 'success'
        })
      }
      this.aftertoEdit = false
    }
  }
};
</script>

<style lang="scss" scoped>
.question {
  display: flex;
  flex-direction: column;
  max-width: 700px;
  box-sizing: border-box;
  padding: 0 40px;
  div {
    flex: 1;
  }
  .title {
    font-size: 32px;
    font-weight: 600;
    text-align: center;
    padding: 20px 0px;
  }
  .content {
    font-size: 20px;
    line-height: 40px;
    border-bottom: 1px solid #888888;
  }
  .text {
    margin: 20px 0;
    ::v-deep {
      .el-textarea__inner {
        min-height: 150px !important;
      }
    }
  }
  .textAnswer {
    ::v-deep .el-textarea__inner {
      border: 0px !important;
    }
  }
  .answer {
    animation: Bubble 3s;
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
