<template>
  <div class="personal">
    <article class="header">
      <section>
        <div class="personal-img"></div>
        <div class="personal-nick">昵称</div>
      </section>
    </article>
    <article class="body">
      <section>
        <div>
          <span>做题记录</span>
        </div>
      </section>
      <section>
        <div>错题本</div>
      </section>
    </article>
  </div>
</template>

<style lang="scss" scoped>
.personal {
  width: 100vw;
  height: calc(100vh - 61px);
}
.header {
  width: 100%;
  height: 150px;
  section {
    max-width: 800px;
    margin: auto;
    display: flex;
    align-items: center;
    .personal-img {
      width: 120px;
      height: 120px;
      background-color: #aaaaaa;
      border: 1px solid #aaaaaa;
      border-radius: 50%;
    }
    .personal-nick {
      flex: 1;
      padding-left: 80px;
      font-size: 20px;
    } 
  }
}
.body {
  width: 100%;
  section {
    max-width: 800px;
    margin: auto;
    display: flex;
    flex-direction: column;
  }
}
</style>