<template>
  <div class="login_main">
    <div class="loginview">
      <div class="register_flag">
        <vue-typed-js
          ref="typed"
          :strings="registerFlag"
          :loop="false"
          :typeSpeed="150"
          :showCursor="true"
          @onStringTyped="onStringTyped"
        >
          <span class="typing"></span>
        </vue-typed-js>
        </div>
      <div class="register_text">如果你没有账号的话，请点击下方按钮</div>
      <button class="register_button">
        register - 注册
      </button>
    </div>
    <div class="login">
      <div class="login_header">LOGIN - 登录</div>
      <el-form ref="form" :rules="rules" :model="form" label-width="80px">
        <el-form-item label="账号：" prop="name">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="密码：" prop="password">
          <el-input v-model="form.password" type="password"></el-input>
        </el-form-item>
        <el-row class="button">
          <span class="forgot">Forgot password?</span>
          <el-button type="danger" @click="onLogin">LOG IN - 登录</el-button>
        </el-row>
      </el-form>
    </div>
  </div>
</template>

<script>
// import {loginURL} from '../../assets/js/api'
export default {
  data() {
    return {
      form: {
        name: '',
        password: '',
      },
      rules:{
         name: [
            { required: true, message: '请输入账号：', trigger: 'blur' },
          ],
          password: [
            { required: true, message: '请输入密码：', trigger: 'blur' }
          ],
      },
      registerFlag: ['连我老爸都没打过我！'],
    };
  },
  methods:{
    onStringTyped(){
      let typed = document.getElementsByClassName('typed-cursor')
      setTimeout(() =>{
        typed[0].style.cssText += `display:none;`
      },1000)
      
    },
    onLogin () {
      this.$refs.form.validate( res => {
        console.log(res)
        if (res) {
          console.log(`账号：${this.form.name}密码：${this.form.password}`)
        }
      })
      // this.$axios.post(loginURL).then(res => {
      //   console.log(res)
      // })
    }
  }
};
</script>

<style lang="scss" scoped>
.login_main {
  background: url("../../assets/img/01217514880511ebb6edd017c2d2eca2.jpg") no-repeat;
  background-size: cover;
  background-position: center center;
  width: 100vw;
  height: 100vh;
}
.loginview {
  position: fixed;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  margin: auto;
  width: 1100px;
  height: 300px;
  background-color: rgba(34, 34, 34, 0.85);
  color: #fff;
  padding: 75px 45px;
  font-weight: 300;
  box-sizing: border-box;
  .register_flag {
    margin-bottom: 15px;
    font-size: 1.66rem;
    line-height: 1em;
  }
  .register_text {
    font-size: 0.83rem;
    line-height: 1.4em;
  }
  .register_button {
    margin-top: 30px;
    border: 1px solid #ccc;
    color: #fff;
    border-radius: 3px;
    padding: 10px 30px;
    text-transform: uppercase;
    line-height: 1em;
    letter-spacing: 0.2rem;
    transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
    background-color: transparent;
    outline: 0;
    cursor: pointer;
    &:hover {
      color: rgba(34, 34, 34, 0.85);
      background-color: #ccc;
    }
  }
}
.login {
  position: fixed;
  top: 0px;
  right: -500px;
  bottom: 0px;
  left: 0px;
  margin: auto;
  width: 480px;
  height: 450px;
  box-sizing: border-box;
  padding: 80px 0;
  border-radius: 10px;
  background-color: rgba(#fff, 0.9);
  box-shadow: 2px 0 15px rgb(0 0 0 / 25%);
  .login_header {
    margin-bottom: 75px;
    font-size: 1.5rem;
    font-weight: 500;
    line-height: 1em;
    color: #e8716d;
    letter-spacing: 0.1rem;
    margin-left: 80px;
  }
  ::v-deep {
    .el-form {
      width: 350px;
      margin-left: 55px;
      padding: 5px;
      .button {
        .forgot {
            font-family: "Montserrat", sans-serif;
            letter-spacing: 0.1rem;
            color: #ccc;
            text-decoration: underline;
            transition: color 0.2s ease-in-out;
            text-align: left;
            margin-right: 30px;
            cursor: pointer;
            &:hover {
              color: #b3b3b3;
            }
        }
        margin-top: 50px;
        text-align: right;
      }
    }
  }
}
</style>
