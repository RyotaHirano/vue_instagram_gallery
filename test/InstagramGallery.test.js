import Vue from 'vue'
import jsdom from 'jsdom'
import InstagramGallery from '../src/js/components/InstagramGallery.vue'

const renderer = require('vue-server-renderer').createRenderer()

describe('Test suite for InstagramGallery', () => {
  it('show Instagram Item', () => {
    const clonedComponent = Vue.extend(InstagramGallery)
    const testComponent = new clonedComponent({
      data() {
        return {
          fetchItems: [
            {
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
          ]
        }
      }
    }).$mount()

    renderer.renderToString(testComponent, (err, str) => {
      const dom = new jsdom.JSDOM(str)
      const targetEl = dom.window.document.querySelector('.p-gallery')

      expect(targetEl.querySelector('.c-instagram-gallery')).toBeTruthy()

      const targetElChild = targetEl.querySelector('.c-instagram-gallery .c-instagram-item')
      expect(targetElChild).toBeTruthy()
      expect(targetElChild.querySelector('img').src).toContain('dummy.jpg')
      expect(targetElChild.querySelector('span').textContent).toContain('10 likes')
      expect(targetElChild.querySelector('a').href).toContain('http://localhost/')
    })
  })

  it('show Multiple Instagram Items', () => {
    const clonedComponent = Vue.extend(InstagramGallery)
    const testComponent = new clonedComponent({
      data() {
        return {
          fetchItems: [
            {
              link: 'http://localhost/',
              images: {
                standard_resolution: {
                  url: 'dummy.jpg'
                }
              },
              likes: {
                count: 10
              }
            },
            {
              link: 'http://localhost2/',
              images: {
                standard_resolution: {
                  url: 'dummy2.jpg'
                }
              },
              likes: {
                count: 22
              }
            }
          ]
        }
      }
    }).$mount()

    renderer.renderToString(testComponent, (err, str) => {
      const dom = new jsdom.JSDOM(str)
      const targetEl = dom.window.document.querySelector('.p-gallery')

      expect(targetEl.querySelector('.c-instagram-gallery')).toBeTruthy()

      const targetElChilds = targetEl.querySelectorAll('.c-instagram-gallery .c-instagram-item')
      expect(targetElChilds.length).toEqual(2)

      expect(targetElChilds[0].querySelector('img').src).toContain('dummy.jpg')
      expect(targetElChilds[0].querySelector('span').textContent).toContain('10 likes')
      expect(targetElChilds[0].querySelector('a').href).toContain('http://localhost/')

      expect(targetElChilds[1].querySelector('img').src).toContain('dummy2.jpg')
      expect(targetElChilds[1].querySelector('span').textContent).toContain('22 likes')
      expect(targetElChilds[1].querySelector('a').href).toContain('http://localhost2/')
    })
  })
})

