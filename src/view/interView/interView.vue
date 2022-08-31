<template>
  <div class="inter-view">
    <el-row :gutter="20">
      <el-col :span="16">
        <inter-main></inter-main>
      </el-col>
      <el-col :span="7">
        <sider-bar></sider-bar>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import InterMain from '../../components/interView/intermain.vue'
import SiderBar from '@/components/interView/siderbar'
export default {
  components: {
    InterMain,
    SiderBar
  }
}
</script>

<style lang="scss" scoped>
.inter-view {
  width: 90%;
  margin: auto;
  min-height: 90vh;
}
</style>