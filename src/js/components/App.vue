<template>
  <div id="app">
    <section class="section">
      <h1>Vue Insta</h1>
      <InstaGallery
      ></InstaGallery>
    </section>
  </div>
</template>

<script>
  import InstaGallery from './InstaGallery'

  export default {
    name: 'app',
    components: {
      InstaGallery
    }
  }
</script>