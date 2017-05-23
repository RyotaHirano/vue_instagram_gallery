import Vue from 'vue'
import App from './components/App'

import fetchInstagram from './modules/fetchInstagram'

const data = fetchInstagram();
console.log(data);

new Vue({
  el: '#app',
  store: {
  },
  template: '<App/>',
  components: { App }
})

