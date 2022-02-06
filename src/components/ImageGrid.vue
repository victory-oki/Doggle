<template>
  <div class="content">
    <div class="text-center mt-16" v-if="isImagesLoading">
      <v-progress-circular
        indeterminate
        :size="70"
        :width="7"
      ></v-progress-circular>
    </div>
    <p class="search-query" v-if="selectedBreed && !isImagesLoading">
      Results for {{ selectedBreed }} on Doggle
    </p>
    <div class="grid" v-show="!isImagesLoading && images.length > 0">
      <img
        v-for="(image, index) in images"
        :src="image"
        alt=""
        :key="index"
        loading="lazy"
        width="300" height="300"
        @click = "viewDetails(image)"
      />
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  created() {
    this.fetchRandom();
  },
  data() {
    return {};
  },
  computed: {
    ...mapState(["images"]),
    ...mapState(["isImagesLoading"]),
    ...mapState(["selectedBreed"]),
  },
  methods: {
    ...mapActions(["getRandomImagesAction"]),
    async fetchRandom() {
      this.loading = true;
      await this.getRandomImagesAction();
      this.loading = false;
    },
    viewDetails(imageUrl){
      let imgSegments = imageUrl.split('/');
      let breed = imgSegments[4];
      let id = imgSegments[5].split('.')[0];
      // this.$router.push(`breed/${breed}/id/${id}`)
      this.$router.push({name:'dog-detail', params:{breed,id}})
    }
  },
};
</script>

<style lang="scss" scoped>
img {
  width: 100%;
  height: auto;
  display: block;
  margin-bottom: 10px;
  cursor: pointer;
}
.content{
    max-width: 122rem;
    margin: 0 auto;
}
.grid {
  line-height: 0;
  margin-top: 1rem;

  -webkit-column-count: 3;
  -webkit-column-gap: 0;
  -moz-column-count: 3;
  -moz-column-gap: 0;
  column-count: 3;
  column-gap: 1rem;
}
.search-query {
  font-size: 1.8rem;
  margin: 1.6rem 0;
  font-weight: 500;
}
</style>