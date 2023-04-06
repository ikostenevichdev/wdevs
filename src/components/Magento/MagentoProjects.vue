<template>
  <section-layout name="magento-proj" title="Selected Magento Projects">
    <div class="column">
      <p>
        The most important thing that is worth mentioning to outline our Magento
        experience is that we closely cooperate with Aheadworks.com, the company
        that has been at Magento extensions development market for over 15
        years. They have developed hundreds of extensions. Many clients ask them
        to make custom modifications of their extensions. Aheadworks is mostly
        focused on new modules development only, thus they subcontract us all
        clients who are looking for managing their extensions customisation.
        Consequently, we are experienced in many various plugins and extensions.
      </p>
      <p class="magento-proj__prelist">
        besides of Aheadworks, we collaborate with many other vendors of Magento
        extensions:
      </p>
      <ul>
        <li>
          work with
          <a href="https://moogento.com" target="_blank">moogento.com</a>
          on their extensions;
        </li>
        <li>
          we work on various ERP connectors for
          <a href="https://firebearstudio.com" target="_blank"
            >firebearstudio.com</a
          >;
        </li>
        <li>
          work with a few other Extensions development leaders under white-label
          (can't disclose its name because of the NDA).
        </li>
      </ul>
    </div>
    <div class="column">
      <p>
        Definitely, besides extensions development we support a lot of different
        Magento stores such as:
        <a href="https://store.touchpanelcontrol.com" target="_blank"
          >touchpanelcontrol.com</a
        >,
        <a href="https://www.schulershoes.com" target="_blank"
          >schulershoes.com</a
        >, <a href="https://cycloboost.com" target="_blank">cycloboost.com</a>,
        <a href="https://www.decathlon.com.cn" target="_blank"
          >decathlon.com.cn</a
        >, <a href="https://www.moto24.de" target="_blank">moto24.de</a>,
        <a href="https://kanokajakcenter.dk" target="_blank"
          >kanokajakcenter.dk</a
        >,
        <a href="https://www.whistlerrides.ca" target="_blank"
          >whistlerrides.ca</a
        >, <a href="https://honeycolor.com" target="_blank">honeycolor.com</a>,
        <a href="https://sportsupplements.info" target="_blank"
          >sportsupplements.info</a
        >, <a href="https://miibox.com" target="_blank">miibox.com</a>,
        <a href="https://wifisafe.com" target="_blank">wifisafe.com</a>,
        <a href="https://portablehookahs.com" target="_blank"
          >portablehookahs.com</a
        >,
        <a href="https://taketwoevents.com.au" target="_blank"
          >taketwoevents.com.au</a
        >,
        <a href="https://247footballtickets.com" target="_blank"
          >247footballtickets.com</a
        >, and many-many other Magento based stores...
      </p>

      <p>There are details of a few significant projects disclosed below:</p>
    </div>

    <ul class="magento-projects__list">
      <li
        class="magento-projects__item"
        v-for="project in magento_projects"
        :key="project.title"
      >
        <div class="magento-projects__links row">
          <div class="column">
            <p class="magento-projects__item__title">{{ project.title }}</p>
          </div>
          <div class="column icons">
            <template v-for="icon in project.icons" :key="icon">
              <img
                v-webp:src="
                  require(`../../assets/magento/magento-projects/magento_icons/${icon}.webp`)
                "
                :src="
                  require(`../../assets/magento/magento-projects/magento_icons/${icon}.jpg`)
                "
                :alt="icon"
                loading="lazy"
              />
            </template>
          </div>
        </div>
        <div class="magento-project__descr" v-html="project.text"></div>
      </li>
    </ul>
  </section-layout>
</template>

<script>
import SectionLayout from "@/layouts/SectionLayout";
import { mapState } from "vuex";
export default {
  components: {
    SectionLayout,
  },
  props: ["bannerTitle"],
  computed: {
    ...mapState(["magento_projects"]),
  },
  methods: {
    appendImages() {
      let items = Array.from(
        document.querySelectorAll(".magento-projects__item")
      );
      for (let i = 0; i < items.length; i++) {
        let text = items[i].querySelector(".magento-project__descr");
        let paragraphs = Array.from(text.querySelectorAll("p"));
        this.magento_projects[i].src.forEach((item) => {
          if (item.image) {
            let img = document.createElement("img");
            img.style.maxWidth = item.max_width;

            let picture = document.createElement("picture");
            picture.style.float = item.float;

            let source = document.createElement("source");

            img.setAttribute(
              "src",
              require(`../../assets/magento/magento-projects/${item.image}.jpg`)
            );
            img.setAttribute("alt", `${item.image}`);

            source.setAttribute("type", `image/webp`);
            source.setAttribute(
              "srcset",
              require(`../../assets/magento/magento-projects/${item.image}.webp`)
            ),
              picture.append(source, img);

            paragraphs[item.paragraph - 1].insertAdjacentElement(
              item.position,
              picture
            );
          }
        });
      }
    },
  },
  mounted() {
    setTimeout(() => {
      this.appendImages();
    }, 300)
  },
};
</script>

<style lang="scss">
@import "../../scss/variables";
@import "include-media/dist/_include-media.scss";

.magento-proj {
  overflow-x: hidden;
  .title {
    max-width: 100%;
    @include media(">=tablet") {
      max-width: 355px;
      padding-right: 15px;
    }
    &:before {
      background: $orange;
    }
  }
  .column {
    p {
      margin-bottom: 20px;
    }
  }
  .section_content {
    flex-wrap: wrap;
  }
  ul {
    @extend %listreset;
    padding-left: 30px;
    list-style: disc;
    margin-bottom: 20px;
    li {
      margin-bottom: 5px;
    }
  }
  .magento-proj__prelist {
    margin-bottom: 0;
  }
  .magento-projects__list {
    @extend %listreset;
  }
  .magento-projects__item {
    margin-top: 30px;
    @include media(">=tablet") {
      margin-top: 80px;
    }
    border-top: 1px solid $base-text-color;
    &__title {
      font-size: 24px;
      font-weight: bold;
    }
    &__icon {
      float: left;
      margin: 0 20px 20px 0;
      img {
        max-width: 100px;
      }
    }
    &__image {
      text-align: center;
      margin-bottom: 20px;
    }
    .left {
      @include media(">=desktop") {
        float: left;
        margin: 0 20px 20px 0;
        img {
          max-width: 400px;
        }
      }
      @include media(">=widescreen") {
        img {
          max-width: 500px;
        }
      }
    }
    .right {
      @include media(">=desktop") {
        float: right;
        margin: 0 20px 20px 0;
        img {
          max-width: 400px;
        }
      }
      @include media(">=widescreen") {
        img {
          max-width: 500px;
        }
      }
    }
  }
  .magento-projects__links {
    margin-top: 20px;
    @include media(">=tablet") {
      margin-top: 40px;
    }
    a {
      color: $orange;
      font-weight: bold;
      font-size: 24px;
      line-height: 133%;
    }
  }
  .magento-project__descr {
    picture {
      img {
        margin: 5px;
        @include media(">=tablet") {
          margin: 20px;
        }
      }
    }

    a {
      color: $orange;
    }
    margin-top: 20px;
    p {
      margin-bottom: 20px;
    }
    p:last-child{
      margin-bottom: 0px;
    }
  }
}
.row {
  display: block;
  @include media(">=desktop") {
    display: flex;
  }
  .column {
    img {
      max-width: 60px;
      margin-right: 20px;
      @include media(">=tablet") {
        max-width: 80px;
      }
      @include media(">=widescreen") {
        max-width: 100px;
      }
    }
  }
  .icons {
    margin: 20px 0;
    text-align: end;
    display: none;
    @include media(">=desktop") {
      display: block;
    }
  }
}
</style>
