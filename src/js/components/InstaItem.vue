<template>
  <li class="c-instagram-gallery__item">
    <a v-bind:href="this.item.link" target="_blank">
      <img
        v-bind:src="this.item.images.standard_resolution.url"
      >
    </a>
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