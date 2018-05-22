import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import FeiView from '../views/FeiView'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
    ,{
      path: '/fei',
      name: 'FeiView',
      component: FeiView
    }
  ]
})
