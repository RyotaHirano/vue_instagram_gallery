import Vue from 'vue'
import jsdom from 'jsdom'
import InstagramItem from '../src/js/components/InstagramItem.vue'

const renderer = require('vue-server-renderer').createRenderer()

describe('Test suite for InstagramItem', () => {
  it('Test data', () => {
    const clonedComponent = Vue.extend(InstagramItem)
    const testComponent = new clonedComponent({
      data() {
        return {
          windowHeight: 0,
          windowScrollTop: 0,
          offsetTop: 0
        }
      },
      propsData: {
        item: {
          link: 'http://localhost',
          images: {
            standard_resolution: {
              url: 'dummy.jpg'
            }
          },
          likes: {
            count: 10
          }
        }
      }
    }).$mount();

    renderer.renderToString(testComponent, (err, str) => {
      const dom = new jsdom.JSDOM(str)
      const targetEl = dom.window.document.querySelector('.c-instagram-item')
      expect(targetEl.classList.contains('show')).toBeTruthy()
    })
  })
})