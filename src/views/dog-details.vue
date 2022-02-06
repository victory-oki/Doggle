<template>
  <div class="content">
    <img :src="imageUrl" alt="Dog image" />
    <div class="description">
      <p class="breed-title">{{ this.breed }}</p>
      <div class="desc">
        <div
          class="desc__item"
          v-for="(desc, index) in descriptions"
          :key="index"
        >
          <p class="desc__title">{{ desc.title }}</p>
          <div class="desc__rating">
            <svg
              width="17"
              height="17"
              viewBox="0 0 17 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              v-for="(n, index) in 5"
              :key="index"
              :class="{ active: desc.rate >= index }"
            >
              <path
                d="M7.54647 1.31913C7.78365 0.589165 8.81635 0.589163 9.05353 1.31912L10.4346 5.56965C10.5407 5.8961 10.8449 6.11713 11.1881 6.11713H15.6574C16.4249 6.11713 16.7441 7.09928 16.1231 7.55042L12.5074 10.1774C12.2297 10.3792 12.1135 10.7368 12.2196 11.0632L13.6007 15.3137C13.8378 16.0437 13.0024 16.6507 12.3814 16.1996L8.76571 13.5726C8.48801 13.3708 8.11199 13.3708 7.83429 13.5726L4.21858 16.1996C3.59764 16.6507 2.76216 16.0437 2.99934 15.3138L4.38042 11.0632C4.48649 10.7368 4.37029 10.3792 4.0926 10.1774L0.476885 7.55042C-0.144058 7.09928 0.175063 6.11713 0.94259 6.11713H5.41186C5.75511 6.11713 6.05932 5.8961 6.16539 5.56965L7.54647 1.31913Z"
                fill="#80808096"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    breed: {
      type: String,
      default: "",
      required: true,
    },
    id: {
      type: String,
      default: "",
      required: true,
    },
  },
  data() {
    return {
      imageUrl: `https://images.dog.ceo/breeds/${this.breed}/${this.id}.jpg`,
      descriptions: [
        {
          title: "Adaptability",
          rate: Math.floor(Math.random() * (5 - 2) + 2),
        },
        {
          title: "All Around Friendliness",
          rate: Math.floor(Math.random() * (5 - 2) + 2),
        },
        {
          title: "Health And Grooming Needs",
          rate: Math.floor(Math.random() * (5 - 2) + 2),
        },
        {
          title: "Trainability",
          rate: Math.floor(Math.random() * (5 - 2) + 2),
        },
        {
          title: "Physical Needs",
          rate: Math.floor(Math.random() * (5 - 2) + 2),
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
p {
  margin: unset;
}
.active > path {
  fill: #ffd43a !important;
}
.content {
  display: flex;
  align-items: center;
  & > :not(:last-child) {
    margin-right: 10rem;
  }
  & > * {
    flex: 1;
  }
  img {
    width: 400px;
    height: 400px;
    object-fit: contain;
  }
}
.description {
  .breed-title {
    font-size: 2.4rem;
    margin-bottom: 2.4rem;
    text-transform: capitalize;
    font-weight: 500;
  }
  .desc {
    &__item {
      display: flex;
      align-items: center;
      & :not(:last-child) {
        margin-bottom: 1.8rem;
      }
      & > :not(:last-child) {
        margin-right: 3rem;
      }
    }
    &__title {
      font-size: 1.4rem;
    }
    &__rating {
      display: flex;
      align-items: flex-start;
    }
  }
}
</style>