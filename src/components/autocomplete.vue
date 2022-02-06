<template>
  <div>
    <v-autocomplete
      v-model="breed"
      :loading="loading"
      :items="items"
      :search-input.sync="search"
      cache-items
      hide-no-data
      hide-details
      :label="attributes.solo? 'Search by Dog breed' : 'Dog Breed'"
      v-bind="attributes"
    ></v-autocomplete>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  created() {
    this.fetchBreeds();
  },
  data() {
    return {
      loading: false,
      breed: null,
      search: null,
      items: [],
    };
  },
  props: {
    attributes: {
      type: Object,
      default: () => ({ solo: true, flat: true }),
    },
  },
  watch: {
    search(val) {
      val && val !== this.breed && this.querySelections(val);
    },
    breed(newValue, oldValue) {
      if (newValue !== oldValue) {
        this.handleSearch();
      }
    },
  },
  computed: {
    ...mapState(["breeds"]),
  },
  methods: {
    ...mapActions(["getBreedsAction"]),
    ...mapActions(["setBreedAction"]),
    async fetchBreeds() {
      await this.getBreedsAction();
    },
    handleSearch() {
      console.log("here");
      this.$router.push({name:'search'})
      this.setBreedAction(this.breed);
    },
    querySelections(v) {
      this.loading = true;
      setTimeout(() => {
        this.items = this.breeds.filter((e) => {
          return (e || "").toLowerCase().indexOf((v || "").toLowerCase()) > -1;
        });
        this.items = JSON.parse(JSON.stringify(this.items));
        this.loading = false;
      }, 500);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>