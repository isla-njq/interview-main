<template>
  <div class="main">
    <div class="my-box">
      <div class="box box-1" @click="click(1)">js</div>
      <div class="box box-2" @click="click(2)">vue</div>
      <div class="box box-3" @click="click(3)">html</div>
      <div class="box box-4" @click="click(4)">css</div>
      <div class="box box-5" @click="click(5)">java</div>
      <div class="box box-6" @click="click(6)">更多</div>
    </div>
  </div>
</template>

<script>
export default {
  name:'homepage',
  data () {
    return {
      context:'',
      arr: [],
      rains: [],
      starCount: 800,
      rainCount: 20
    }
  },
  mounted() {
    this.SquareRotate();
  },
  methods: {
    click (value) {
      console.log(value)
    },
    SquareRotate() {
      // 拖拽
      const myBox = document.querySelector(".my-box");
      let new_oldX = 30;
      let new_oldY = 330;
      document.addEventListener("mousedown", function (event) {
        // myBox.style.cssText += `animation-play-state: paused;`;
        myBox.style.cssText += `animation: none;`;
        // console.log(new_oldX, new_oldY)
        // console.log(event.clientX, event.clientY)
        myBox.style.cssText += `
                transform: rotateX(${-new_oldY}deg) rotateY(${new_oldX}deg) translateZ(200px);
            `;
        let oldX = event.clientX;
        let oldY = event.clientY;
        let newX = 0;
        let newY = 0;
        this.onmousemove = function (e) {
          newX = e.clientX;
          newY = e.clientY;
          myBox.style.cssText += `
                transform: rotateX(${-(
                  (new_oldY + newY - oldY) %
                  360
                )}deg) rotateY(${
            (new_oldX + newX - oldX) % 360
          }deg) translateZ(200px);
                animation: myrotate 5s ease-in-out infinite;
            `;
        };
        this.onmouseup = function () {
          this.onmousemove = null;
          if (newX) {
            new_oldX = (new_oldX + newX - oldX) % 360;
            new_oldY = (new_oldY + newY - oldY) % 360;
            // console.log(new_oldX, new_oldY)
          }
          // myBox.style.cssText += `animation: myrotate 20s ease-in-out infinite;`;
          // myBox.style.cssText += `animation-play-state: running;`;
        };
      });
    },
    //初始化画布及context
    init(){
        //获取canvas
        var stars = document.getElementById("stars");
        let windowWidth = window.innerWidth; //当前的窗口的高度
        stars.width = windowWidth;
        stars.height=window.innerHeight;
        //获取context
        this.context = stars.getContext("2d");
    }
    
  },
};
</script>

<style lang="scss" scoped>
.main {
  width: 100vw;
  height: 100vh;
  background-color: #000;
  /* display: flex;
  justify-content: center;
  align-items: center; */
  position: fixed;
  top: 0px;
  overflow: hidden;
}

.my-box {
  height: 200px;
  width: 200px;
  /* position: relative; */
  position: absolute;
  top: calc(50% - 100px);
  left: calc(50% - 100px);
  transform: rotateX(30deg) rotateY(30deg) translateZ(200px);
  transform-style: preserve-3d;
  transform-origin: 50% 50% 100px;
  /* animation: myrotate 5s ease-in-out infinite; */
  user-select: none;
  cursor: pointer;
}

.my-box::after {
  content: "";
  position: relative;
}

.box {
  width: 100%;
  height: 100%;
  position: absolute;
  font-size: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.box-1 {
  background-color: rgba(124, 77, 255);
  box-shadow: 0 0 100px 10px rgba(124, 77, 255, 0.5);
  left: 0;
  top: 0;
}

.box-2 {
  background-color: rgba(194, 24, 91);
  box-shadow: 0 0 100px 10px rgba(194, 24, 91, 0.5);
  left: -100%;
  top: 0;
  transform-origin: right;
  transform: rotateY(270deg);
}

.box-3 {
  background-color: rgba(224, 64, 251);
  box-shadow: 0 0 100px 10px rgba(224, 64, 251, 0.5);
  left: 0;
  top: 100%;
  transform-origin: top;
  transform: rotateX(270deg);
}

.box-4 {
  background-color: rgba(68, 138, 255);
  box-shadow: 0 0 100px 10px rgba(68, 138, 255, 0.5);
  left: 100%;
  top: 0;
  transform-origin: left;
  transform: rotateY(90deg);
}

.box-5 {
  background-color: rgba(76, 175, 80);
  box-shadow: 0 0 100px 10px rgba(76, 175, 80, 0.5);
  left: 0;
  top: -100%;
  transform-origin: bottom;
  transform: rotateX(90deg);
}

.box-6 {
  background-color: rgba(255, 235, 59);
  box-shadow: 0 0 100px 10px rgba(255, 235, 59, 0.5);
  left: 0;
  top: 0;
  transform: rotateY(180deg) translateZ(200px);
}

@keyframes myrotate {
  0% {
    transform: rotateX(0) rotateY(0) rotateZ(0);
  }

  100% {
    transform: rotateX(360deg) rotateY(360deg) rotateZ(360deg);
  }
}
</style>
