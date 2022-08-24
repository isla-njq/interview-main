<template>
  <div class="register">
    <div class="register_header">注册</div>
      <el-form ref="form" :rules="rules" :model="form" label-width="150px">
        <el-form-item label="账号：" prop="name">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="密码：" prop="password">
          <el-input v-model="form.password" type="password"></el-input>
        </el-form-item>
        <el-form-item label="请再次输入密码：" prop="againPassword">
          <el-input v-model="form.againPassword" type="password"></el-input>
        </el-form-item>
        <el-row class="button">
          <el-button type="primary" @click="onregister">注册</el-button>
        </el-row>
      </el-form>
  </div>
</template>

<script>
// import {registerURL} from '../../assets/js/api'
export default {
  data() {
    return {
      form: {
        name: '',
        password: '',
        againPassword: ''
      },
      rules:{
         name: [
            { min:2, max:8, message: '长度在 2 到 8 个字符', trigger: 'blur' },
            { required: true, message: '请输入账号', trigger: 'blur' },
          ],
          password: [
            { min:6, max:12, message: '长度在 6 到 12 个字符',trigger: 'blur' },
            { required: true, message: '请输入密码', trigger: 'blur' }
          ],
          againPassword: [
            { required: true, message: '请确认密码', trigger: 'blur' }
          ]
      }
    };
  },
  methods:{
    onregister () {
      this.$refs.form.validate( res => {
        console.log(res)
        if (res) {
          console.log(`账号：${this.form.name}密码：${this.form.password}`)
        }
      })
      // this.$axios.post(registerURL).then(res => {
      //   console.log(res)
      // })
    }
  }
};
</script>

<style lang="scss" scoped>
.register {
  position: fixed;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  margin: auto;
  width: 680px;
  height: 360px;
  box-sizing: border-box;
  padding: 20px 0;
  border-radius: 10px;
  background-color: rgba($color: #8e8e8e, $alpha: 0.2);
  box-shadow: 0px 0px 20px rgba($color: #8e8e8e, $alpha: 0.7);
  .register_header {
    width: 680px;
    font-size: 20px;
    font-weight: 500;
    line-height: 32px;
    padding: 20px 0;
    text-align: center;
  }
  ::v-deep {
    .el-form {
      width: 450px;
      margin-left: 55px;
      padding: 5px;
      .button {
        margin-top: 50px;
        text-align: center;
        .el-button {
          margin-left: 115px;
        }
      }
    }
  }
}
</style>