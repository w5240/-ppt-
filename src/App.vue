<template>
  <div id="app">
  <transition :name="transitionName">
    <router-view class="child-view"></router-view>
</transition>
  </div>
</template>

<script>
// 禁止拖拽,以便在触摸屏幕上获得更好的表现,如果需要请取消注释
// document.ondragstart = function(event) {
// return false;
// };

export default {
  name: "app",
  data() {
    return {
      transitionName: "slide-right"
    };
  },
  watch: {
    $route(to, from) {
      if (to.path == "/") {
        this.transitionName = "slide-right";
      } else {
        this.transitionName = "slide-left";
      }
    }
  }
};
</script>
<style>
#app {
  user-select: none;
  -webkit-user-drag: none;
  -webkit-text-size-adjust: none;
  overflow: hidden;
}
.child-view {
  /*position: absolute;*/
  /*left: 0;*/
  /*top: 0;*/
  margin:0 auto;
  width: 100%;
  height: 100%;
  transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
}
.slide-left-enter,
.slide-right-leave-active {
  opacity: 0;
  -webkit-transform: scale(0.5);
  transform: scale(0.5);
}
.slide-left-leave-active,
.slide-right-enter {
  opacity: 0;
  -webkit-transform: scale(2);
  transform: scale(2);
}
</style>
