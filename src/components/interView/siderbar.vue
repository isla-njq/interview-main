<template>
  <div>
    <sider-bar-block>
      <div class="billboard">
        <div class="title">排行榜</div>
        <div class="test" v-for="(i, index) in list" :key="index">
          {{index + 1}}.  &nbsp;{{i.name}}
        </div>
      </div>
    </sider-bar-block>
  </div>
</template>

<script>
import siderBarBlock from './siderbarblock.vue'
export default {
  name: '',
  components: {
    siderBarBlock
  },
  data () {
    return {
      list: [
        {
          name: 'Q吻青蛙大大伟大'
        },{
          name: '驱蚊器大群大群我的千万'
        },{
          name: '驱蚊器大群大群我的千万'
        },{
          name: '驱蚊器大群大群我的千万'
        },{
          name: '驱蚊器大群大群我的千万'
        },{
          name: '驱蚊器大群大群我的千万'
        },{
          name: '驱蚊器大群大群我的千万'
        },{
          name: '驱蚊器大群大群我的千万'
        },{
          name: '驱蚊器大群大群我的千万'
        },{
          name: '驱蚊器大群大群我的千万'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.billboard {
  .title {
    text-align: center;
    height: 20px;
    line-height: 20px;
    font-size: 20px;
    font-weight: 500px;
    margin: 10px 0;
  }
  .test {
    line-height: 20px;
    padding: 5px 0;
    cursor: pointer;
    &:hover {
      color: red;
    }
  }
}
</style>