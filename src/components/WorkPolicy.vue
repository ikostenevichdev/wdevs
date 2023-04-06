<template>
  <section-layout name="policy" mode="dark" title="Our working policy">
    <div class="column">
      <p>
        We have many corporate rules and working preferences in place, however
        our main rule when working with clients is to keep them collaboratively
        happy by living up to their expectations. We don’t mind being
        represented as the client’s personal team when they present our work as
        their own to their clients, and we are happy to follow the rules
        dictated by the client or partner.
      </p>
      <ul class="policy_list">
        <li>
          We are experts in the classic Scrum/Agile methodology process -
          especially when working with technical clients. We have team meetings
          each morning to set tasks for the daily sprint and to report back
          about the previous day’s tasks. All tasks are tracked in a tasks
          tracking system (Jira, Teamwork, ActiveCollab etc).
        </li>
        <li>
          Some clients are not technical and are therefore uncomfortable using
          task tracking systems such as these - they prefer to use chat, email
          or calls for setting up task schedules. We prefer not to use these
          latter methods, but we are however prepared to track the project, in a
          way which is suitable to them.
        </li>
        <li>
          Some of these specific clients have many ongoing tasks, therefore; in
          order to not lose track of anything, we implement an internal task
          tracking system where we store all the information regarding our tasks
          discussed during the meetings, as well as keeping a personal record of
          all work executed.
        </li>
        <li>
          Some clients have dedicated outsourced developers and prefer to manage
          everything in a manner suitable to them.
        </li>
      </ul>
    </div>
    <div class="column">
      <p>
        We prefer that our managers communicate directly with clients in order
        to maintain a certain level of professionalism, but if a client prefers
        to work directly with the developers - we will happily accommodate them.
      </p>
      <p>
        A structured working process definitely works far better for the
        development process, and therefore we always try to suggest a process
        that we believe would work optimally for that specific client or
        project. Since the client needs to be comfortable with the final
        process, we try to not overcomplicate anything and to follow a path
        which is best suited to them.
      </p>
      <p>
        In conclusion, our main priority is that the client always knows best in
        regards to moving forward and which protocols to follow.
      </p>
      <p>
        * We do make suggestions, but it’s the client’s prerogative to establish
        a working policy which is best suited to their needs
      </p>
      <p>
        <em>
          {{text}}
        </em>
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
      text:'We are always open to suggestions, so please feel free to let us know if you have any further ideas that you would prefer we implement.'
    }
  },
  components: {
    SectionLayout,
    ContactsButton,
  },
};
</script>

<style lang="scss">
@import "@/scss/_variables.scss";
@import "include-media/dist/_include-media.scss";

.policy {
  padding-bottom: 30px;
  @include media(">=tablet") {
    padding-bottom: 60px;
  }
  @include media(">=desktop") {
    padding-bottom: 120px;
  }
}
.policy_list {
  margin: 0 0 32px;
  padding-left: 30px;
  @include media(">=tablet-xl") {
    margin-bottom: 60px;
  }
  @include media(">=desktop") {
    margin-bottom: 0;
  }
  li:not(:last-child) {
    margin-bottom: 32px;
  }
}
</style>
