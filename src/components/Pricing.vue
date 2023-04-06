<template>
  <section-layout name="home-pricing" mode="dark" title="Pricing">
    <div class="row">
      <div class="column">
      <p>Our prices vary from around <span class="home-pricing__accent">$40/h.</span></p>
      <p>
       The prices "vary" because they  strongly depend on  particular technologies, since the developers wages vary significantly depending on the necessary requirements to get the job done.  We may tell you the exact costs for a <router-link to="/magento/#mg_prices" style="color:#EB5757">specific technology abracadbra</router-link>.
      </p>
      <p>
        We are always flexible and ready to offer discounts and even invest in a prospective project,  however, there is no way to set an exact  price structure for all the technologies we offer.  
      </p>
    </div>
    <div class="column">
      <p><em>{{text}}</em></p>
      <p>
      <ContactsButton size="large" :desc="text"/>
      </p>
      <p>
      We'll try our best to satisfy your request and to find a way to sustain  a mutually beneficial collaboration.
      </p>
    </div>
  </div>
  </section-layout>
</template>
<script>
import SectionLayout from "@/layouts/SectionLayout";
import ContactsButton from "./ContactsButton.vue"

export default {
  components: {
    SectionLayout,
    ContactsButton
  },
  data() {
    return {
       text:`Feel free to ask us for the prices directly (please outline the stack of technologies that you'd like us to cover)`,
    };
  },
};
</script>

<style lang="scss">
@import "@/scss/_variables.scss";
@import "include-media/dist/_include-media.scss";
.home-pricing{
  &__accent{
    color:$red;
  }
  a{
    text-decoration: none;
    &:hover{
      text-decoration: underline;
    }
  }
}
</style>
