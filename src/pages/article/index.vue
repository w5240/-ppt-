<template>
    <layout>
        <div class="main">
            <h1 class="h1">{{art.title}}</h1>
            <div class="art" v-html="art.content"></div>
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
              console.log(res);
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
    font-size: v(18px);
    height:v(480px);
    overflow: auto;
    p {
      font-size: v(18px);
      line-height: v(36px);
    }
    img {
      max-width: v(640px);
      margin-bottom: v(39px);
    }
  }
}

</style>
