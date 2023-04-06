<template>
  <footer id="footer">
    <div class="container">
      <div class="footer_content">
        <!-- <div class="footer_left"></div> -->
        <div class="footer_right">
          <strong class="footer_title">let&rsquor;s work together</strong>
          <div class="footer_columns">
            <div class="footer_column">
              <div class="footer_nav">
                <ul class="nav_item footer_list">
                  <li class="phone">
                    <a class="phone-link" href="tel:1 614 354 9478"
                      >+16143549478</a><br/>
                      <span class="phone-description">(Sales department)</span>
                    
                  </li>
                  <li class="phone">
                    <a class="phone-link" href="tel:16174184077"
                      >+16174184077</a><br/>
                      <span class="phone-description">(General issues)</span>
                  </li>
                  <li><a href="mailto:wdevs@wdevs.com">wdevs@wdevs.com</a></li>
                </ul>
                <ul class="nav_item footer_list">
                  <li><a href="/portfolio">Portfolio</a></li>
                  <li><a href="/magento">Magento Solutions</a></li>
                  <!-- <li><a href="#">Special thanks</a></li>
                                <li><a href="#">Time Tracking</a></li>
                                    <li><a href="#">FAQ</a></li> -->
                </ul>
              </div>
            </div>
            <div class="footer_column">
              <ul class="footer_list header-list-dublicate">
                <li><a href="/our-story">Our success story</a></li>
                <li>
                  <a href="/cant-find"
                    >Cant&rsquor; find a vendor for your project</a
                  >
                </li>
                <li>
                  <router-link to="/consider-outsourcing">
                    Can&rsquor;t consider outsourcing
                  </router-link>
                </li>
              </ul>
            </div>
          </div>
          <span class="copy"
            >&copy; 2022 Wdevs. All trademarks acknowledged</span
          >
          <div class="footer_columns footer_logos">
            <div class="footer_column">
              <ul class="social_list">
                <li class="social_item" v-for="item in socials" :key="item.id">
                  <a :href="item.link" target="_blank" class="socila_link">
                    <img
                      v-svg-inline
                      :data-src="
                        require('@/assets/icons/' + item.name + '.svg')
                      "
                      :alt="item.name"
                    />
                  </a>
                </li>
              </ul>
            </div>
            <div class="footer_column">
              <div class="footer_images">
                <div class="img_holder">
                  <picture>
                    <source
                      srcset="
                        @/assets/footer-image.webp,
                        @/assets/footer-image@1.5x.webp 1.5x,
                        @/assets/footer-image@2x.webp   2x
                      "
                    />

                    <source
                      srcset="
                        @/assets/footer-image.png,
                        @/assets/footer-image@1.5x.png 1.5x,
                        @/assets/footer-image@2x.png   2x
                      "
                    />

                    <img
                      src="@/assets/footer-image.png"
                      alt="Top Software Developer"
                      loading="lazy"
                      width="100"
                      height="100"
                    />
                  </picture>
                </div>
                <div class="img_holder">
                  <img
                    v-svg-inline
                    :data-src="require('@/assets/magento-badge.svg')"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  data() {
    return {
      socials: [
        {
          id: "01",
          name: "linkedin",
          link: "https://www.linkedin.com/company/18265066/",
        },
        {
          id: "02",
          name: "clutch",
          link: "https://clutch.co/profile/wdevs",
        },
        {
          id: "03",
          name: "skype",
          link: "skype:alabunskiy?chat",
        },
        {
          id: "04",
          name: "telegram",
          link: "https://telegram.me/alabunskiy",
        },
      ],
    };
  },
};
</script>
<style lang="scss">
@import "@/scss/_variables.scss";
@import "include-media/dist/_include-media.scss";

#footer {
  padding: 60px 0 50px;
  color: $black;
  @include media(">=tablet") {
    padding-top: 120px;
  }
  @include media(">=desktop") {
    padding-top: 240px;
  }
}
.footer_content {
  @include media(">=desktop") {
    display: flex;
  }
}
// .footer_left {
//   display: none;
//   @include media(">=desktop") {
//     display: block;
//     width: 35%;
//   }
// }
.footer_right {
  line-height: 1.6;
  margin-left:0;
   @include media(">tablet-xl") {
    margin-left:30%;
  }
  @include media(">=desktop") {
    margin-left:35%;
  }
  @include media(">=widescreen") {
    margin-left:610px;
  }
}
.footer_title {
  display: block;
  font-size: 40px;
  line-height: 1.2;
  text-transform: uppercase;
  margin-bottom: 60px;
  @include media(">=tablet-xl") {
    line-height: 1.1;
  }
  @include media(">=tablet-xl") {
    font-size: 72px;
    margin-bottom: 80px;
  }
}
.copy {
  display: block;
  opacity: 0.5;
  margin-bottom: 60px;
  @include media(">=tablet") {
    margin-bottom: 30px;
  }
  @include media(">=tablet-xl") {
    margin-bottom: 50px;
  }
}
.footer_columns {
  width: 100%;
  margin-bottom: 60px;
  @include media(">=tablet") {
    display: flex;
    margin-bottom: 0;
  }
}
.footer_column {
  width: 100%;
  @include media(">=tablet") {
    &:first-child {
      width: calc(70% - 40px);
      margin-right: 40px;
    }
    &:last-child {
      width: 26%;
    }

  }
  @include media(">=widescreen") {
    width: calc(50% - 40px);
    &:nth-child(2n-1) {
      margin-right: 80px;
    }
  }
}
.footer_nav {
  margin-bottom: 60px;
  @include media(">=tablet") {
    display: flex;
    margin-bottom: 74px;
  }
  @include media(">=tablet-xl") {
    margin-bottom: 80px;
  }
  .nav_item {
    &:first-child {
      margin-bottom: 60px;
    }
    @include media(">=tablet") {
      width: calc(50% - 40px);
      &:first-child {
        margin-bottom: 0;
        margin-right: 80px;
      }
    }
  }
}
.footer_list {
  @extend %listreset;
  &.header-list-dublicate{
    @include media (">widescreen"){
      width:18vw;
    }
  }
  li {
    &:not(:last-child) {
      margin-bottom: 10px;
    }
    a {
      text-decoration: none;
      color: $black;
      transition: color 0.3s;
      &:hover {
        color: $red;
      }
    }
  }
}
.footer_logos {
  align-items: center;
  .social_list {
    @extend %listreset;
    display: flex;
    margin-bottom: 60px;
    @include media(">=tablet") {
      margin-bottom: 0;
    }
    .social_item {
      margin-right: 20px;
    }
    .socila_link {
      display: block;
    }
  }
}
.footer_images {
  display: flex;
  .img_holder {
    max-height: 100px;
    &:not(:last-child) {
      margin-right: 40px;
    }
  }
  img {
    display: block;
  }
}
.phone{
  line-height: 16px;
  &:first-child{
    padding-top:10px;
  }
  &-description{
    font-size:14px;
  }
}

// .phone {
//   position: relative;
//   a {
//     font-size: 20px;
//   }
//   .tooltip {
//     display: none;
//   }
//   &:hover {
//     @include media(">phone") {
//       .tooltip {
//         display: block;
//       }
//     }
//   }
// }
// .tooltip {
//   position: absolute;
//   top: 0;
//   background: $red;
//   color: $white;
//   border-radius: 8px;
//   font-weight: 700;
//   display: none;
//   z-index: 1000;
//   padding: 5px 10px;
//   font-size: 13px;
//   min-width: max-content;
//   opacity: 0.9;
//   @include media("<desktop") {
//     left: calc(100% + 10px);
//     &::before {
//       position: absolute;
//       content: "";
//       height: 8px;
//       width: 8px;
//       background-color: $red;
//       top: 40%;
//       left: 0;
//       transform: translate(-50%) rotate(45deg);
//       transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
//     }
//   }
//   @include media(">=desktop") {
//     right: calc(100% + 10px);
//     &::before {
//       position: absolute;
//       content: "";
//       height: 8px;
//       width: 8px;
//       background-color: $red;
//       top: 40%;
//       right: 0;
//       transform: translate(50%) rotate(45deg);
//       transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
//     }
//   }
// }
</style>
