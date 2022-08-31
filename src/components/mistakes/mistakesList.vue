<template>
  <div class="main">
    <div :class="isstyleClick !== item.id ? 'mistakes themistakes' :'mistakesClick themistakes'" @click="onclick(item)" v-for="(item, index) in mistakesList" :key="index">
      <span>{{index + 1}}、{{item.title}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'mistakesList',
  props: {
    mistakesList: {
      value: Object
    },
    styleClick: {
      value: String
    }
  },
  mounted () {
    if (this.isstyleClick === undefined) {
      this.isstyleClick = this.mistakesList[0].id
    }
  },
  data () {
    return {
      isstyleClick: this.styleClick
    }
  },
  methods: {
    onclick (val) {
      this.isstyleClick = val.id
      this.$emit('click', val)
    }
  }
}
</script>

<style lang="scss" scoped>
.main {
  background-color: #aaaaaa;
  max-width: 400px;
  max-height: 600px;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 10px 0;
  border-radius: 5px;
  box-sizing: border-box;
  overflow-y: auto;
  overflow-x: hidden;
  cursor: pointer;
  &::-webkit-scrollbar {
    width: 8px;
    height: 5px;
    padding: 10px 0;
  }
  &::-webkit-scrollbar-track {
    border-radius: 5px;
    background-color: #aaaaaa;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: rgba(#000000, .5);
  }
  .themistakes {
    width: 100%;
    height: 40px;
    align-items: center;
    box-sizing: border-box;
    line-height: 20px;
    font-size: 14px;
    font-weight: 500;
    padding: 10px 20px;
    border-radius: 2px;
    &:hover {
      background-color: #d3d3d3;
    }
    span {
      display: block;
      width: 100%;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
}
.mistakesClick {
  background-color: rgba($color: #333333, $alpha: 0.3);
}
</style>