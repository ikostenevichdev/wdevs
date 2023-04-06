<template>
  <section class="home-banner">
    <div class="container">
      <h1 class="banner_title">{{ bannerTitle }}</h1>
      <div class="banner_image">
        <picture>
          <source
            media="(max-width: 480px)"
            srcset="@/assets/home-hero-image_small.webp"
          />
          <source
            media="(min-width: 480px) and (max-width: 1199px)"
            srcset="@/assets/home-hero-image_medium.webp"
          />
          <source srcset="@/assets/home-hero-image_large.webp" />

          <source
            media="(max-width: 480px)"
            srcset="@/assets/home-hero-image_small.jpg"
          />
          <source
            media="(min-width: 480px) and (max-width: 1199px)"
            srcset="@/assets/home-hero-image_medium.jpg"
          />
          <source srcset="@/assets/home-hero-image_large.jpg" />

          <img
            src="@/assets/home-hero-image_large.jpg"
            :alt="bannerTitle"
            loading="lazy"
            width="1760"
            height="900"
          />
        </picture>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      bannerTitle:
        "Web, Mobile, Software, Home Automation Systems, E-commerce solutions.",
    };
  },
};
</script>
<style lang="scss">
@import "../scss/_variables.scss";
@import "include-media/dist/_include-media.scss";

.home-banner {
  padding-top: 60px;
  //   @include media(">=desktop") {
  //     padding-top: 60px;
  //   }
  .banner_title {
    font-size: 32px;
    line-height: 40px;
    max-width: 890px;
    text-transform: uppercase;
    text-align: center;
    margin: 0 0 60px;
    @include media(">=tablet") {
      font-size: 40px;
      line-height: 48px;
      text-align: left;
      margin: 0 80px 60px 0;
    }
    @include media(">=tablet-xl") {
      font-size: 56px;
      line-height: 64px;
      margin: 0 100px 60px 0;
    }
    @include media(">=desktop") {
      font-size: 72px;
      line-height: 80px;
      max-width: 1150px;
      margin-bottom: 80px;
    }
  }
  .banner_image {
    margin: 0 -16px;
    @include media(">=tablet") {
      margin: 0 -40px;
    }
    @include media(">=tablet-xl") {
      margin: 0;
    }
  }
}
</style>
