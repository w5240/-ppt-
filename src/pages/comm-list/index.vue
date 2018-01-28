<template>
  <layout class="index">
    <ul class="flex-box">
      <li><router-link class="box box-1" :to="{name:'commSin', query: {id:11}}"><img class="box-icon" src="./img/tu.png" alt="" srcset=""><span class="span">宣传部到花园路街道检查</span><p class="p">宣传部到花园路街道检查</p></router-link></li>
      <li><router-link class="box box-2" :to="{name:'commSin' , query: {id:12}}"><img class="box-icon" src="./img/tu.png" alt="" srcset=""><span class="span">宣传部到花园路街道检查</span><p class="p">宣传部到花园路街道检查</p></router-link></li>
      <li><router-link class="box box-3" :to="{name:'commSin' , query: {id:13}}"><img class="box-icon" src="./img/tu.png" alt="" srcset=""><span class="span">宣传部到花园路街道检查</span><p class="p">宣传部到花园路街道检查</p></router-link></li>
      <li><router-link class="box box-4" :to="{name:'commSin' , query: {id:15}}"><img class="box-icon" src="./img/tu.png" alt="" srcset=""><span class="span">宣传部到花园路街道检查</span><p class="p">宣传部到花园路街道检查</p></router-link></li>
      <li><router-link class="box box-5" :to="{name:'commSin' , query: {id:15}}"><img class="box-icon" src="./img/tu.png" alt="" srcset=""><span class="span">宣传部到花园路街道检查</span><p class="p">宣传部到花园路街道检查</p></router-link></li>
      <li><router-link class="box box-6" :to="{name:'commSin' , query: {id:14}}"><img class="box-icon" src="./img/tu.png" alt="" srcset=""><span class="span">宣传部到花园路街道检查</span><p class="p">宣传部到花园路街道检查</p></router-link></li>
    </ul>
    <!--<div class="button">-->
      <!--<button>上一页</button>-->
      <!--<span>1</span>-->
      <!--<span>2</span>-->
      <!--<button>下一页</button>-->
    <!--</div>-->
    <div class="bg"></div>
  </layout>
</template>
<script>
  import layout from '@/components/layouts/with-touch-header.vue';
  import axios from 'axios';

  export default {
    components: {
      layout
    },
    data(){
        return{
            list:[]
        }
    },
    mounted(){

    },
    methods:{
      getList(){
        axios
          .get(`http://ekj.cqchunze.com/index.php?m=content&c=index&a=json&catid=${this.$route.params.id}`)
          .then(res => {
            this.art = res.data.data;
          });
      }
    }
  };
</script>

<style lang="scss" scoped>
  @import '../../components/style/index.scss';

  .button{
    width:v(400px);
    margin:0 auto;

    button{
      background-color: #ff9900;
      padding:v(10px) v(20px);
      border-radius:v(5px);
      margin:0 v(30px);
      color:white;

    }
  }
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
  /*.index {*/
  /*background-image: url('./images/bg.jpg');*/
  /*background-size: cover;*/
  /*}*/
  .flex-box {
    box-sizing: border-box;
    padding: 0 v(10px);
    width: v(1024px);
    height: v(520px);
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    flex-shrink: 0;
    flex-grow: 0;
    align-content: flex-start;

    li{
      text-align: left;
      span.span{
        padding-top:v(10px);
        padding-left:v(20px);
        text-align: left;
        font-size:v(18px);
        color:black;
        font-weight: bold;
      }
      p.p{
        padding-top:v(10px);
        padding-left:v(20px);
        text-align: left;
        font-size:v(16px);
        color:#757575;
        padding-bottom:v(20px)
      }
    }
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
    height: v(220px);
    background-color: white;

  }
  .box-icon {
    display: block;
    /*margin-bottom: v(20px);*/
    height: v(150px);
    padding:v(15px);
    padding-bottom:0;
    box-sizing: border-box;
  }
</style>
