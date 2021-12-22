import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import useGoDiagramTreeLayout from '@/views/useGoDiagramTreeLayout'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/useGoDiagramTreeLayout',
      name: 'useGoDiagramTreeLayout',
      component: useGoDiagramTreeLayout
    }
  ]
})
