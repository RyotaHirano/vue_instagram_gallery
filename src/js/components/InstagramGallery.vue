<template>
  <div class="p-gallery">
    <ul class="c-instagram-gallery">
      <InstagramItem
        v-for="item, key in this.fetchItems"
        :key="key"
        :item=item
        :data-index="key"
      ></InstagramItem>
    </ul>
  </div>
</template>

<script>
  import { fetchInstagram } from '../modules/fetchInstagram'
  import InstagramItem from './InstagramItem'

  export default {
    name: 'InstagramGallery',
    data() {
      return {
        fetchItems: []
      }
    },
    beforeMount() {
      fetchInstagram.done(datum => {
        this.fetchItems = datum.data
      })
    },
    components: {
      InstagramItem
    }
  }
</script>