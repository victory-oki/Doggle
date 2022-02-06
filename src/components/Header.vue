<template>
  <div class="container">
    <div class="search__form">
      <h4 class="search__title">Doggle</h4>
      <p class="search__brief">The internet’s source of Dog images.</p>
      <p class="search__brief">Powered by creators everywhere.</p>
      <form action="#">
        <AutoComplete />
      </form>
    </div>
  </div>
</template>

<script>
import AutoComplete from "./autocomplete.vue";
export default {
  components: {
    AutoComplete,
  },
};
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  background: black;
}
.search {
  &__form {
    max-width: 86.4rem;
    padding-bottom: 13.4rem;
    padding-top: 14.4rem;
    margin: 0 auto;
    & > :not(:last-child) {
      margin-bottom: 1.6rem;
    }
  }
  &__title {
    color: #fff;
    margin-bottom: 1.6rem;
    font-size: 4.6rem;
    line-height: 1.2;
    font-weight: 500;
  }
  &__brief {
    color: #fff;
    font-size: 1.8rem;
  }
}
</style>