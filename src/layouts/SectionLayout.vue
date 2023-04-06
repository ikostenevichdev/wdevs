<template>
  <section
    :class="[margin ? 'section_margin' : 'section_padding', name]"
    :mode="mode"
  >
    <div class="container section_holder">
      <div class="section_title">
        <h2 class="title" v-if="title">{{ title }}</h2>
      </div>
      <div class="section_content">
        <slot />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "SectionLayout",
  props: ["mode", "name", "title", "margin"],
};
</script>

<style lang="scss">
@import "../scss/_variables.scss";
@import "include-media/dist/_include-media.scss";

section[mode="dark"] {
  background: $black;
  color: $white;
}
.section {
  &_padding {
    padding: 60px 0;
    @include media(">=tablet") {
      padding: 120px 0;
    }
    @include media(">=widescreen") {
      padding: 240px 0;
    }
  }
  &_margin {
    margin: 60px 0;
    &:last-child{
      margin-bottom:0;
    }
    @include media(">=tablet") {
      margin: 120px 0;
    }
    @include media(">=widescreen") {
      margin: 240px 0;
    }
  }
}

.section_holder {
  @include media(">=tablet") {
    display: flex;
  }
}
.section_title {
  margin-bottom: 40px;
  @include media(">=tablet") {
    margin-bottom: 60px;
    width: 35%;
  }
  .title {
    margin: 0;
    position: relative;
    max-width: 240px;
    @include media("<=tablet") {
      line-height: 1.375;
    }
    @include media(">=tablet") {
      max-width: 340px;
    }
    &:before {
      content: "";
      display: block;
      width: 60px;
      height: 5px;
      background: $red;
      margin-bottom: 20px;
    }
  }
}
.section_content {
  line-height: 1.6;
  @include media(">=tablet") {
    width: 65%;
  }
  @include media(">=desktop") {
    display: flex;
    justify-content: space-between;
  }
}
</style>
