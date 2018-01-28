<template>
<div class="innovative-party">
  <layout>
    <div class="content-box">
      <h1>创新型党组织</h1>
      <ul>
        <li>党组织名字1</li>
        <li>党组织名字2</li>
        <li>党组织名字3</li>
        <li>党组织名字4</li>
        <li>党组织名字5</li>
        <li>党组织名字6</li>
      </ul>
    </div>
  </layout>
</div>
</template>
<script>
import layout from "@/components/layouts/with-touch-header";
export default {
  components: {
    layout
  }
};
</script>

<style lang="scss" scoped>
@import "../../components/style/index.scss";
.innovative-party {
  background-image: url("../../assets/images/bg-white.jpg");
  background-size: contain;
}
.content-box {
  h1 {
    font-size: v(30px);
    color: #fe5a03;
    background-color: #fee100;
    line-height: 60px;
    text-align: center;
  }
  ul {
    background-color: #fff;
    display: flex;
    flex-wrap: wrap;
    padding-bottom: v(50px);
    li {
      margin-top: v(40px);
      border: 1px solid #ebebeb;
      border-radius: v(6px);
      margin-left: v(38px);
      flex-shrink: 0;
      width: v(298px);
      height: v(60px);
      text-align: center;
      line-height: v(60px);
    }
  }
  border-radius: v(6px);
  box-shadow: 0px 8px 10px rgba(80, 80, 80, 0.4);
  width: v(722px);
  margin: 0 auto;
  overflow: hidden;
}
</style>
