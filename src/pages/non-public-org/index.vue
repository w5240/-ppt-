<template>
<div class="warp">

  <layout>
    <div class="filter">
      <span :class="index===whichSel?'sel':''" v-for="(c,index) in char" :key="c" @click = 'choose(c,index)'>{{c}}</span>
    </div>
    <ul class="list">
      <li v-for="e in list">{{e.title}}</li>
    </ul>
      <div class="box box-3-1">
        <h2>社区党组织</h2>
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
  </layout>
  </div>
</template>
<script>
import layout from "@/components/layouts/with-touch-header";
import axios from 'axios';

export default {
  data() {
    let char = ["最热"];
    for (var i = 65; i <= 90; i++) {
      char.push(String.fromCharCode(i));
    }
    return {
      char,
      whichSel:0,
      list:[],
      listStore:[],
    };
  },
  mounted(){
      this.getList();
  },
  methods:{
      getList(){
        axios
          .get(`http://ekj.cqchunze.com/index.php?m=content&c=index&a=json&catid=16`)
          .then(res => {
//              console.log(res.data.data);
//            prefix
            this.list = res.data.data.reverse();
            this.listStore = JSON.parse(JSON.stringify(res.data.data.reverse()));
          });
//        this.list = [{title:'党组织',prefix:'D'},{title:'北医社区',prefix:'B'},{title:'北航社区',prefix:'B'},{title:'晴冬园社区',prefix:'Q'},{title:'志新社区',prefix:'Z'}];
//        this.listStore = [{title:'党组织',prefix:'D'},{title:'北医社区',prefix:'B'},{title:'北航社区',prefix:'B'},{title:'晴冬园社区',prefix:'Q'},{title:'志新社区',prefix:'Z'}];
      },
    choose(c,index){
          this.whichSel = index;
          if(c==='最热'){
            this.list = JSON.parse(JSON.stringify(this.listStore));
          }else{
            this.list =[];
            this.listStore.forEach((e)=>{
                  if(e.prefix === c){
                    this.list.push(e);
                  }
              })
          }
    }
  },
  components: {
    layout
  }
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

.warp {
  background-color: #edf2f5;
}
.filter {
  background-color: #FFF;
  float: left;
  margin-left: v(50px);
  width: v(66px);
  height: v(565px);
  /*height: v(472px);*/
  overflow-y: scroll;
  overflow-x: hidden;
  margin-right:v(20px);
  span {
    display: block;
    width: v(50px);
    height: v(50px);
    text-align: center;
    line-height: v(50px);
    cursor:pointer;
    transition: all .3s;

    &.sel{
      background-color: #ff9900;
      color:white;
    }
    &:hover{
      background-color: #ff9900;
      color:white;
    }
  }
}
.list {
  float: left;
  width: v(456px);
  height: v(565px);
  /*height: v(474px);*/
  background-color: #FFF;
  li {
    width: 100%;
    height: v(50px);
    font-size: v(20px);
    padding: 0 v(20px);
    box-sizing: border-box;
    line-height: v(50px);
    color: #474747;
    &:hover{
      background-color: #ff9900;
      color:white;
    }
  }
}
.box-3-1 {
  margin-left: v(46px);
  color: #fff;
  float: left;
  background-color: #d70c19;
  width: v(275px);
  height: v(565px);
  display: block;
  h2 {
    margin-top: v(30px);
    margin-bottom: v(25px);
    text-align: center;
    font-size: v(30px);
    width: 100%;
  }
  small {
    font-size: 16px;
  }
  h3 {
    font-size: 22px;
  }
  .box-table {
    font-size: v(18px);
    margin-top: v(18px);
    width: 100%;
    span {
      display: inline-block;
      width: 157px;
      text-align: right;
    }
  }
  .flex-box {
    display: flex;
    height: v(60px);
    margin-top: v(30px);
    div {
      flex-grow: 1;
      text-align: center;
    }
    span {
      text-align: center;
      display: block;
      font-size: v(30px);
    }
  }
  .party-info {
    span {
      width: v(87px);
      margin-top: v(18px);
      font-size: v(16px);
    }
    i {
      font-size: v(16px);
    }
  }
  h3 {
    margin-top: v(28px);
    margin-bottom: v(30px);
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
</style>
