<template>
  <section-layout name="about" title="About" id="about">
    <div class="column">
      <p>
        With so many IT companies out there claiming to provide the best or most
        unique service, it’s hard to determine who to rely on. Each IT company
        will attempt to describe their strengths, despite the fact that it’s
        providing the same service which many other companies provide too.
      </p>
      <ul class="projects-list">
        <li>There are many clients who looks for innovative IT services</li>
        <li>
          There are many clients who have suffered due to poor service delivery
          and are looking for innovative IT development companies to help them
          fix the situation ASAP
        </li>
        <li>
          There are also many clients who are looking to save money on expensive
          developers
        </li>
      </ul>
      <p>
        Each day we rescue companies of all sizes that started off on the right
        foot by seeking an innovative IT solution - only to end up with
        substandard development which forced them to squander even more
        resources on finding a better solution in a hurry!
      </p>
    </div>

    <div class="column">
      <p>
        At WDevs, we believe that the true key to a successful IT collaboration
        is to combine the necessary experience with a cost-effective budget
        designed to meet all of your expectations in a fully supported one-stop
        solution.
      </p>
      <p>
        For more than 15 years, we&rsquor;ve served as the backbone to some of
        the most notable companies and large scale development agencies on the
        planet. We eagerly share our vast collective experience, opening our
        doors to partnerships and collaborative projects, and look forward to
        hearing how we can better serve your company's needs.
      </p>
      <p>
        <em>{{text}}</em>
      </p>
      <ContactsButton size="large" :desc="text"/>
    </div>
  </section-layout>
</template>
<script>
import SectionLayout from "@/layouts/SectionLayout";
import ContactsButton from "./ContactsButton.vue";
export default {
  data(){
    return{
      text:'Want to know why we think we’re the best choice for all your IT requirements? Feel free to contact us directly and we’ll happily help you see the light!'
    }
  },
  components: {
    SectionLayout,
    ContactsButton,
  },
};
</script>

<style lang="scss">
@import "../scss/_variables.scss";
@import "include-media/dist/_include-media.scss";

.column {
  @include media(">=desktop") {
    width: calc(50% - 40px);
    &:first-child {
      margin-right: 80px;
    }
  }
  .projects-list {
    margin: 0 0 32px;
    padding-left: 30px;
    @include media(">=tablet-xl") {
      margin-bottom: 60px;
    }
    @include media(">=desktop") {
      margin-bottom: 0;
    }
    li {
      margin-bottom: 32px;
    }
  }
  a {
    color: $red;
  }
  p {
    margin-bottom: 32px;
  }
  .button {
    margin-top: 8px;
  }
}
</style>
