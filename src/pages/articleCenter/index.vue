<template>
  <layout>
    <div class="main">
      <h1 class="h1">党的十九大</h1>
      <div class="art" v-for="e in art">{{e.title}}</div>
    </div>
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
          .get(`http://ekj.cqchunze.com/index.php?m=content&c=index&a=json&catid=${this.$route.params.id}`)
          .then(res => {
            this.art = res.data.data;
          });
      }
    }
  };
</script>
<style lang="scss">
  @import "../../components/style/index.scss";
  .main {
    padding: 0 v(55px);
    box-sizing: border-box;

    .h1 {
      font-size: 30px;
      text-align: center;
      margin: 0 0 39px 0;
    }
    .art {
      margin:v(12px) 0;

      p {
        font-size: v(20px);
        line-height: v(36px);
      }
      img {
        max-width: v(640px);
        margin-bottom: v(39px);
      }
    }
  }

</style>
