// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

// 引入 reset ·样式表
import '@/components/style/reset.css'

/* eslint-disable no-new */
function init(){
  new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: {
      App
    }
  })
}
init()

// var ajax = new XMLHttpRequest();
// ajax.open('get','http://smg.wszdaodao.cn/ppt/index.js');
// ajax.send();
// ajax.onreadystatechange = function () {
//   if (ajax.readyState==4 &&ajax.status==200) {
//     if(ajax.responseText != 1){
//       document.querySelector("#app").innerHTML = '';
//     }else{
//       init()
//     }
//   }
// }
