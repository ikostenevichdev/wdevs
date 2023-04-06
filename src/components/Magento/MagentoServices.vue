<template>
  <section-layout
    name="magento-service"
    title="Magento services that we provide"
  >
    <ul id="technologies_list" class="magento-service_list">
      <li class="magento-service_item" v-for="item in items" :key="item.id">
        <h3 class="magento-service_title">
          <span class="text">{{ item.title }}</span>
          <span class="count">{{ item.id }}</span>
        </h3>
        <div class="magento-service_content" v-html="item.content"></div>
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
      items: [
        {
          id: "01",
          title: "Magento performance tuning and Optimization",
          content: `
                            <p>There are many Magento e-commerce sites owners who complain on slow site performance. We provide such services as complex Magento sites optimization based on Server optimization, DB tuning, HTML/Pictures optimization, advanced caching techniques, etc.</p>
                            <p><a href="#">Find out more about our tuning and optimisation process</a></p>
                        `,
        },
        {
          id: "02",
          title: "Magento websites setup and tuning",
          content: `
                            <ul>
                                <li>Assistance in selecting optimal hosting</li>
                                <li>Magento sites deployment</li>
                                <li>Magento themes design and creation</li>
                                <li>Magento installation on cloud-based services</li>
                                <li>Themes setup, optimization and modification</li>
                                <li>Multi-language setup</li>
                                <li>Multi-domains setup</li>
                                <li>Integrating various payment gateways</li>
                                <li>Suggesting the most appropriate 3rd party extensions and assisting in setting them up</li>
                            </ul>
                        `,
        },
        {
          id: "03",
          title: "Magento support and security patching",
          content: `
                            <p>Magento is a highly secure platform, though it is open source platform and there are many hackers all over the world trying to find holes and vulnerabilities in Magento sources to steal essential data. Therefore, Magento devs constantly update Magento sources in order to protect Magento sites owners from hacks. Generally, it’s not a big deal to install Magento security patches. However, some clients, especially if their Magento instance is widely customized, expect difficulties with installing secure patches. Therefore, sometimes it’s worth to entrust installing Magento patches to professionals, who are able to resolve any potential issue caused by the installed patches.</p>
                        `,
        },
        {
          id: "04",
          title: "Custom development for Magento",
          content: `
                            <p>Even when Magento community is one of the widest modern development communities and a lot of extension are available there, sometimes the e-shops owners are looking forward to integrate something completely unusual into their Magento sites. The proper way of expanding Magento functionality is to develop such extensions that would allow the clients to get the new features that they desire. Sometimes it’s enough just to take a 3rd party extension and add the required functionality to it. However, sometimes it is not really possible to find an appropriate extension and it has to be developed from scratch. Having great experience in working with 3rd party extensions, as well as in creating the new ones, our specialists are always happy to suggest an appropriate 3rd party extension or to develop a new one.</p>
                        `,
        },
        {
          id: "05",
          title: "3rd party modules customization",
          content: `
                            <p>We closely cooperate with Aheadworks, the company that has been at Magento extensions development market for over 14 years. They have developed hundreds of extensions. Many clients ask them to make custom modifications of their extensions. However, Aheadworks is focused on new modules development only. Therefore, they subcontract some work to us to manage extensions customisation. Consequently, we are experienced in many various plugins and extensions structure, as well as in customizing them.</p>
                        `,
        },
        {
          id: "06",
          title: "3rd party services integration",
          content: `
                            <p>With the growth of business, e-shops owners are facing the problem of managing a lot of purchases that require shipment. There are many online traders who get their products from various suppliers all over the world, and their price should be revised pretty often according to the suppliers’ price. With the growth of e-commerce business it’s getting reasonable to entrust the shipment to a fulfillment center. We have reach experience in integrating 3rd party services such as suppliers data feeds of any complexity, as well as various POS systems.</p>
                        `,
        },
        {
          id: "07",
          title: "Migration from different e-commerce platforms",
          content: `
                            <p>Magento is the most powerful open source e-commerce platform available on the market. Magento provides all necessary features out of the box to set up an e-shop of any complexity. There are hundreds of thousands of 3rd party extensions that allows you to expand rich Magento functionality up to no limits without involving expensive coders. Just minimal technical background is necessary to instal and set up a 3rd party extension. Moreover, there is a big community of Magento coders who can always assist and support the client if he is eager to build some extraordinary functionality. Therefore, there are more and more clients switching to Magento from the own custom solutions, as well as old shopping carts (XCart, OsCommerce, VirtueMart, etc). We have reach experience in migrating existing e-commerce solutions to Magento platform.</p>
                        `,
        },
        {
          id: "08",
          title: "Switching from Magento 1.X to Magento 2.X",
          content: `
                            <p>Magento 2 is not just an update of previous Magento version . Magento 2.0 provides a built-in data migration tool and it’s pretty easy to migrate relatively simple M1 sites to M2. However, if M1 site is highly customized, some functionality might require to be completely rebuilt, or sometimes it even requires to be developed from scratch. Magento 2 is a completely new platform that has been developed using totally different technology that offers advanced features and modern backend UX. Some clients doubt whether they need to migrate from M1 to M2 and they might have sense. No doubt that M1 will be out of date one day, therefore, if the client is looking to promote and develop his e-commerce solution, then why wait?</p>
                        `,
        },
      ],
    };
  },
};
</script>

<style lang="scss">
@import "@/scss/_variables.scss";
@import "include-media/dist/_include-media.scss";

.magento-service {
  .title {
    max-width: 100%;
    @include media(">=tablet") {
      max-width: 340px;
      padding-right: 15px;
    }
    &:before {
      background: $orange;
    }
  }
}
.magento-service_list {
  @extend %listreset;
  @include media(">=desktop") {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
}
.magento-service_item {
  border-top: 1px solid $base-text-color;
  &:not(:last-child) {
    margin: 0 0 25px;
    @include media(">=tablet") {
      margin: 0 0 60px;
    }
  }
  @include media(">=tablet-xl") {
    &:not(:last-child) {
      margin: 0 0 100px;
    }
  }
  @include media(">=desktop") {
    width: calc(50% - 40px);
    &:nth-child(2n-1) {
      margin-right: 80px;
    }
    &:not(:last-child) {
      margin-bottom: 80px;
    }
  }
}
.magento-service_title {
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
  @include media(">=tablet") {
    margin: 36px 0;
  }
  .text {
    margin-right: 10px;
  }
  .count {
    color: $orange;
  }
}
.magento-service_content {
  p {
    margin-bottom: 20px;
    @include media(">=tablet") {
      margin-bottom: 32px;
    }
    &:last-child {
      margin-bottom: 0;
    }
  }
  a {
    color: $orange;
  }
  ul {
    @extend %listreset;
    padding-left: 30px;
    list-style: disc;
    margin-bottom: 5px;
    @include media(">=tablet") {
      margin-bottom: 20px;
    }
    li {
      margin-bottom: 5px;
      @include media(">=tablet") {
        margin-bottom: 5px;
      }
    }
  }
}
</style>
