<template>
  <li>{{this.item}}</li>
</template>

<script>

  export default {
    name: 'InstaItem',
    props: {
      item: Object
    }
  }
</script>