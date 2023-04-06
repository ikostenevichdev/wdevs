<template>
  <section class="magento-banner">
    <div class="container">
      <img
        class="magento-logo"
        v-svg-inline
        :data-src="require('@/assets/icons/magento-logo.svg')"
        alt="Magento"
      />
      <h1 class="banner_title">{{ bannerTitle }}<br />{{ bannerTitle2 }}</h1>
      <div class="banner_image">
        <picture>
          <source
            media="(max-width: 480px)"
            srcset="
              @/assets/magento/magento-banner_small.webp    1x,
              @/assets/magento/magento-banner_small@2x.webp 2x
            "
          />
          <source
            media="(max-width: 480px)"
            srcset="
              @/assets/magento/magento-banner_small.jpg    1x,
              @/assets/magento/magento-banner_small@2x.jpg 2x
            "
          />
          <source
            media="(min-width: 480px) and (max-width: 1199px)"
            srcset="
              @/assets/magento/magento-banner_medium.webp    1x,
              @/assets/magento/magento-banner_medium@2x.webp 2x
            "
          />
          <source
            media="(min-width: 480px) and (max-width: 1199px)"
            srcset="
              @/assets/magento/magento-banner_medium.jpg    1x,
              @/assets/magento/magento-banner_medium@2x.jpg 2x
            "
          />
          <source
            srcset="
              @/assets/magento/magento-banner.webp    1x,
              @/assets/magento/magento-banner@2x.webp 2x
            "
          />
          <source
            srcset="
              @/assets/magento/magento-banner.jpg    1x,
              @/assets/magento/magento-banner@2x.jpg 2x
            "
          />
          <img
            src="@/assets/magento/magento-banner.jpg"
            :alt="bannerTitle"
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
      bannerTitle: "Magento",
      bannerTitle2: "e-commerce Solutions",
    };
  },
};
</script>
<style lang="scss">
@import "../../scss/variables";
@import "include-media/dist/_include-media.scss";

.magento-banner {
  padding-top: 60px;
  @include media(">=desktop") {
    padding-top: 60px;
  }
  text-align: center;
  .banner_title {
    font-size: 32px;
    line-height: 111%;
    text-transform: uppercase;
    margin: 0 0 40px;
    @include media(">=tablet") {
      font-size: 40px;
      margin: 0 0 80px;
    }
    @include media(">=tablet-xl") {
      font-size: 56px;
      margin: 0 0 80px;
    }
    @include media(">=desktop") {
      font-size: 72px;
      margin: 0 0 80px;
    }
  }
  .magento-logo {
    width: 50px;
    @include media(">=tablet-xl") {
      width: 87px;
    }
  }
}
</style>
