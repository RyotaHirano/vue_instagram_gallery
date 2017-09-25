import Vue from 'vue'
import App from './components/App'
import '../../node_modules/sanitize.css/sanitize.css'
import '../css/style.scss'

import './eslint-test'

new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
});

