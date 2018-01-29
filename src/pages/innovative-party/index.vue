<template>
<div class="innovative-party">
  <layout>
    <div class="content-box">
      <h1>{{title}}</h1>
      <ul>
        <li v-for="e in list">{{e.title}}</li>
      </ul>
    </div>
  </layout>
</div>
</template>
<script>
import layout from "@/components/layouts/with-touch-header";
import axios from 'axios';

export default {
  components: {
    layout
  },
  data(){
      return {
        list:[],
        title:'',
      }
  },
  mounted(){
    this.getlist();
    this.title = this.$route.query.title;

  },
  methods:{
    getlist(){
      axios
        .get(`http://ekj.cqchunze.com/index.php?m=content&c=index&a=json&catid=${this.$route.query.id}`)
//        .get(`http://ekj.cqchunze.com/index.php?m=content&c=index&a=json&catid=17}`)
        .then(res => {
//            console.log(res.data)
          this.list = res.data.data;
        })
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../components/style/index.scss";
::-webkit-scrollbar-track-piece {
  background-color: translate;
  border-radius:0;
}

::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

::-webkit-scrollbar-thumb {
  height: 50px;
  background-color: #999;
  outline: 2px solid #fff;
  outline-offset: -2px;
  border: 2px solid #fff;
  border-radius:4px;
}

::-webkit-scrollbar-thumb:hover {
  height: 50px;
  background-color: #9f9f9f;
  border-radius:4px;
}
.innovative-party {
  background-image: url("./img/1.jpg");
  background-size: 100% 100%;
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
    height: v(400px);
    overflow: auto;
    padding-bottom: v(50px);
    li {
      font-size: v(27px);
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
}
</style>
