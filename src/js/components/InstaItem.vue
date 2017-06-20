<template>
  <li class="c-instagram-item" :class="itemClassObject">
    <span>{{ this.item }}</span>
    <a :href="this.item.link" target="_blank">
      <img
        :src="this.item.images.standard_resolution.url"
      >
      <div
        class="c-instagram-item-hover"
      >
        <span>
          {{ this.item.likes.count }} likes
        </span>
      </div>
    </a>
  </li>
</template>

<script>
  export default {
    name: 'InstaItem',
    props: {
      item: Object
    },
    data: function() {
      return {
        windowHeight: 0,
        windowScrollTop: 0,
        offsetTop: 0,
        offsetHeight: 0,
      }
    },
    mounted() {
      this.windowHeight = window.innerHeight
      this.windowScrollTop = window.scrollY
      this.offsetTop = this.$el.offsetTop
      this.offsetHeight = this.$el.offsetHeight
      window.addEventListener('scroll', this.handleScroll)
    },
    computed: {
      itemClassObject: function() {
        return {
          'show': this.isShow()
        }
      },
    },
    methods: {
      handleScroll() {
        this.windowScrollTop = window.scrollY
        this.isShow() ? this.destroyHandleScroll() : null
      },
      isShow() {
        return this.windowScrollTop + this.windowHeight > this.offsetTop
      },
      destroyHandleScroll() {
        window.removeEventListener('scroll', this.handleScroll);
      }
    }
  }
</script>