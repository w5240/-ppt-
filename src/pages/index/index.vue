<template>
  <div class="index main">
    <div class="flex-center">
      <div class="time-box">
        <h1 v-if="day">{{hours+' : '+minutes+' : '+ seconds}}</h1>
        <p v-if="day">{{time +'  '+this.day}}</p>
      </div>
      <div class="a-box">
        <div class="box box-1-1">
          <router-link :to="l.to" :style="{backgroundColor:l.color}" class="big-button" v-for=" l in list[0]" :key="l.icon">
            <img :src="l.icon" alt="" srcset="">
            <i>{{l.name}}</i>
          </router-link>
        </div>
        <div class="box box-2-2">
          <router-link :to="l.to" :style="{backgroundColor:l.color}" class="big-button" v-for=" l in list[1]" :key="l.icon">
            <img :src="l.icon" alt="" srcset="">
            <i>{{l.name}}</i>
          </router-link>
        </div>
        <div class="box box-2-1" id="container">

        </div>
        <div class="box box-3-1">
          <h2>花园路地区党建大数据</h2>
          <div class="box-table"><span>企业：</span>340</div>
          <div class="box-table"><span>党员：</span>431</div>
          <div class="box-table"><span>党组织：</span>70</div>
          <div class="flex-box">
            <div class="formal">
              <span>396</span>
              <small>正式党员</small>
            </div>
            <div class="on-move">
              <span>31</span>
              <small>流动党员</small>
            </div>
          </div>
          <h3>党组织数:70</h3>
          <div class="party-info">
            <span>党委：</span><i>1</i>
            <span>联全：</span><i>20</i>
            <span>党总支：</span><i>0</i>
            <span>党支部：</span><i>69</i>
            <span>独立：</span><i>10</i>
          </div>
        </div>
        <div class="box box-1-2">
          <router-link :to="l.to" :style="{backgroundColor:l.color}" class="big-button special-big-button" v-for=" l in list[2]" :key="l.icon">
            <img :src="l.icon" alt="" srcset="">
            <i>{{l.name}}</i>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import layout from "@/components/layouts/with-time.vue";
  import axios from 'axios';

  export default {
    data() {
      return {
        list: [
          [
            {
              name: "规范化",
              icon: require("./icon/1-1.png"),
              to: "/article/1",
              color: "#03b581"
            },
            {
              name: "特色项目",
              icon: require("./icon/1-2.png"),
              to: "/article/2",
              color: "#9c0079"
            },
            {
              name: "创新项目",
              icon: require("./icon/1-3.png"),
              to: "/innovative-projects",
              color: "#6400b8"
            }
          ],
          [
            {
              name: "党的十九大",
              icon: require("./icon/2-1.png"),
              to: "/articleCenter/4",
              color: "#00979d"
            },
            {
              name: "三会一课",
              icon: require("./icon/2-2.png"),
              to: "/article/5",
              color: "#bd7800"
            },
            {
              name: "两学一做",
              icon: require("./icon/2-3.png"),
              to: "/article/6",
              color: "#de007f"
            }
          ],
          [
            {
              name: "社区党组织",
              icon: require("./icon/3-1.png"),
              to: "/community",
              color: "#c00000"
            },
            {
              name: "机关党组织",
              icon: require("./icon/3-2.png"),
              to: "/article/8",
              color: "#de4400"
            },
            {
              name: "非公及社会组织",
              icon: require("./icon/3-3.png"),
              to: "/non-public-org",
              color: "#009d12"
            },
            {
              name: "楼宇工作站",
              icon: require("./icon/3-4.png"),
              to: "/article/10",
              color: "#081cdf"
            }
          ]
        ],
        week:[
          '星期天',
          "星期一",
          "星期二",
          "星期三",
          "星期四",
          "星期五",
          "星期六",
        ],
        time:'',
        day:'',
        hours:'',
        minutes:'',
        seconds:'',
        interval:'',
      };
    },
    mounted(){
      this.getTime();
      let script = document.createElement("script");
      script.src = "http://api.map.baidu.com/api?v=2.0&ak=AZiG31TUUZsQK33GeX40rp6ddCNLNRzE&callback=initialize";
      document.body.appendChild(script);

      this.interval = setInterval(()=>{
        try {
          if (new BMap.Map("container")) {
            let map = new BMap.Map("container");
            let point = new BMap.Point(116.409443,39.937953);
            map.centerAndZoom(point, 15);
            map.enableScrollWheelZoom(true);
            clearInterval(this.interval);
            let a = setInterval(()=>{
              if(document.querySelectorAll('#container>div img:last-child')[1]) {
                document.querySelectorAll('#container>div img:last-child')[1].style.display = 'none';
                document.querySelector('#container>div:last-child').style.display = 'none';
                clearInterval(a)
              }
            },100)

          }
        }catch(e){
          console.log("正在加载地图信息，请稍后...")
        }
      },100)

    },
    methods:{
      getTime(){
        setInterval(()=>{
          this.time = new Date().toLocaleDateString().replace('/','.').replace('/','.');
          this.hours = new Date().getHours()<10?'0'+new Date().getHours():new Date().getHours();
          this.minutes = new Date().getMinutes()<10?'0'+new Date().getMinutes():new Date().getMinutes();
          this.seconds = new Date().getSeconds()<10?'0'+new Date().getSeconds():new Date().getSeconds();
          this.day = this.week[new Date().getDay()];
        },1000)

      },
    },
    components: { layout }
  };
</script>
<style lang="scss" scoped>
  @import "../../components/style/index.scss";

  .anchorBL {
    display: none;
  }

  .index {
    background-image: url("./images/index.jpg");
    background-size: cover;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    color: #fff;

    .flex-center {
      width: v(964px);
    }
    .time-box {
      margin-top: v(40px);
      height:v(80px);
      h1 {
        font-size: v(35px);
      }
      p {
        margin-top: v(15px);
        margin-bottom: v(20px);
      }
    }

    .a-box {
      position: relative;
      // padding: 0 v(4px);
      // width: 100%;
      // height: 100%;
    }
    .big-button {
      text-align: center;
      width: v(132px);
      height: v(113px);
      flex-shrink: 0;
      margin: v(20px) 0 0 v(20px);
      color: #fff;
      img {
        display: block;
        width: 43px;
        height: 43px;
        margin: 20px auto 10px auto;
      }
      i {
        display: block;
      }
    }
    .special-big-button {
      margin-left: v(30px);
    }

    .box {
      //   background: red;
      background-color: rgba($white, 0.1);
      position: absolute;
      display: flex;
      flex-wrap: wrap;
      font-size: v(18px);
    }
    .box-1-1 {
      width: v(172px);
      height: v(449px);
    }
    .box-1-2 {
      width: v(668px);
      height: v(153px);
      top: v(469px);
    }
    .box-2-1 {
      width: v(476px);
      height: v(276px);
      left: v(192px);
      top: 0;


    }
    .box-2-2 {
      width: v(476px);
      height: v(153px);
      left: v(192px);
      top: v(296px);
    }
    .box-3-1 {
      background-color: #9f2242;
      width: v(275px);
      height: v(622px);
      left: v(688px);
      display: block;
      h2 {
        margin-top: v(54px);
        text-align: center;
        font-size: 20px;
        width: 100%;
      }
      .box-table {
        margin-top: v(18px);
        width: 100%;
        span {
          display: inline-block;
          width: 157px;
          text-align: right;
        }
      }
      .flex-box {
        margin-top: v(33px);
        background-color: #b04233;
        display: flex;
        height: v(120px);
        div {
          flex-grow: 1;
          text-align: center;
        }
        span {
          text-align: center;
          display: block;
          margin-top: v(33px);
          margin-bottom: v(9px);
        }
      }
      .party-info {
        span {
          width: v(87px);
          margin-top: v(18px);
        }
      }
      h3 {
        margin-top: v(28px);
        margin-bottom: v(10px);
        text-align: center;
      }
      span {
        display: inline-block;
        font-size: v(20px);
        text-align: right;
      }
      i {
        display: inline-block;
        width: v(46px);
      }
    }
  }
</style>
