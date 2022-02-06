<template>
  <div class="content">
    <div class="nav">
      <router-link class="logo" to="/">Doggle</router-link>
      <AutoComplete :attributes="attributes" />
    </div>
  </div>
</template>

<script>
import AutoComplete from "./autocomplete.vue";
export default {
  components: {
    AutoComplete,
  },
  data() {
    return {
      attributes: { filled: true, rounded: true },
    };
  },
};
</script>

<style lang="scss" scoped>
p {
  margin: unset;
}
.content {
  width: 100%;
  position: sticky;
  top: 0;
  background: #fff;
  z-index: 1000;
}
.nav {
  padding: 1.6rem 0;
  max-width: 122rem;
  margin: 0 auto;
  display: flex;
  align-items: center;
  & > :not(:last-child) {
    margin-right: 1.6rem;
  }
  & >:last-child{
      flex: 1;
  }
}
.logo {
  font-weight: 500;
  text-decoration: unset;
  font-size: 1.6rem;
  color: #000;
}
</style>