import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: resolve => (require(['@/page/Index'], resolve))
    },
    {
      path: '/article-steps',
      name: 'ArticleSteps',
      component: resolve => (require(['@/components/article-steps/Index'], resolve))
    }
  ]
})
