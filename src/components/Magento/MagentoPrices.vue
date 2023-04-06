<template>
  <section-layout name="pricing" mode="dark" title="Pricing">
    <ul id="pricing_list" class="pricing_list">
      <li class="pricing_item" v-for="item in pricing" :key="item.id">
        <div class="pricing_content">
          <h3 class="pricing_title">
            {{ item.title }}
            <span class="pricing_service">{{ item.service }}</span>
            <span class="pricing_time">{{ item.time }}</span>
          </h3>
          <div class="pricing_rate">
            <span>Monthly rate:</span>
            <span class="pricing_price">{{ item.price }}</span>
          </div>
        </div>
      </li>
    </ul>

    <ul id="pricing_description" class="pricing_description">
      <li class="description_item" v-for="item in description" :key="item.id">
        <h3 class="description_title">{{ item.title }}</h3>
        <p class="description_content" v-html="item.text"></p>
      </li>
    </ul>
  </section-layout>
</template>

<script>
import SectionLayout from "@/layouts/SectionLayout";

export default {
  components: {
    SectionLayout,
  },
  data() {
    return {
      pricing: [
        {
          id: "01",
          title: "Standard",
          service: "All your services needs",
          time: "40 hrs per month",
          price: "$2,500",
        },
        {
          id: "02",
          title: "Premium",
          service: "15 min response time*",
          time: "80 hrs per month",
          price: "$4,000",
        },
        {
          id: "03",
          title: "Custom",
          service: "A La Carte serviced",
          time: "Fixed cost; time & materials; individual discounts and bulk loading discounts",
          price: "$40/hr**",
        },
      ],
      description: [
        {
          id: "01",
          title: "First Aid",
          text: "Resolving critical, server, crashes, and 3rd party module issues",
        },
        {
          id: "02",
          title: "Security",
          text: "Magento updates, security patch installation, server security monitoring, vulnerability analysis",
        },
        {
          id: "03",
          title: "Performance",
          text: "Analytics; theme improvement, DB tuning, server tuning, cache tuning",
        },
        {
          id: "04",
          title: "Customization",
          text: "From 3rd party service integration to overwrite or expansion of Magento functionality",
        },
         {
          id: "05",
          title: "Extensions",
          text: "Installation, configuration, customization, development",
        },

         {
          id: "06",
          title: "Themes",
          text: "Optimizations; improvements, configuration; design",
        },
          {
          id: "07",
          title: "Migrations",
          text: "From/to other platforms; data import/export",
        },
        {
          id: "08",
          title: "Consultations",
          text: "Expert advice; assistance in setup; code review",
        },
          {
          id: "09",
          text: "* Within agreed working hours <br/> ** Instances of bulk loading",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
@import "@/scss/_variables.scss";
@import "include-media/dist/_include-media.scss";
.pricing {
  .section_title {
  .title {
    &:before {
      content: "";
      display: block;
      width: 60px;
      height: 5px;
      background: $orange;
      margin-bottom: 20px;
    }
  }
}
  padding-top: 60px;
  padding-bottom: 40px;
  @include media(">=tablet") {
    padding-top: 120px;
    padding-bottom: 60px;
  }
  @include media(">=tablet-xl") {
    padding-bottom: 72px;
  }
  @include media(">=desktop") {
    padding-bottom: 160px;
  }
   @include media(">=widescreen") {
    padding-top: 240px;
    padding-bottom: 160px;
  }
  .section_content {
    display: block;
  }
}
.pricing_list {
  @extend %listreset;
  width: 100%;
}
.pricing_item {
    margin: 0 0 60px;
  @include media(">=tablet-xl") {
      margin: 0 0 80px;
  }
}
.pricing_title {
  width: 100%;
  margin: -4px 20px 0 0;
  span {
    display: block;
    font-size: 20px;
    font-weight: 400;
    &.pricing_service {
      margin-top: 17px;
    }
  }
}
.pricing_content {
  display: flex;
  justify-content: space-between;
  border-top: 1px solid $white;
  padding: 40px 0 0;
  .pricing_rate {
    white-space: nowrap;
  }
  .pricing_price {
    display: block;
    font-weight: bold;
    font-size: 40px;
    line-height: 1.1;
    color: $orange;
  }
}
.pricing_description {
  border-top:1px solid $white;
  @extend %listreset;
  margin-top: 60px;
  @include media(">=tablet-xl") {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
}
.description_item {
  border:none;
  &:not(:last-child) {
    margin: 0;
  }
  &:last-child{
    margin-bottom: 48px;
  }
  @include media(">=tablet-xl") {
    width: calc(50% - 20px);
    &:nth-child(2n-1) {
      margin-right: 20px;
      margin-bottom: 0px;
    }
    &:not(:last-child) {
      margin-bottom: 0px;
    }
  }
  @include media(">=desktop") {
    width: calc(50% - 40px);
    &:nth-child(2n-1) {
      margin-right: 80px;
    }
    &:not(:last-child) {
      margin-bottom: 0px;
    }
  }
}
p.description_content:not(:last-child){
      margin:0;
  }
.description_title {
  margin: 36px 0 0px;
}
</style>
