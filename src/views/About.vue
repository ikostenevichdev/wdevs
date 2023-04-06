<template>
<div>
    <section class="about-home">
        <div class="container">
            <h1 class="about-title">About us</h1>
        </div>
    </section>

    <div class="container">
      <p>
      WDevs was founded in 2007 with 3 guys who were all dedicated to their first client and relentlessly striving to reach their goals by finetuning their field of expertise, and to date the company has continued to grow stronger each step of the way - through all the ups and downs.
      </p>
      <p>
        During this incredible process, we took the giant step from merely building landing pages, to enterprise system development and mastered many unique tools and systems such as:
</p>

            <ul class="about-list">
              <li>Traffic generation systems and bots to generate traffic</li>
              <li>Mobile smart bot systems development to collect points in games</li>
              <li>
              Various startups;  working with complicated systems (even some government startups) 
              </li>
              <li>
              Game development
              </li>
              <li>Education systems (from educational games for children, to school planning applications, to complicated examination systems for Fortune 500 companies)</li>
              <li>Medical CRM systems</li>
              <li>
              Remote education and medical systems including telemed solutions 
              </li>
              <li>Gambling systems</li>
              <li>Banking analytics solutions</li>
              <li>User behavior prediction systems</li>
              <li>Complex immersive and responsive e-Commerce web-stores</li>
              <li>
              …as well as many other complex and diverse technological systems
              </li>
            </ul>
       <p>
        <router-link to="/our-story">See more in our success story</router-link>
      </p>
      <p>
       Today WDevs proudly has branches in both the US and Europe, offering our services in over 120 countries and proudly serving companies such as: Siemens, Cisco, Citrix, AMX, Magento as well as many other notable brands. 
      </p>
      <p>
        For many of our large-scale clients, we offer the convenience of privacy via an NDA and while that means we can’t share all their information, we are still incredibly proud to prioritize the; and hopefully yours too, privacy and security. 
      </p>
      <p>
        <em>
       {{text}}
        </em>
      </p>
      <ContactsButton size="large" :desc="text"/>
    </div>
</div>
</template>
<script>
import ContactsButton from "@/components/ContactsButton.vue";

export default {
  data(){
    return{
      text:'Unfortunately only a small amount of information may be disclosed publicly, so if you have any further enquiries regarding our experience - please don’t hesitate to contact us directly:'
    }
  },
  components:{
   ContactsButton
  }
}
</script>

<style lang="scss">
@import "../scss/_variables.scss";
    @import "include-media/dist/_include-media.scss";
.about-home {
        padding: 60px 0;
        @include media('>=desktop') {
            padding: 120px 0;
        }
        @include media('>=widescreen') {
            padding: 240px 0 120px;
        }
    }
    .about-title {
        text-transform: uppercase;
        color: $black;
        line-height: 111%;
        margin: 0;
        font-size: 34px;
        @include media('>=tablet') {
            font-size: 50px;
        }
        @include media('>=tablet-xl') {
            font-size: 60px;
        }
        @include media('>=desktop') {
            font-size: 72px;
        }
    }
    .about-list{
      margin-top:-10px;
      li {
        margin-bottom:10px;
        align-items: center;
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

</style>


