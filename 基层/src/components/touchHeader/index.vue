<template>
  <div class="touch-header">
    <div @click="home" class="big-button">
      <img class="icon" src="../../assets/icon/icon-home.png" alt="" srcset="">
      <i>首页</i>
    </div>
    <div @click="back" class="big-button">
      <img class="icon" src="../../assets/icon/icon-back.png" alt="" srcset="">
      <i>返回上一级</i>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    back() {
      this.$router.go(-1);
    },
    home() {
      this.$router.push('/');
    }
  }
};
</script>

<style lang="scss" scoped>
@import '../../components/style/index.scss';
.touch-header {
  height: v(154px);
  width: v(1024px);
  flex-shrink: 0;
  color: $white;
  font-size: v(18px);
  display: flex;
  justify-content: space-between;
}
.big-button {
  cursor: pointer;
  text-align: center;
  line-height: v(36px);
  .icon {
    display: block;
    width: 26px;
    margin: 0 auto;
    margin-top: v(50px);
  }
  min-width: v(90px);
}
</style>
