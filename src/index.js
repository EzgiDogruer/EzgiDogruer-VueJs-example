import Vue from 'vue';
import VeeValidate from 'vee-validate';

import { store } from './_store';
import { router } from './_helpers';
import App from './app/App';
import VueI18n from 'vue-i18n';


Vue.config.productionTip = false;
Vue.use(VeeValidate);
Vue.use(VueI18n);

localStorage.setItem("language", "EN");



// setup fake backend
import { configureFakeBackend } from './_helpers';
configureFakeBackend();

const messages = {
    en: {
      message: {
        hello: 'With Eurotel product family manage your work easily {name}!',
        username : 'Username',
        password : 'Password',
        log : 'Login',
        cancel : 'Cancel',
        firstN: 'First Name',
        lastN: 'Last Name',
        reg : 'Register',
        delete : 'Delete',
        deleting: 'Deleting...',
        h1_log : 'Login',
        h2 : 'Register',
        h1_admin :'Hi Admin!',
        users : 'Users :',
        h1_user: 'Hi ',
        home :'Home',
        sUp :'Sign Up',

        
      },
     
    },
    tr: {
        message: {
            hello: 'Eurotel ürün ailesi ile işinizi kolaylaştırın! {name}',
            username : 'Kullanıcı Adı',
            password : 'Şifre',
            log : 'Giriş',
            cancel : 'Çıkış',
            firstN: 'İsim',
            lastN: 'Soyisim',
            reg : 'Kayıt Ol',
            delete : 'Sil',
            deleting: 'Siliniyor...',
            h1_log : 'Giriş',
            h2 : 'Kayıt',
            h1_admin :'Merhaba Yönetici!',
            users : 'Kullanıcılar :',
            h1_user: 'Merhaba ',
            home :'Anasayfa',
            sUp :'Kayıt ',
            
          },
    },
  };

  const i18n = new VueI18n({
    locale: 'en',
    messages
  });
new Vue({
    el: '#app',
    router,
    store,
    i18n,
    render: h => h(App)
});