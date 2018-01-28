<template>
  <layout>
    <div class="main">
      <h1 class="h1">北医社区特色</h1>
      <div class="art">
        <img src="./img/tu.png" alt="">
        <p>    北医社区地处花园路塔院，三院东侧，花园路商场对面，附近有331路、小12路、810公交线。北医社区占地面积：96300平方米，北医社区系北大医学部、北大第三医院、北大第六医院的宿舍区，社区居民绝大部分为北大医学部及其附属医院的职工和家属。社区资源与北大医学部资源共享，因此社区的通讯、医疗、餐饮、文体娱乐等服务设施齐备，社区环境干净、整洁，居民物质生活十分便利、业余文化生活丰富多彩。</p>
      </div>
    </div>
    <div class="bg"></div>
  </layout>
</template>
<script>
  import axios from "axios";
  import layout from "../../components/layouts/with-touch-header";

  export default {
    components: {
      layout
    },
    data() {
      let art = {
        title: "加载中..."
      };
      return {
        art
      };
    },
    mounted() {
      this.gethtml()
    },
    methods:{
      gethtml(){
        axios
//          .get(`http://ekj.cqchunze.com/index.php?m=content&c=index&a=json&catid=${this.$route.params.id}`)
          .get(`http://ekj.cqchunze.com/index.php?m=content&c=index&a=content&catid=1&id=1`)
          .then(res => {
            this.art = res.data.data;
          });
      }
    }
  };
</script>
<style lang="scss">
  @import "../../components/style/index.scss";

  .bg{
    position: fixed;
    z-index: -1;
    top:0;
    left:0;
    height:100%;
    width:100%;
    background-image: url('../../assets/images/bg-white.jpg');
    background-size: 100% 100%;
  }
  .main {
    padding: 0 v(55px);
    box-sizing: border-box;

    .h1 {
      font-size: 30px;
      text-align: center;
      margin: 0 0 39px 0;
    }
    .art {
      p {
        font-size: v(18px);
        line-height: v(36px);
      }
      img {
        display: block;
        max-width: v(640px);
        margin:0 auto;
        margin-bottom: v(39px);

      }
    }
  }

</style>
