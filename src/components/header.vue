<template>
  <div class="header">
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        router
      >
        <div class="interview_logo"><img src="../assets/img/01217514880511ebb6edd017c2d2eca2.jpg" alt=""></div>
        <el-menu-item index="personal">个人中心</el-menu-item>
        <el-menu-item index="mistakes">错题本</el-menu-item>
        <el-menu-item index="questionbank">题库</el-menu-item>
        <el-menu-item index="interView">首页</el-menu-item>
        <el-menu-item index="homePage">预览页</el-menu-item>
      </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: window.location.hash.split('/')[window.location.hash.split.length]
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2000;
  
}
.interview_logo {
  max-height: 50px;
  margin: 5px 20px 0px;
  display: inline-block;
  img {
    max-height: 50px;
  }
}
::v-deep {
  .el-menu-demo{
    background-color: rgba($color: #fff, $alpha: 0.95);
  }
  .el-menu-item {
    float: right;
  }
} 
</style>