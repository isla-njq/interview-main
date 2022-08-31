<template>
  <div class="test-nav">
    <div class="nav-list">
      <el-menu
       default-active="1-4-1"
       class="el-menu-vertical-demo"
       @open="handleOpen"
       @close="handleClose"
       :collapse="isCollapse"
      > 
      <div class="nav" style="" @click = "isCollapse = !isCollapse">
       <el-submenu index="0" class="nav-icon">
        <template v-if="!isCollapse" slot="title">
            <i class="el-icon-s-fold"></i>
            <span slot="title">收起菜单</span>
        </template>
        <template v-if="isCollapse" slot="title">
          <i class="el-icon-s-unfold"></i>
        </template>
       </el-submenu>
      </div>
       <el-submenu index="1">
         <template slot="title">
           <i class="el-icon-location"></i>
           <span slot="title">导航一</span>
         </template>
         <el-menu-item index="1-1">选项1</el-menu-item>
         <el-menu-item index="1-2">选项1</el-menu-item>
         <el-menu-item index="1-3">选项1</el-menu-item>
         <el-menu-item index="1-4">选项1</el-menu-item>
       </el-submenu>
       <el-submenu index="2">
         <template slot="title">
           <i class="el-icon-location"></i>
           <span slot="title">导航一</span>
         </template>
         <el-menu-item index="2-1">选项1</el-menu-item>
         <el-menu-item index="2-2">选项1</el-menu-item>
         <el-menu-item index="2-3">选项1</el-menu-item>
         <el-menu-item index="2-4">选项1</el-menu-item>
       </el-submenu>
       <el-submenu index="3">
         <template slot="title">
           <i class="el-icon-location"></i>
           <span slot="title">导航一</span>
         </template>
         <el-menu-item index="3-1">选项1</el-menu-item>
         <el-menu-item index="3-2">选项1</el-menu-item>
         <el-menu-item index="3-3">选项1</el-menu-item>
         <el-menu-item index="3-4">选项1</el-menu-item>
       </el-submenu>
      </el-menu>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        isCollapse: true
      };
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style lang="scss" scoped>
::v-deep {
  .el-menu-vertical-demo {
    border: 0;
  }
}
.test-nav {
  display: inline-block;
  min-height: 100%;
  box-sizing: border-box;
  border-right: solid 1px #e6e6e6;
  height: 100%;
  overflow-x: none;
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
  }
  .nav {
    cursor:pointer;
    &:hover {
      background-color: #ecf5ff;
    }
    .nav-icon {
      pointer-events:none;
      ::v-deep .el-submenu__icon-arrow {
        display: none;
      }
    }
  }
  
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 199px;
    min-height: 400px;
  }
}

</style>