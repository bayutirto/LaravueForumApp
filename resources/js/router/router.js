import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Login from '../components/auth/Login.vue'
import Signup from '../components/auth/Signup.vue'
import Forum from '../components/forum/Forum.vue'
import Logout from '../components/auth/Logout.vue'
import Detail from '../components/forum/QuestionDetail.vue'
import AskQuestion from '../components/forum/AskQuestion.vue'

const routes = [
    { path: '/login', component: Login },
    { path: '/logout', component: Logout},
    { path: '/signup', component: Signup},
    { path: '/forum', component: Forum, name:'forum'},
    { path: '/ask-question', component: AskQuestion},
    { path: '/question/:slug', component: Detail, name:'detail'}
  ]

const router = new VueRouter({
    routes,
    hashbang : false,
    mode : 'history'
})

export default router
