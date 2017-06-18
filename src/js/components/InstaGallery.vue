<template>
  <div class="p-gallery">
    <ul class="c-instagram-gallery">
      <InstaItem
        v-for="item, key in this.fetchItems"
        :item=item
        :key="key"
      ></InstaItem>
    </ul>
  </div>
</template>

<script>
  import { fetchInstagram } from '../modules/fetchInstagram'
  import InstaItem from './InstaItem'
  import '../../css/object/project/gallery'
  import '../../css/object/component/instagram-gallery'

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