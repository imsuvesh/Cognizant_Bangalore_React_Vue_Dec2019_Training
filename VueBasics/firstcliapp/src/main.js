import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import listofcourses from './components/listofcourses.component.vue';
import Posts from './components/posts.component';
import postdetails from './components/postdetails.component.vue';
Vue.config.productionTip = false
Vue.use(VueRouter);//making vue aware of the router

const routes = [
  {path:'',component:listofcourses},
  {path:'/posts',component:Posts},
  {path:'*',redirect:'/'},
  {path:'/postdetails/:id',component:postdetails,name:'postdetails'}
];
var router =new VueRouter({ 
  routes,
  mode:'history'
})
//globalfilter
Vue.filter('currency',function(val,args){
  return `${args}. ${val}`
});

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
