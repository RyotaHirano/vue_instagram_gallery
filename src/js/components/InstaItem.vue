<template>
  <li class="c-instagram-gallery__item">
    <img
      v-bind:src="this.item.images.standard_resolution.url"
    >
  </li>
</template>

<script>

  export default {
    name: 'InstaItem',
    props: {
      item: Object
    }
  }
</script>