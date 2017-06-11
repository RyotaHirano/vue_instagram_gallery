<template>
  <div id="app">
    <section class="section">
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