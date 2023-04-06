<template>
  <section-layout
    name="technologies"
    mode="dark"
    title="Technologies and&nbsp;services which we provide"
  >
    <ul id="technologies_list" class="technologies_list">
      <li class="technologies_item" v-for="item in items" :key="item.id">
        <h3 class="technologies_title">
          <span class="text">{{ item.title }}</span>
          <span class="count">{{ item.id }}</span>
        </h3>
        <div class="technologies_content" v-html="item.content"></div>
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
          title: "Web (server side)",
          content: `
                            <ul>
                                <li><strong>PHP</strong> - Zend (2), YII (2), Laravel (2), Simphony (2) and other well known frameworks</li>
                                <li><strong>Node.JS</strong> - Express.js, Hapi.js, socket.io, Mojito, Sail.js Meteor, Crafty, D3 etc</li>
                                <li><strong>.NET</strong> - We have full time dedicated teams</li>
                                <li><strong>Perl</strong> - The team was set up for the long term client</li>
                                <li><strong>DB</strong> - MySQL, Postgree, Mongo, SQLite, MS SQL, NoSQL</li>
                            </ul>
                        `,
        },
        {
          id: "02",
          title: "JavaScript",
          content: `
                            <p>All server-side developers are also experienced in front-end development and they are accustomed to developing single page apps.</p>
                            <p>Angular, React, Backbone, JQuery, D3 and many other modern frameworks</p>
                        `,
        },
        {
          id: "03",
          title: "HTML/CSS",
          content: `
                            <p>Many back/front-end devs are experienced in HTML, however we have a separate HTML slicers department that allows us to increase frontend development speed, as well as reducing development costs.</p>
                            <p>Bootstrap, SASS, LESS, 960 grid, Blueprint, Material, Semanti, Sencha (touch), etc.</p>
                        `,
        },
        {
          id: "04",
          title: "Servers administration",
          content: `
                            <p>(V)DS server as well as cloud based services setup and optimization</p>
                            <p>Rackspace cloud, AWS, Azure </p>
                            <p>Setup of VPN, DNS, DHCP, Mail (we developed a number of sales  and traffic generation systems and tools)</p>
                        `,
        },
        {
          id: "05",
          title: "Magento",
          content: `
                            <p>We have an incredibly experienced team of Magento specialists who work on some of the most complex customization and 3rd party Magento extension projects</p>
                            <a href="/magento" class="link">Read more</a>
                        `,
        },
        {
          id: "06",
          title: "Design",
          content: `
                            <p>While design isn’t our main focus, we do have a very experienced team of designers to handle all of your needs</p>
                            <a href="/portfolio" class="link">See examples</a>
                        `,
        },
        {
          id: "07",
          title: "Testing",
          content: `
                            <p> Black/White box, automatic and manual, A/B testing </p>
                        `,
        },
        {
          id: "08",
          title: "Other",
          content: `
                            <p>The list of technologies mentioned above is far from complete, they are merely the most recently used technologies. Besides the above-mentioned list, we are also experienced in many uncommon technologies (such as NetLinx, TP4, TP5, TVML), as well as in working with various specific devices (e.g. AMX, Creston, NER, Apple TV, Rocku Player, etc.)</p>
                            <p>
                            <em>Feel free to enquire about any specific skills or technology that you may require.<br/>
                            Who knows, perhaps we already have what you’re looking for!</em></p>
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
.technologies_list {
  @extend %listreset;
  @include media(">=desktop") {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
}
.technologies_item {
  position: relative;
  border-top: 1px solid $white;
  &:not(:last-child) {
    margin: 0 0 60px;
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
.technologies_title {
  display: flex;
  justify-content: space-between;
  margin: 36px 0;
  .text {
    margin-right: 10px;
  }
  .count {
    color: $red;
  }
}
.technologies_content {
  p {
    margin-bottom: 32px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  ul {
    @extend %listreset;
  }
  a {
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
  .link {
    color: $red;
    position: absolute;
    left: 0;
    bottom: 0;
    margin-bottom: -32px;
  }
  .button {
    text-decoration: none;
    .icon {
      background-image: url("../assets/icons/rarr-icon.svg");
      padding-left: 24px;
      padding-top: 12px;
      padding-bottom: 12px;
      background-repeat: no-repeat;
    }
  }
}
</style>
