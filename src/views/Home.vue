<template>
  <div>
    <Header />
    <ImageGrid />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import ImageGrid from "@/components/ImageGrid.vue";
export default {
  name: "App",
  components: {
    Header,
    ImageGrid,
  },
};
</script>

<style lang="scss" scoped>
</style>