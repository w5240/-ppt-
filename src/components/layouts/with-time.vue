<template>
  <div class="layout">
    <touch-header></touch-header>
    <div class="layout-main-box">
        <slot></slot>
    </div>
  </div>
</template>
<script>
import touchHeader from '../touchHeader/index';
export default {
  components: {
    touchHeader
  }
};
</script>
<style lang="scss" scoped>
@import '../style/index.scss';
.layout {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
.layout-main-box {
  width: v(1024px);
  height: v(614px);
}

@media screen and (orientation: portrait) {
  .flex-box {
    width: v(1024px);
    height: v(768px);
  }
}
</style>
