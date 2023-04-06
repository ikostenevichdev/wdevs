<template>
  <div class="breadcrumbs" :class="{ scrolling: scroll }">
    <div class="breadcrumbs__container">
      <ol class="breadcrumbs__breadcrumb">
        <li class="breadcrumbs__breadcrumb__item link__item">
          <router-link :to="'/'">Home</router-link>
        </li>
        <li
          v-if="this.$route.params.way !== 'featured-projects'"
          class="breadcrumbs__breadcrumb__item link__item"
        >
           <a href="#" @click.prevent="$router.go(-1)">{{ title.name }}</a>
        </li>
        <li class="breadcrumbs__breadcrumb__item">
          {{ project.products[0].title }}
        </li>
      </ol>
    </div>
  </div>
  <div class="project-watch container" @scroll="scrolling()">
    <div
      v-for="product in project.products"
      :key="product.id"
      class="project-watch__item"
      :id="product.id"
    >
    <p v-if="product.head_text" class="project-watch__head-text">{{product.head_text}}</p>
      <h3 class="project-watch__title" v-html="product.title"></h3>
      <div class="project-watch__main-img img-center" v-if="product.src_center">
        <img
          v-webp:src="
            require(`@/assets/portfolio/spa-portfolio/${product.src_center}.webp`)
          "
          :src="
            require(`@/assets/portfolio/spa-portfolio/${product.src_center}.jpg`)
          "
          :alt="product.src_center"
          loading="lazy"
        />
      </div>
      <div class="row">
        <div class="column">
          <div
            v-if="product.desc"
            class="project-watch__desc"
            v-html="product.desc"
          ></div>
        </div>
        <div class="column icons_top" v-if="product.src_icons_top">
          <span v-for="(icon, index) in product.src_icons_top" :key="index">
            <img
              v-webp:src="
                require(`@/assets/portfolio/spa-portfolio/icons/${icon}.webp`)
              "
              :src="
                require(`@/assets/portfolio/spa-portfolio/icons/${icon}.jpg`)
              "
              :alt="product.src_center"
              loading="lazy"
            />
          </span>
        </div>
      </div>
      <div
        class="project-watch__main-img img-left"
        v-if="product.src_float_left"
      >
        <img
          v-webp:src="
            require(`@/assets/portfolio/spa-portfolio/${product.src_float_left}.webp`)
          "
          :src="
            require(`@/assets/portfolio/spa-portfolio/${product.src_float_left}.jpg`)
          "
          :alt="product.src_float_left"
          loading="lazy"
        />
      </div>
      <div
        class="project-watch__main-img img-right"
        v-if="product.src_float_right"
      >
        <img
          v-webp:src="
            require(`@/assets/portfolio/spa-portfolio/${product.src_float_right}.webp`)
          "
          :src="
            require(`@/assets/portfolio/spa-portfolio/${product.src_float_right}.jpg`)
          "
          :alt="product.src_float_right"
          loading="lazy"
        />
      </div>
      <div class="project-watch__text" v-html="product.text"></div>


      <div v-if="product.more_content" class="project-watch__more-content">
        <div  v-for="content in product.more_content" :key="content.desc">
        <div class="row project-watch__more-content__head">
          <div class="column" :class="[typeof(content.image_src) !== 'string'?'small_column':'']">
            <div class="project-watch__more-content__title">{{content.title}}</div>
          </div>
            <div class="column project-watch__more-content__desc" v-html="content.desc"></div>
            <div class="column project-watch__more-content__image" v-if="typeof(content.image_src) === 'string'">
              <img
                v-webp:src="
                  require(`@/assets/portfolio/spa-portfolio/${content.image_src}.webp`)
                "
                :src="require(`@/assets/portfolio/spa-portfolio/${content.image_src}.jpg`)"
                :alt="content.image_src"
                loading="lazy"
              />
            </div>
        </div>
        <div class="row project-watch__more-content__images" v-if="typeof(content.image_src) === 'object'">
                <img
                class="column project-watch__more-content__image" v-for="image in content.image_src" :key="image"
                  v-webp:src="
                  require(`@/assets/portfolio/spa-portfolio/${image}.webp`)
                  "
                  :src="require(`@/assets/portfolio/spa-portfolio/${image}.jpg`)"
                  :alt="image"
                  loading="lazy"
                />
        </div>
        </div>
        </div>

      <div class="column icons_bottom" v-if="product.src_icons_bottom">
        <span v-for="(icon, index) in product.src_icons_bottom" :key="index">
          <img
            v-webp:src="
              require(`@/assets/portfolio/spa-portfolio/icons/${icon}.webp`)
            "
            :src="require(`@/assets/portfolio/spa-portfolio/icons/${icon}.jpg`)"
            :alt="product.src_bottom"
            loading="lazy"
          />
        </span>
      </div>
        <div class="image_group img-center" v-if="product.group_images_top">
        <img
        v-for="image in product.group_images_top" :key="image"
          v-webp:src="
            require(`@/assets/portfolio/spa-portfolio/${image}.webp`)
          "
          :src="
            require(`@/assets/portfolio/spa-portfolio/${image}.jpg`)
          "
          :alt="image"
          loading="lazy"
        />
      </div>
    </div>

    <div class="buttons">
      <a href="#" @click.prevent="$router.go(-1)" class="secondary button back">Back</a>
      <a
        href="#"
        v-if="this.$route.params.way !== 'portfolio'"
        @click.prevent="$router.push('/portfolio')"
        class="secondary button back"
        >Go to Portfolio</a
      >
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      scroll: false,
      title: "",
      position:''
    };
  },
  computed: {
    ...mapState(["hitech_projects", "mob_projects", "other_projects", "menu"]),
    allProjects() {
      return [
        ...this.hitech_projects,
        ...this.mob_projects,
        ...this.other_projects,
      ];
    },
    project() {
      return this.allProjects.find(
        (project) => project.id === this.$route.params.id
      );
    },
    products() {
      return this.project.products.filter((prod) => prod.title.length);
    },
    findAboutChildren() {
      return this.menu.find((item) => item.path === `/about`);
    },
  },
  methods: {
    backCrumb() {
      let portfolioBackTitle = this.menu.find(
        (item) => item.path === `/${this.$route.params.way}`
      );
      if (portfolioBackTitle) {
        this.title = portfolioBackTitle;
      } else {
        this.title = this.findAboutChildren.children.find(
          (child) => child.path === `/${this.$route.params.way}`
        );
      }
    },
    scrolling() {
      const scroll = document.documentElement.scrollTop;
      if (scroll > 50) {
        this.scroll = true;
      } else {
        this.scroll = false;
      }
    },
    appendImages(products) {
      let items = Array.from(document.querySelectorAll(".project-watch__item"));
      for (let i = 0; i < items.length; i++) {
        let text = items[i].querySelector(".project-watch__text");
        if (products[i].images) {
          let paragraphs = Array.from(text.querySelectorAll("p"));
          products[i].images.forEach((image) => {
            if (image.image) {
              let img = document.createElement("img");
              img.style = image.styles;
              let picture = document.createElement("picture");
              let source = document.createElement("source");
              img.setAttribute(
                "src",
                require(`@/assets/portfolio/spa-portfolio/float-images/${image.image}.jpg`)
              );
              img.setAttribute("alt", `${image.image}`);
              source.setAttribute("type", `image/webp`);
              source.setAttribute(
                "srcset",
                require(`@/assets/portfolio/spa-portfolio/float-images/${image.image}.webp`)
              ),
                picture.append(source, img);
              paragraphs[image.paragraph - 1].insertAdjacentElement(
                "beforeBegin",
                picture
              );
            }

            if (image.imagesgroup) {
              let imagesIconContainer = document.createElement("span");
              imagesIconContainer.className = "icons_container";
              image.imagesgroup.forEach((icon) => {
                let img = document.createElement("img");
                img.setAttribute(
                  "src",
                  require(`@/assets/portfolio/spa-portfolio/float-images/${icon}.jpg`)
                );
                img.setAttribute("alt", `${icon}`);
                imagesIconContainer.appendChild(img);
              });
              paragraphs[image.paragraph - 1].insertAdjacentElement(
                "beforeBegin",
                imagesIconContainer
              );
            }
          });
        }
      }
    },
  },
  created() {
    window.addEventListener("scroll", this.scrolling);
  },
  mounted() {
    this.appendImages(this.products);
    this.backCrumb();
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.scrolling);
  },
};
</script>

<style lang="scss">
@import "../scss/_variables.scss";
@import "include-media/dist/_include-media.scss";
.scrolling {
  border-bottom: 1px solid $red;
  .breadcrumbs__breadcrumb {
    margin: 10px 0;
  }
}

.breadcrumbs {
  background: $white;
  width: 100%;
  position: fixed;
  top: 60px;
  left: 0;
  z-index: 1;
  transition: all 0.3s ease;
  &__container {
    padding: 0 16px;
    width: 100%;
    max-width: 1920px;

    @include media(">=tablet") {
      padding: 0 40px;
    }

    @include media(">=widescreen") {
      padding: 0 80px;
      margin: 0 auto;
    }
  }

  &__breadcrumb {
    list-style: none;
    display: flex;
    flex-wrap: nowrap;
    padding-left: 0px;
    transition: all 0.3s ease;
    overflow-x: auto;
    &::-webkit-scrollbar {
      display: none;
    }
    &::-webkit-scrollbar-thumb {
      background-color: inherit;
      border: none;
    }
    &::-webkit-scrollbar-track {
      border: none;
    }
    li {
      display: flex;
      min-width: max-content;
    }

    & > li {
      font-size: 12px;

      @include media("<=phone") {
        font-size: 11px;
      }

      @include media(">=tablet") {
        font-size: 16px;
      }
    }

    .link__item:after {
      font-size: 12px;
      padding: 0 10px;
      color: $base-text-color;
      content: "→";

      @include media("<=phone") {
        font-size: 8px;
        padding: 0 3px;
      }

      @include media(">=tablet") {
        font-size: 16px;
      }
    }
    &__item > a {
      color: $base-text-color;
      text-decoration: none;
      font-size: 12px;
      transition: all 0.3s;

      @include media("<=phone") {
        font-size: 11px;
      }

      @include media(">=tablet") {
        font-size: 16px;
      }
    }

    &:hover {
      .breadcrumbs__breadcrumb__item {
        & a {
          opacity: 0.5;

          &:hover {
            opacity: 1;
            color: $red;
          }
        }
      }
    }
  }
}

.project-watch {
  .row{
    flex-wrap: wrap;
  }
  .column{
    margin-right: 0;
  }
&__more-content{
  margin-bottom:30px;
  .column.small_column{
    @include media(">=tablet-xl"){
      flex:0.5;
    }
  }
  .row .column img {
    height: auto;
  }
  &__head{
    margin:60px 0 20px;
    @include media (">=tablet-xl"){
      margin:100px 0 20px;
    }
  }

  &__title{
    font-size:22px;
    font-weight: 700;
     @include media ("<=tablet"){
      padding-bottom:20px;
    }
    @include media (">=tablet-xl"){
      font-size:28px;
    }
  }
  &__desc{
    font-size:16px;
    line-height: 25px;
    @include media (">=tablet"){
      font-size:20px;
      line-height: 32px;
    }
  }
  &__images{
    margin:0;
  }
  &__image{
      text-align: center;
      img{
        min-width:343px;
        margin:15px auto 0;
        @include media (">phone"){
          min-width:330px;
        }
        @include media (">=tablet"){
          min-width:330px;
          margin:0;
        }
        @include media (">desktop"){
          min-width:500px;
        }
      }
    }

    img.project-watch__more-content__image{
      min-width:343px;
      margin:10px auto;
      @include media (">=tablet"){
        min-width:343px;
        margin:15px;
      }
      @include media (">desktop"){
        min-width:500px;
        margin:30px;
      }
      @include media (">=widescreen"){
        margin:15px;
      }
    }
  } 
  &__head-text{
   padding-bottom:50px;
  }
  &__item {
    margin: 60px 0 30px;
    overflow-x: hidden;
    @include media(">=tablet-xl") {
      margin: 120px 0 40px;

    }

    a {
      color: $red;
      text-decoration: none;
    }

    p {
      margin: 0;
    }
  }

  &__title,
  h3 {
    color: $base-text-color;
    font-size: 24px;
    line-height: 120%;
    margin: 0 0 15px;

    @include media(">=tablet") {
      font-size: 32px;
    }
  }

  &__link {
    font-size: 16px;

    @include media(">=tablet") {
      font-size: 20px;
    }
  }

  &__main-img {
    margin: 20px 0;
    max-width: 900px;

    @include media(">=tablet-xl") {
      max-width: 744px;
      margin-top: 0;
      margin-right: 40px;
    }

    @include media(">=desktop") {
      max-width: 744px;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      max-width: 900px;
    }
  }

  .img-left {
    margin: 0 auto 30px;
    max-height: 415px;
    max-width: 300px;

    img {
      max-height: 415px;
      max-width: 300px;
    }

    @include media(">=tablet") {
      float: left;
      margin: 0 30px 10px 0;
    }
    @include media(">=desktop") {
      max-width: 400px;
      max-height: 430px;

      img {
        max-height: 430px;
        max-width: 400px;
      }
    }
  }

  .img-right {
    margin: 0 auto 20px;
    max-width: 300px;

    img {
      max-width: 300px;
    }

    @include media(">=tablet") {
      float: right;
      margin-left: 20px;
    }

    @include media(">=desktop") {
      margin-left: 40px;
      max-width: 400px;

      img {
        max-height: 430px;
      }
    }
  }

  .img-center {
    margin: 20px auto;
    text-align: center;

    @include media(">=tablet-xl") {
      max-width: 1000px;

      img {
        max-width: 1000px;
      }
    }
  }

  &__desc {
    font-size: 14px;
    line-height: 150%;
    color: $grey;
    margin-bottom: 20px;

    @include media(">=tablet") {
      margin-bottom: 40px;
      font-size: 16px;
    }
  }

  &__text {
    .list_left_margin {
      @include media(">=desktop") {
        margin-left: 615px;
      }
    }
    color: $base-text-color;
    font-size: 16px;
    line-height: 160%;
    ol {
      list-style-type: lower-alpha;
    }
    img {
      max-width: 300px;
    @include media(">=desktop") {
      max-width: 400px;
    }
    }
    .icons_container {
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        margin: 0 10px;
        max-width: 100px;
        @include media(">=tablet") {
          max-height: 90px;
          max-width: 150px;
        }
      }
    }
    &__image {
      text-align: center;

      img {
        width: 100vw;
      }

      @include media(">=desktop") {
        img {
          width: 30vw;
        }
      }
    }

    @include media(">=tablet") {
      font-size: 20px;
    }

    p {
      margin-bottom: 20px;
    }
  }
}

.back {
  color: $white;
  background: $red;
  text-decoration: none;
  font-size: 16px;

  &:hover {
    color: $base-text-color;
    background: $white;
  }
}
.row {
  max-width: 1920px;
  @include media(">=tablet") {
    display: flex;
    justify-content: space-between;
  }

  .column {
    flex: 1;
    img {
      height: 25px;
      margin-bottom: 20px;
      @include media(">=tablet") {
        height: 35px;
        margin-bottom: 0;
      }
      @include media(">=tablet") {
        height: 40px;
      }
    }
  }
  .icons_top {
    text-align: end;
    @include media(">=tablet") {
      max-width: 200px;
      display: flex;
    }
  }
}
.icons_bottom {
  img {
    max-height: 50px;
    @include media(">=tablet") {
      max-height: 70px;
    }
  }
}
.image_group{
  img{
    width:320px;
    @include media(">=tablet"){
      width:200px;
    }
    @include media(">=tablet-xl"){
      width:300px;
    }
  }
}
.buttons {
  display: flex;
  justify-content: space-between;
}
.first_list{
  margin-top:0;
}
</style>
