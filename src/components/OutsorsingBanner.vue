<template>
  <section
    class="outsourcing-banner"
    v-webp:bg="require('@/assets/outsourcing/outsorsing-banner-bg.webp')"
  >
    <div class="container">
      <h1 class="banner_title">Not Keen To Consider Outsourcing?</h1>
      <p class="banner_subtitle">
        The development work is always something that is better to manage
        in-house because when you talk to the developers in-person you have
        better control of the work he does.
      </p>
    </div>
  </section>
</template>
<script></script>
<style lang="scss">
@import "../scss/_variables.scss";
@import "include-media/dist/_include-media.scss";

.outsourcing-banner {
  background-image: url("../assets/outsourcing/outsorsing-banner-bg.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  padding-top: 120px;
  padding-bottom: 80px;
  color: $white;
  @include media(">=phone") {
    margin-bottom: 60px;
  }
  @include media(">=desktop") {
    padding-top: 240px;
  }
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
  .banner_subtitle {
    font-size: 20px;
    font-weight: 700;
    line-height: 40px;
    max-width: 1150px;
    margin: 0;
    text-align: center;
    @include media(">=tablet") {
      width: 90%;
      font-size: 24px;
      text-align: left;
    }
  }
}
</style>
