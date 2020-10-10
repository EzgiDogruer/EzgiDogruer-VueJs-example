import Vue from 'vue';
import Router from 'vue-router';
import LoginPage from '../login/LoginPage'
import RegisterPage from '../register/RegisterPage'
import Home from '../login/Home'
import user from '../manager/user'
import admin from '../manager/admin'

Vue.use(Router);

export const router = new Router({
  mode: 'history',
  routes: [
   
    { path: '/login', component: LoginPage },
    { path: '/register', component: RegisterPage },
    { path: '/user', component:  user },
    { path: '/admin', component:  admin },
    { path: '/home', component:  Home },
    
    // otherwise redirect to home
    { path: '*', redirect: '/home' }
  
  ]
});

router.beforeEach((to, from, next) => {
  // redirect to login page if not logged in and trying to access a restricted page
  const publicPages = ['/login', '/register','/admin','/user','/home'];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem('user');

  if (authRequired && !loggedIn) {
    return next('/login');
  }

  next();
})

