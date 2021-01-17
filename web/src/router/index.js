import Vue from 'vue'
import Router from 'vue-router'
import TeamRoom from '@/components/TeamRoom'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'TeamRoom',
      component: TeamRoom
    }
  ]
})
