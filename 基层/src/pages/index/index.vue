<template>
<div class="index">
  <div class="flex-center">
    <div class="time-box">
      <h2>20:30</h2>
      <p>日期 星期</p>
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
        <div class="box box-2-1"></div>
        <div class="box box-3-1"></div>
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
export default {
  data() {
    return {
      list: [
        [
          {
            name: "规范化",
            icon: require("./icon/1-1.png"),
            to: "/",
            color: "#03b581"
          },
          {
            name: "特色项目",
            icon: require("./icon/1-2.png"),
            to: "/",
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
            to: "/",
            color: "#00979d"
          },
          {
            name: "三会一课",
            icon: require("./icon/2-2.png"),
            to: "/",
            color: "#bd7800"
          },
          {
            name: "两学一做",
            icon: require("./icon/2-3.png"),
            to: "/",
            color: "#de007f"
          }
        ],
        [
          {
            name: "社区党组织",
            icon: require("./icon/3-1.png"),
            to: "/communities-list",
            color: "#c00000"
          },
          {
            name: "机关党组织",
            icon: require("./icon/3-2.png"),
            to: "/",
            color: "#de4400"
          },
          {
            name: "非公及社会组织",
            icon: require("./icon/3-3.png"),
            to: "/",
            color: "#009d12"
          },
          {
            name: "楼宇工作站",
            icon: require("./icon/3-4.png"),
            to: "/",
            color: "#081cdf"
          }
        ]
      ]
    };
  },
  components: { layout }
};
</script>
<style lang="scss" scoped>
@import "../../components/style/index.scss";
.index {
  background-image: url("./images/index.jpg");
  background-size: cover;
  margin: 0 auto;
  display: flex;
  justify-content: center;
}
.flex-center {
  width: v(964px);
}
.time-box {
  color: #fff;
  h2 {
    font-size: v(20px);
    margin-top: v(40px);
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
  width: v(275px);
  height: v(622px);
  left: v(688px);
}
</style>
