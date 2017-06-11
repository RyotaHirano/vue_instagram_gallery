<template>
  <li class="c-instagram-item">
    <span>{{ this.item }}</span>
    <a v-bind:href="this.item.link" target="_blank">
      <img
        v-bind:src="this.item.images.standard_resolution.url"
      >
      <div
        class="c-instagram-item-hoverd"
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
    }
  }
</script>