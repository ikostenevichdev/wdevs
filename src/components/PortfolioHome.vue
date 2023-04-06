<template>
  <section class="portfolio-home">
    <div class="container">
      <h1 class="portfolio-home__title">
        The work we are proud to demonstrate
      </h1>
      <p class="portfolio-home__text">
        Each day we work on building exciting projects, however, the more
        intensive and important a project is, the less a client is usually
        willing to share that he outsourced it.<br />
        We have executed many white label projects under an NDA clause and we
        are therefore not permitted to disclose the details, but right now there
        is someone out there proudly demonstrating a project which our team has
        built for them.
      </p>
      <p class="portfolio-home__text">
        Even though many of our dynamic and most prominent projects are hidden
        from our public portfolio, there are still some that we may proudly
        demonstrate.<br />Since the inception of our company 15+ years ago, we
        have forged ahead while innovating and growing every step of the way,
        and we firmly believe that regardless of what you are looking for - we
        have probably already built something similar.
      </p>
      <p class="portfolio-home__cite">
        {{buttonText}}
      </p>
      <ContactsButton  size="large" :desc="buttonText" />
      <p class="portfolio-home__cite">
        If we are not able to demonstrate something similar to what you are
        looking for, we will be happy to dedicate 8 hours of
        development/consulting/analytics time FOR FREE!
      </p>
      <a class="portfolio-home__link" @click="showModal=true">
        {{linkText}}
      </a>
      <ModalContact
    v-if="showModal"
    @close="showModal = false"
    :startProjectModal="false"
    :moreTextGetInTouch="linkText"
    />
    </div>
  </section>
</template>
<script>

import ContactsButton from "./ContactsButton.vue";
import ModalContact from "./ModalContact.vue";
export default {
  components: {
    ContactsButton,
    ModalContact
  },
  data(){
    return{
      showModal: false,
      buttonText:'Contact us directly with your requirements and we will show you why we are always/usually ahead of the game.',
      linkText:'Apply here for the services of one of our available developers for an entire working day - at absolutely NO COST!'
    }
  }
};
</script>
<style lang="scss">
@import "../scss/_variables.scss";
@import "include-media/dist/_include-media.scss";

.portfolio-home {
  padding: 60px 0 0;
  @include media(">=desktop") {
    padding: 120px 0 0;
  }
  @include media(">=widescreen") {
    padding: 240px 0 0;
  }
  &__title {
    text-transform: uppercase;
    color: $black;
    font-size: 32px;
    text-align: center;
    line-height: 111%;
    margin-bottom: 40px;
    @include media(">=tablet") {
      font-size: 52px;
      margin-bottom: 50px;
      text-align: left;
    }
    @include media(">=desktop") {
      font-size: 62px;
      margin-bottom: 60px;
      max-width: 1150px;
    }
    @include media(">=widescreen") {
      font-size: 72px;
      margin-bottom: 80px;
    }
  }
  &__text {
    max-width: 1150px;
    margin-bottom: 40px;
    color: $base-text-color;
    font-size: 18px;
    line-height: 167%;
    font-weight: bold;
    @include media(">=tablet") {
      font-size: 22px;
    }
    @include media(">=desktop") {
      font-size: 24px;
    }
  }
  &__cite {
    margin-top: 40px;
    max-width: 1150px;
    font-style: italic;
    font-size: 18px;
    line-height: 160%;
    color: $base-text-color;
    @include media(">=desktop") {
      font-size: 20px;
    }
  }
  &__link{
    color:$red;
    text-decoration: none;
    &:hover{
      text-decoration: underline;
    }
  }

}
</style>
