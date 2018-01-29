<template>
  <layout class="index">
    <ul class="flex-box">
      <li><router-link class="box box-1" :to="{name:'article', params: {id:'jcqk'}}"><img class="box-icon" src="./img/1.png" alt="" srcset=""><i>基础情况</i></router-link></li>
      <li><router-link class="box box-2" :to="{name:'article' , params: {id:4}}"><img class="box-icon" src="./img/5.png" alt="" srcset=""><i>创新示范项目</i></router-link></li>
      <li><router-link class="box box-3" :to="{name:'article' , params: {id:4}}"><img class="box-icon" src="./img/3.png" alt="" srcset=""><i>特色简介</i></router-link></li>
      <li><router-link class="box box-4" :to="{name:'commList' , params: {id:7}}"><img class="box-icon" src="./img/6.png" alt="" srcset=""><i>党建时讯</i></router-link></li>
      <li><router-link class="box box-5" :to="{name:'article' , params: {id:4}}"><img class="box-icon" src="./img/7.png" alt="" srcset=""><i>先锋团队</i></router-link></li>
      <li><router-link class="box box-6" :to="{name:'article' , params: {id:4}}"><img class="box-icon" src="./img/4.png" alt="" srcset=""><i>党组织班子</i></router-link></li>
      <li><router-link class="box box-7" :to="{name:'article' , params: {id:4}}"><img class="box-icon" src="./img/8.png" alt="" srcset=""><i>网格化管理</i></router-link></li>
    </ul>
    <div class="bg"></div>
  </layout>
</template>
<script>
  import layout from '@/components/layouts/with-time.vue';
  import axios from 'axios';

  export default {
      data(){
          return{
            art:[],
          }
      },
    mounted(){
        this.gethtml();
        console.log(11)
    },
    methods:{
      gethtml(){
        axios
//          .get(`http://ekj.cqchunze.com/index.php?m=content&c=index&a=json&catid=${this.$route.params.id}`)
          .get(`http://ekj.cqchunze.com/index.php?m=content&c=index&a=json&catid=7`)
          .then(res => {
            console.log(res.data.data)
            this.art = res.data.data[0];
          });
      }
    },
    components: {
      layout
    },
  };
</script>

<style lang="scss" scoped>
  @import '../../components/style/index.scss';
  .bg{
    position: fixed;
    z-index: -1;
    top:0;
    left:0;
    height:100%;
    width:100%;
    background-image: url('./img/bg.png');
    background-size: 100% 100%;
  }
  /*.index {*/
  /*background-image: url('./images/bg.jpg');*/
  /*background-size: cover;*/
  /*}*/
  .flex-box {
    box-sizing: border-box;
    padding: 0 v(10px);
    width: v(1024px);
    height: v(614px);
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    flex-shrink: 0;
    flex-grow: 0;
    align-content: flex-start;
  }

  @media screen and (orientation: portrait) {
    .flex-box {
      width: v(1024px);
      height: v(768px);
    }
  }
  .box {
    /*display: block;*/
    width: v(281px);
    color: $white;
    margin-bottom: v(40px);
    margin-left: v(40px);
    font-size: v(30px);
    display: flex;
    flex-direction: column;
    align-content: center;
    text-align: center;
    justify-content: center;
    cursor: pointer;
    &-1 {
      background-color: $orange;
      height: v(160px);
    }
    &-2 {
      background-color: #0ea88d;
      height: v(363px);
    }
    &-3 {
      background-color: $blue;
      height: v(160px);
    }
    &-4 {
      background-color: $green;
      height: v(160px);
    }
    &-5 {
      background-color: #ea2bb6;
      height: v(160px);
    }
    &-6 {
      background-color: #e20056;
      height: v(363px);
    }
    &-7 {
      background-color: $orange;
      height: v(160px);
    }
  }
  .box-icon {
    display: block;
    margin: 0 auto;
    margin-bottom: v(20px);
    height: v(60px);
  }
</style>
