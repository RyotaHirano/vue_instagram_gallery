<template>
  <div class="gallery">
    <ul
      v-for="item, key in this.fetchItems"
    >
      <InstaItem
        :item=item
        :key="key"
      ></InstaItem>
    </ul>
  </div>
</template>

<script>
  import { fetchInstagram } from '../modules/fetchInstagram'
  import InstaItem from './InstaItem'

  export default {
    name: 'InstaGallery',
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
      InstaItem
    }
  }
</script>