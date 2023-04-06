<template @scroll="fetchHistory">
  <section class="story-home">
    <div class="container">
      <h1 class="story-title">Our Success Story</h1>
    </div>
  </section>

  <section class="story-years">
    <template v-for="item in our_story_content" :key="item.years">
      <div class="container story-years__item">
        <div
          class="story-years__container"
          :class="
            item.years === our_story_content[our_story_content.length - 1].years
              ? 'story-years__container--not-padding'
              : ''
          "
        >
          <div class="story-year">
            <img
              v-svg-inline
              :data-src="require('../assets/icons/circle.svg')"
              alt=""
            />
            {{ item.years }}
          </div>
          <div class="story-text" v-html="item.text"></div>
        </div>
      </div>
    </template>
    <div class="container story-years__item">
      <div class="story-years__container story-years__container--not-border">
        <div class="story-year"></div>
        <div class="story-text">
          <p>
            <em
              >{{text}}</em
            >
          </p>
          <ContactsButton size="large" :desc="text" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ContactsButton from "@/components/ContactsButton.vue";
import { mapState } from "vuex";

export default {
  data(){
    return{
      text:'It would take ages to describe all the tricky spots we’ve found ourselves in and how we forged our way through them, but we do have some really great stories to tell and would be happy to share them with you in person, so feel free to contact us to hear more.'
    }
  },
  components: {
    ContactsButton,
  },
  computed: {
    ...mapState(["our_story_content"]),
  },
   created(){
    window.history.scrollRestoration = "auto";
  }
};
</script>

<style lang="scss">
@import "../scss/_variables.scss";
@import "include-media/dist/_include-media.scss";

.story-home {
  padding: 60px 0;
  @include media(">=desktop") {
    padding: 120px 0;
  }
  @include media(">=widescreen") {
    padding: 240px 0 120px;
  }
}
.story-title {
  text-transform: uppercase;
  color: $black;
  line-height: 111%;
  margin: 0;
  font-size: 34px;
  @include media(">=tablet") {
    font-size: 50px;
  }
  @include media(">=tablet-xl") {
    font-size: 60px;
  }
  @include media(">=desktop") {
    font-size: 72px;
  }
}
.story-years__container {
  display: flex;
  align-items: flex-start;
  padding-bottom: 80px;
  border-left: 5px solid $red;
  flex-direction: column;
  @include media(">=phone") {
    flex-direction: row;
  }
  &--not-border {
    border: none;
  }
  &--not-padding {
    padding-bottom: 0;
  }
}
.story-years__item {
  &:last-child {
    margin-top: 0;
    @include media(">=phone") {
      margin-top: 0;
    }
    .story-years__container{
      padding-bottom: 0;
    }
  }
}
.story-year {
  width: 100%;
  color: $base-text-color;
  font-weight: bold;
  font-size: 22px;
  padding-left: 20px;
  position: relative;
  padding-top: 12px;
  @include media(">=phone") {
    width: 35%;
  }
  @include media(">=tablet") {
    font-size: 30px;
    padding-top: 6px;
  }
  @include media(">=tablet-xl") {
    font-size: 40px;
    padding-top: 0;
    padding-left: 30px;
  }
}
.year-circle {
  position: absolute;
  left: -20px;
  top: 9px;
}
.story-text {
  width: 100%;
  padding-top: 15px;
  padding-left: 20px;
  @include media(">=phone") {
    width: 65%;
    padding-left: 0;
  }
  @include media(">=tablet") {
    padding-top: 10px;
  }
   a {
    text-decoration: none;
    color: $red;
    &:hover {
      text-decoration: underline;
    }
  }
  ul {
    padding-left: 30px;
    margin: 0 0 40px;
    li {
      margin-bottom: 5px;
    }
  }
  p {
    margin-bottom: 32px;
    &:last-child {
      margin-bottom: 0;
    }
  }
}
</style>
