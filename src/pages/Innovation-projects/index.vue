<template>
<layout class="index">
    <ul class="flex-box">
        <li><router-link class="box box-1" :to="{name:'innovative-party', query: {id:11}}"><img class="box-icon" src="./icon/atom.png" alt="" srcset=""><i>创建新型党组织</i></router-link></li>
        <li><router-link class="box box-2" :to="{name:'innovative-party' , query: {id:12}}"><img class="box-icon" src="./icon/server.png" alt="" srcset=""><i>服务型党组织</i></router-link></li>
        <li><router-link class="box box-3" :to="{name:'innovative-party' , query: {id:13}}"><img class="box-icon" src="./icon/pintu.png" alt="" srcset=""><i>引领性党组织</i></router-link></li>
        <li><router-link class="box box-4" :to="{name:'innovative-party' , query: {id:15}}"><img class="box-icon" src="./icon/smart.png" alt="" srcset=""><i>普惠型党组织</i></router-link></li>
        <li><router-link class="box box-5" :to="{name:'innovative-party' , query: {id:14}}"><img class="box-icon" src="./icon/book.png" alt="" srcset=""><i>学习型党组织</i></router-link></li>
    </ul>
  <div class="bg"></div>
</layout>
</template>
<script>
import layout from '@/components/layouts/with-touch-header';
export default {
  components: {
    layout
  }
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
  background-image: url('./images/bg.jpg');
  background-size: cover;
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
  display: block;
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
    background-color: $purple;
    height: v(200px);
  }
  &-2 {
    background-color: $red;
    height: v(323px);
  }
  &-3 {
    background-color: $green;
    height: v(314px);
  }
  &-4 {
    background-color: $blue;
    height: v(209px);
  }
  &-5 {
    background-color: $orange;
    height: v(563px);
  }
}
.box-icon {
  display: block;
  margin: 0 auto;
  margin-bottom: v(20px);
  height: v(60px);
}
</style>
