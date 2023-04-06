<template>
  <div class="contact-form" :class="[magento?'magento_contact_form':'']">
    <form class="form" @submit.prevent="submitForm">
      <div class="input-group">
        <input
          name="name"
          id="name"
          v-model.trim="name"
          type="text"
          autocomplete="on"
          placeholder=" "
          class="input-group__input"
          @change="v$.name.$validate()"
          :class="[{ error: v$.name.$error }, { success: name.length }]"
        />
        <label class="placeholder" :class="{ error: v$.name.$error }"
          >Your Name<span>*</span></label
        >
      </div>
      <span class="error" v-if="v$.name.$error"> Error: name is required </span>
      <div class="input-group">
        <input
          name="email"
          id="email"
          v-model.trim="email"
          placeholder=" "
          type="email"
          autocomplete="on"
          class="input-group__input"
          @change="v$.email.$validate()"
          :class="[{ error: v$.email.$error }, { success: email.length }]"
        />
        <label class="placeholder" :class="{ error: v$.email.$error }"
          >Email Address<span>*</span></label
        >
      </div>
      <span class="error" v-if="v$.email.$error">
        Error: email entered incorrectly
      </span>

      <div
        :class="[
          { focus: showOptions },
          { error: v$.value.$error },
          { success: options.some((option) => option === value) },
        ]"
        class="input-group input-group__input input-group__select"
      >
        <div class="select dropdown__icon">&dtrif;</div>
        <div
          class="select__label"
          @click="showOptions = !showOptions"
          v-html="value"
          :class="[{ error: v$.value.$error }]"
        ></div>
        <div class="select__options" v-if="showOptions">
          <p
            v-for="option in options"
            :key="option"
            @click="selectContactMethod(option)"
            class="select__options__item"
          >
            {{ option }}
          </p>
        </div>
      </div>
      <span class="error" v-if="v$.value.$error">
        Error: chosse one of options</span
      >
      <div class="input-group" v-if="options.find((item) => item === value)">
        <input
          name="preferableContact"
          id="preferableContact"
          v-model.trim="preferableContact"
          placeholder=" "
          type="text"
          autocomplete="on"
          class="input-group__input"
          :class="[
            { error: v$.preferableContact.$error },
            { success: preferableContact.length },
          ]"
          @input="v$.preferableContact.$validate()"
        />
        <label class="placeholder"
          >Enter your Preferable Contact Way<span>*</span></label
        >
      </div>
      <span
        class="error"
        v-if="v$.preferableContact.$error && !v$.value.$error"
      >
        Error: preferable contact way is required
      </span>
      <div class="input-group__files">
        <label>
          Add an Attachment:
          <span>
            <span class="primary button">Choose File</span>
            <input
              type="file"
              id="file"
              ref="file"
              accept="*"
              class="upload_files_input"
              @change="handleFileUpload()"
              multiple
            />
          </span>
        </label>

      <div v-if="files.length" class="container-files-list">
          <div class="files-list">
          <span
            v-for="(file, index) in files"
            :key="index"
            class="input-group__files__list"
          >
            <span>{{ file.name }}</span>
            <span @click="deleteFile(file.name)">
              <img 
                v-svg-inline
                :data-src="require(`../../assets/icons/delete${deleteIcon}.svg`)"
                class="input-group__files__delete"
              />
            </span>
          </span>
          </div>
        </div>
      </div>
      <div class="range-slider">
        <div class="range-slider__budget">
          <label>Budget:</label>
          <input
            type="range"
            min="0"
            max="100"
            step="1"
            v-model.trim="budget"
            class="range"
            id="budget"
            @input="changeRange('budget')"
          />
          <span>${{ budget }} K</span>
        </div>
        <div class="range-slider__deadline">
          <label>DeadLine:</label>
          <input
            type="range"
            min="0"
            max="15"
            step="1"
            v-model.trim="deadline"
            class="range"
            id="deadline"
            @input="changeRange('deadline')"
          />
          <span>{{ deadline }} month</span>
        </div>
      </div>

      <div class="input-group__captcha">
        <label>Security Code:<span>*</span></label>
        <button
          type="button"
          class="captcha__refresh"
          @click="getValueForCaptcha()"
        >
          <img 
            v-svg-inline
           :data-src="require(`../../assets/icons/captcha${refreshIcon}.svg`)"/>
        </button>
        <canvas id="canvas" width="72" height="38" />
        <div class="captcha">
          <div class="input-group">
            <input
              name="captcha"
              id="captcha"
              v-model.trim="inputValueForCaptcha"
              type="text"
              placeholder=" "
              class="input-group__input"
              @change="v$.inputValueForCaptcha.$validate()"
              :class="[
                { error: v$.inputValueForCaptcha.$error },
                { success: inputValueForCaptcha.length },
              ]"
            />
            <label
              class="placeholder"
              :class="{ error: v$.inputValueForCaptcha.$error }"
              >Code</label
            >
          </div>
        </div>
      </div>
      <span class="captcha error" v-if="v$.inputValueForCaptcha.$error">
        Security code is incorrect
      </span>
      <button class="button primary large send" type="submit">
        Get Free Consultation
        <span class="icon"
          ><img
            v-svg-inline
            :data-src="require('../../assets/icons/rarr-icon.svg')"
            alt=""
        /></span>
      </button>
    </form>
  </div>
</template>
<script>
import useValidate from "@vuelidate/core";
import { required, email, sameAs } from "@vuelidate/validators";
import axios from "axios";

export default {
  name: "FormContact",
  data() {
    return {
      refreshIcon:'',
      deleteIcon:'',
      path:'',
      v$: useValidate(),
      showOptions: false,
      options: ["Email", "Phone", "Skype", "Telegram", "Other Method"],
      value: `Select Contact Method<span>*</span>`,
      name: "",
      email: "",
      files: [],
      preferableContact: "",
      file: "",
      budget: 0,
      deadline: 0,
      valueForCaptcha: "",
      inputValueForCaptcha: "",
      mustBeOneOfOptions: (value) =>
        this.options.some((option) => option === value),
    };
  },
  validations() {
    return {
      name: { required },
      email: { required, email },
      value: {
        mustBeOneOfOptions: this.mustBeOneOfOptions,
      },
      preferableContact: { required },
      inputValueForCaptcha: {
        required,
        sameAs: sameAs(this.valueForCaptcha),
      },
    };
  },
  props:['magento'],
  methods: {
    whatPage(){
      if(this.magento){
        this.deleteIcon = '_magento',
        this.refreshIcon = '_magento',
        this.path = 'Magento Solutions'
      }else{
        this.path = 'Web&Mobile'
      }
    },
    selectContactMethod(option) {
      this.value = option;
      this.showOptions = !this.showOptions;
    },
    handleFileUpload() {
      for (let i = 0; i < this.$refs.file.files.length; i++) {
        this.file = this.$refs.file.files[i];
        this.files.push(this.file);
      }
    },
    deleteFile(file) {
      let array = this.files;
      array.splice(array.indexOf(array.find((item) => item.name === file)), 1);
    },
    changeRange(id) {
      let input = document.getElementById(id);
      let max = input.getAttribute("max");
      input.style.setProperty("--val", input.value / max - 0);
    },
    submitForm() {
      this.v$.$validate();
      if (!this.v$.$error) {
        const messageFromUser = {
          subject:'Start a project',
          path:this.path,
          name: this.name,
          email: this.email,
          contactMethod: this.value,
          contactWay: this.preferableContact,
          files: this.files,
          budget: `$${this.budget} 000`,
          deadline: `${this.deadline} month`,
        };
        // console.log(messageFromUser);
        axios.post("contact.php", messageFromUser, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        })
        .then(function (response) {
          // handle success
          console.log(response);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .then(function () {
          // always executed
        });
      }
      return;
    },
    getValueForCaptcha() {
      let chars = "abcdefghijklmnopqrstuvwxyz0123456789";
      let code = [];
      for (let i = 0; i < 4; i++) {
        let sIndex = Math.floor(Math.random() * chars.length);
        let cTxt = chars[sIndex];
        code.push(cTxt);
      }
      let string = code.join("");
      this.valueForCaptcha = string;
      function drawPic() {
        const canvas = document.getElementById("canvas");
        const ctx = canvas.getContext("2d");
        ctx.textBaseline = "middle";
        ctx.fillStyle = "#fff";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "#000000";
        ctx.font = 20 + "px SimHei";
        const x = 0.5 * (canvas.width / (string.length + 1));
        const y = 0.5 * canvas.height;
        var deg = Math.floor(Math.random() * (-15 - 15) + 15);
        ctx.translate(x, y);
        ctx.rotate((deg * Math.PI) / 180);
        ctx.fillText(string, 0, 0);
        ctx.rotate((-deg * Math.PI) / 180);
        ctx.translate(-x, -y);
      }
      drawPic();
    },
  },
  mounted() {
    this.getValueForCaptcha();
    this.whatPage()
  },
};
</script>

<style lang="scss">
@import "./form-styles.scss";
</style>
