<template>
  <div class="test">
    <div class="mistakes">
      <div class="mistakes-list">
        <mistakes-list :mistakesList="mistakesList" @click="onclick"></mistakes-list>
      </div>
      <div class="mistakes-view">
        <mistakes-view :mistakesId="mistakesId"></mistakes-view>
      </div>
    </div>
    
  </div>
</template>

<script>
import mistakesList from "../../components/mistakes/mistakesList.vue"
import mistakesView from "../../components/mistakes/mistakesView.vue"
export default {
  name: 'mistakes',
  components: {
    mistakesList,
    mistakesView,
  },
  data() {
    return {
      mistakesList: [
        {
          id: 1,
          title: "啊实打实大撒大声地啊实打实",
          content: "啊实打实大撒大声地啊实打实啊实打实大撒大声地啊实打实",
        },
        {
          id: 2,
          title: "啊实打实大撒大声地啊实打实",
          content: "啊实打实大撒大声地啊实打实啊实打实大撒大声地啊实打实",
        },
        {
          id: 3,
          title: "啊实打实大撒大声地啊实打实",
          content: "啊实打实大撒大声地啊实打实啊实打实大撒大声地啊实打实",
        },
        {
          id: 4,
          title: "啊实打实大撒大声地啊实打实",
          content: "啊实打实大撒大声地啊实打实啊实打实大撒大声地啊实打实",
        },
        {
          id: 5,
          title: "啊实打实大撒大声地啊实打实",
          content: "啊实打实大撒大声地啊实打实啊实打实大撒大声地啊实打实",
        },
        {
          id: 6,
          title: "啊实打实大撒大声地啊实打实",
          content: "啊实打实大撒大声地啊实打实啊实打实大撒大声地啊实打实",
        },
        {
          id: 7,
          title: "啊实打实大撒大声地啊实打实",
          content: "啊实打实大撒大声地啊实打实啊实打实大撒大声地啊实打实",
        },
        {
          id: 8,
          title: "啊实打实大撒大声地啊实打实",
          content: "啊实打实大撒大声地啊实打实啊实打实大撒大声地啊实打实",
        },
        {
          id: 9,
          title: "啊实打实大撒大声地啊实打实",
          content: "啊实打实大撒大声地啊实打实啊实打实大撒大声地啊实打实",
        },
        {
          id: 10,
          title: "啊实打实大撒大声地啊实打实",
          content: "啊实打实大撒大声地啊实打实啊实打实大撒大声地啊实打实",
        },
        {
          id: 11,
          title: "啊实打实大撒大声地啊实打实啊实打实大撒大声地啊实打实啊实打实大撒大声地啊实打实啊实打实大撒大声地啊实打实",
          content: "啊实打实大撒大声地啊实打实啊实打实大撒大声地啊实打实",
        },
        {
          id: 12,
          title: "啊实打实大撒大声地啊实打实",
          content: "啊实打实大撒大声地啊实打实啊实打实大撒大声地啊实打实",
        },
        {
          id: 14,
          title: "啊实打实大撒大声地啊实打实",
          content: "啊实打实大撒大声地啊实打实啊实打实大撒大声地啊实打实",
        },
        {
          id: 15,
          title: "啊实打实大撒大声地啊实打实",
          content: "啊实打实大撒大声地啊实打实啊实打实大撒大声地啊实打实",
        },
        {
          id: 16,
          title: "啊实打实大撒大声地啊实打实",
          content: "啊实打实大撒大声地啊实打实啊实打实大撒大声地啊实打实",
        },
        {
          id: 17,
          title: "啊实打实大撒大声地啊实打实",
          content: "啊实打实大撒大声地啊实打实啊实打实大撒大声地啊实打实",
        },
        {
          id: 18,
          title: "啊实打实大撒大声地啊实打实",
          content: "啊实打实大撒大声地啊实打实啊实打实大撒大声地啊实打实",
        }
      ],
      mistakesId:''
    };
  },
  watch: {
    list (newValue) {
      console.log(newValue)
    }
  },
  methods: {
    onclick (val) {
      this.mistakesId = val.id
      console.log(val)
    }
  }
};
</script>

<style lang="scss" scoped>
.test {
  display: flex;
  .nav {
    max-width: 200px;
    height: calc(100vh - 61px);
  }
  .mistakes {
    padding-top: 20px;
    padding-left: 30px;
    margin: 0 auto;
    flex: 1;
    display: flex;
    .mistakes-list {
    }
    .mistakes-view {
      flex: 1;
    }
  }
}

</style>
