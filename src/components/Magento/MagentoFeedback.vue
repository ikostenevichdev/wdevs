<template>
  <section class="magento-feedback">
    <h2 class="magento-feedback__title">{{ title }}</h2>
    <agile ref="carousel" :options="myOptions">
      <div class="mf__slide" v-for="item in magento_feedbacks" :key="item.id">
        <div class="mf__name">
          <p>{{ item.name }}</p>
          <p>{{ item.profession }}</p>
        </div>
        <div class="mf__review">
          <div v-html="item.content" class="mf__review__text"></div>
        </div>
        <div class="mf__review-info">
          <p v-if="item.company">{{ item.company }}</p>
          <p v-if="item.address">{{ item.address }}</p>
          <p v-if="item.phone">{{ item.phone }}</p>
          <p v-if="item.linkSite" v-html="item.linkSite"></p>
          <p v-if="item.email">{{ item.email }}</p>
        </div>
      </div>
    </agile>
    <button
      class="agile__nav-button agile__nav-button--prev"
      @click.passive="$refs.carousel.goToPrev()"
    >
      <img
        v-svg-inline
        :data-src="require('@/assets/icons/prev-arrow.svg')"
        alt=""
      />
    </button>
    <button
      class="agile__nav-button agile__nav-button--next"
      @click.passive="$refs.carousel.goToNext()"
    >
      <img
        v-svg-inline
        :data-src="require('@/assets/icons/next-arrow.svg')"
        alt=""
      />
    </button>
  </section>
</template>

<script>
import { VueAgile } from "vue-agile";
import { mapState } from "vuex";

export default {
  agile: VueAgile,
  data() {
    return {
      title: "What customers say about us",
      myOptions: {
        dots: false,
        navButtons: false,
        responsive: [
          {
            breakpoint: 320,
            settings: {
              dots: true,
            },
          },
          {
            breakpoint: 992,
            settings: {
              dots: false,
            },
          },
        ],
      },
    };
  },
  computed: {
    ...mapState(["magento_feedbacks"]),
  },
};
</script>

<style lang="scss">
@import "@/scss/_variables.scss";
@import "include-media/dist/_include-media.scss";

.magento-feedback {
  background: $black;
  position: relative;
  padding: 60px 0;
  max-height: 1105px;
  @include media(">=tablet") {
    padding: 120px 0;
  }
  @include media(">=desktop") {
    padding: 240px 0;
  }
}
.magento-feedback__title {
  text-align: center;
  color: $white;
  font-size: 32px;
  margin-bottom: 32px;
  padding: 0 16px;
  @include media(">=tablet") {
    font-size: 40px;
  }
  &:before {
    content: "";
    display: block;
    width: 60px;
    height: 5px;
    background: $orange;
    margin: 0 auto 20px;
  }
}
.mf__slide {
  text-align: center;
  color: $white;
}
.mf__name {
  max-width: 500px;
  margin: 0 auto;
  padding: 0 15px;
  @include media(">=tablet-xl") {
    margin-top: 40px;
  }
  @include media(">=desktop") {
    margin-top: 80px;
  }
  p {
    margin-bottom: 10px;
  }
}
.mf__review {
  height: 200px;
  max-width: 1300px;
  margin: 40px auto;
  font-weight: bold;
  padding: 0 16px;
  line-height: 167%;
  font-size: 20px;
  -webkit-mask-image: linear-gradient(to bottom, $black 70%, transparent 100%);
  mask-image: linear-gradient(to bottom, $black 70%, transparent 100%);
  background-clip: text;

  @include media(">=tablet-xl") {
    height: 290px;
  }

  &__text {
    height: 200px;
    padding: 0 20px 40px;
    overflow-y: auto;

    @include media(">=tablet-xl") {
      height: 290px;
    }
    &::-webkit-scrollbar {
      display: block;
      width: 5px;
    }
    &::-webkit-scrollbar-thumb {
      background-color: $scrollTrumb;
      border: 1px solid inherit;
    }
    &::-webkit-scrollbar-track {
      margin-top: 10px;
      margin-bottom: 40px;
      border: 1px solid $scrollTrack;
    }
  }

  a {
    color: $orange;
    text-decoration: none;
  }

  @include media(">=tablet") {
    padding: 0 40px;
    font-size: 18px;
  }

  @include media(">=tablet-xl") {
    font-size: 20px;
    padding: 0 100px;
  }

  @include media(">=desktop") {
    padding: 0 100px;
    font-size: 24px;
  }
}
.mf__review-info {
  max-width: 570px;
  padding: 0 15px;
  margin: 0 auto;

  p {
    padding: 0 0 3px 0;
    margin: 0;
  }
  a {
    color: $orange;
  }
}
.agile__nav-button {
  position: absolute;
  padding: 0;
  top: calc(50% - 30px);
  width: 60px;
  height: 60px;
  border: none;
  cursor: pointer;
  background: none;
  display: none;
  @include media(">=tablet-xl") {
    display: block;
  }
  svg {
    transition: 0.3s;
  }
  &--prev {
    left: 20px;
    @include media(">=widescreen") {
      left: 80px;
    }
  }
  &--next {
    right: 20px;
    @include media(">=widescreen") {
      right: 80px;
    }
  }
}
.agile__nav-button--prev:hover svg {
  transform: translateX(-10px);
}
.agile__nav-button--next:hover svg {
  transform: translateX(10px);
}
.agile__dot {
  margin: 0 5px;
  button {
    width: 16px;
    height: 16px;
    padding: 0;
    border-radius: 50%;
    background: $white;
    border: none;
  }
  &--current {
    button {
      background: darken($white, 60%);
    }
  }
}
</style>
