<template>
  <div class="header">
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
      >
        <div class="interview_logo"><img src="../assets/img/01217514880511ebb6edd017c2d2eca2.jpg" alt=""></div>
        <el-menu-item index="1">个人中心</el-menu-item>
        <el-menu-item index="2">错题本</el-menu-item>
        <el-menu-item index="3">题库</el-menu-item>
        <el-menu-item index="4">首页</el-menu-item>
      </el-menu>
  </div>
</template>

<style lang="scss" scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9999;
  
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