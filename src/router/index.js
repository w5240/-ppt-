import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/index'
import communitiesList from '@/pages/communities-list'
import innovative from '../pages/innovative-party/'
import innovativeProjects from '../pages/Innovation-projects/index'
import nonPublicOrg from '../pages/non-public-org/index'
import article from '../pages/article/index'
import articleCenter from '../pages/articleCenter/index'

import community from '../pages/community/index'
import commList from '../pages/comm-list/index'
import commSin from '../pages/comm-sin/index'
import option from '../pages/option/index'


Vue.use(Router);

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
  }, {
    path: '/innovative-projects',
    name: 'innovative-projects',
    component: innovativeProjects
  }, {
    path: '/non-public-org/:id',
    name: 'non-public-org',
    component: nonPublicOrg
  }, {
    path: '/article/:id',
    name: 'article',
    component: article
  },{
    path: '/articleCenter/:id',
    name: 'articleCenter',
    component: articleCenter
  },{
    path: '/community',
    name: 'community',
    component: community
  },{
    path: '/commList/:id',
    name: 'commList',
    component: commList
  },{
    path: '/commSin/:id',
    name: 'commSin',
    component: commSin
  },{
    path: '/option/:id',
    name: 'option',
    component: option
  },]
})
