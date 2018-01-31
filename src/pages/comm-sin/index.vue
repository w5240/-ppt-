<template>
  <layout>
    <div class="main">
      <h1 class="h1">{{art.title}}</h1>
      <div class="art">
        <!--<img src="./img/tu.png" alt="">-->
        <p v-html="art.content"></p>
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
      this.gethtml();
    },
    methods:{
      gethtml(){
        axios
          .get(`http://ekj.cqchunze.com/index.php?m=content&c=index&a=content&catid=${this.$route.params.id}&id=${this.$route.query.id}`)
//          .get(`http://ekj.cqchunze.com/index.php?m=content&c=index&a=content&catid=4&id=${this.$route.query.id}`)
//          .get(`http://ekj.cqchunze.com/index.php?m=content&c=index&a=content&catid=1&id=1`)
          .then(res => {
              console.log(res.data.data);
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
    background-image: url('./img/3.jpg');
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
      font-size: v(18px);
      height:v(490px);
      overflow: auto;
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
