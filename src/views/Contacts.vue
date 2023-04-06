<template>
  <div class="contacts-page">
    <section class="contacts-home">
      <div class="container">
        <h1 class="contacts-title">Contact us</h1>
      </div>
    </section>

    <div class="container row contacts-content">
      <div class="column">
        <h3>We would love to hear from you</h3>
        <p>
          Please use the form to contact us for a quote or simply just get in
          touch. You can also reach us via phone at any of our international
          offices or via our main email address: <a href="mailto:wdevs@wdevs.com">wdevs@wdevs.com</a>
        </p>
        <div class="row contacts-content-address">
          <div class="column">
            <h4>USA</h4>
            <p>3 floor at 1007 Chestnut St, Newton, MA 02464 USA</p>

            <div>
              <p class="contact-phone">
                <span><a href="tel:1-614-4354-9478">+16143549478</a></span>
                <br/> 
                <span class="desc-phone">
                  (Sales department)
                </span> 
              </p>
              <p class="contact-phone">
              <span><a href="tel:1-617-418-4077">+16174184077</a></span><br/>
              <span class="desc-phone">
                (General issues)
              </span> 
              </p>
            </div>
          </div>

          <div class="column center">
            <h4>EU</h4>
            <p>
              WEBDEVS LTD<br/>
              Spyrou Kyprianou 61,<br/>
              SK HOUSE, 4003 Limassol, Cyprus
            </p>
            <p>
              <span>Tel: <a href="tel:372 606 6000">+372 606 6000</a></span
              ><br />
              <span>Fax: <a href="fax:372 606 6006">+372 606 6006</a></span>
            </p>
          </div>
        </div>
      </div>

      <div class="column contacts-form">
        <GetInTouchForm class="center" />
      </div>
    </div>
  </div>
</template>
<script>
import GetInTouchForm from "../components/Form/GetInTouchForm.vue";

export default {
  components: {
    GetInTouchForm,
  },
};
</script>
<style lang="scss">
@import "../scss/_variables.scss";
@import "include-media/dist/_include-media.scss";
.contacts {
  &-home {
    padding: 60px 0;
    @include media(">=desktop") {
      padding: 120px 0;
    }
    @include media(">=widescreen") {
      padding: 240px 0 120px;
    }
  }
  &-title {
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
  &-content {
    display: block;
    @include media(">=tablet-xl") {
      display: flex;
    }

    .column {
      &:first-child {
        margin-right: 30px;
        @include media(">=desktop") {
          margin-right: 0;
        }
      }
    }
    &-address {
      display: block;
      h4 {
        margin: 30px 0 10px;
      }

      p {
        margin-bottom: 10px;
      }
      @include media(">=desktop") {
        display: flex;
        p {
          margin-bottom: 20px;
        }
      }
    }
  }
}

a {
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
}
.column {
  .form {
    margin: 0 auto;
  }
  .contact-form {
    max-width: 658px;
    max-height: 1000px;
    margin-top: 60px;
    @include media(">=tablet-xl") {
      margin-top: 0;
      max-width: 478px;
    }
    form.form{
      max-height: 1000px;
    }
  }
}
.center {
  @include media(">=tablet") {
    margin: 0 auto;
  }
}
.desc-phone{
  font-size: 16px;
}
.contact-phone{
  line-height: 18px;
}
</style>
