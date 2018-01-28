import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/index'
import communitiesList from '@/pages/communities-list'
import innovative from '../pages/innovative-party/'
import innovativeProjects from '../pages/Innovation-projects'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'index',
    component: index
  }, {
    path: '/communities-list',
    name: 'communities-list',
    component: communitiesList
  }, {
    path: '/innovative-party',
    name: 'innovative-party',
    component: innovative
  },{
    path: '/innovative-projects',
    name: 'innovative-projects',
    component: innovativeProjects
  }]
})
