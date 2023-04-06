<template>
  <div class="contact-form">
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

      <div class="input-group input-group__textarea">
        <textarea
          name="message"
          id="message"
          placeholder=" "
          v-model.trim="message"
          @change="v$.message.$validate()"
          :class="[{ error: v$.message.$error }, { success: message.length }]"
        ></textarea>
        <label class="placeholder" :class="{ error: v$.message.$error }"
          >Tell us what you think?<span>*</span></label
        >
      </div>
      <span class="error" v-if="v$.message.$error">
        Error: message is required
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
                :data-src="require('../../assets/icons/delete.svg')"
                class="input-group__files__delete"
              />
            </span>
          </span>
          </div>
        </div>
      </div>
      <div class="input-group__captcha">
        <label>Security Code:<span>*</span></label>
        <button
          type="button"
          class="captcha__refresh"
          @click="getValueForCaptcha()"
        >
          <img src="../../assets/icons/captcha.svg" />
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
        Send
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
import { required, email, maxLength, sameAs } from "@vuelidate/validators";
import axios from "axios";

export default {
  name: "FormContact",
  data() {
    return {
      v$: useValidate(),
      name: "",
      email: "",
      files: [],
      message: "",
      file: "",
      valueForCaptcha: "",
      inputValueForCaptcha: "",
    };
  },
  props:['description'],
  validations() {
    return {
      name: { required },
      email: { required, email },
      message: { required, maxLenth: maxLength(500) },
      inputValueForCaptcha: {
        required,
        sameAs: sameAs(this.valueForCaptcha),
      },
    };
  },
  methods: {
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
    submitForm() {
      this.v$.$validate();
      if (!this.v$.$error) {
        const messageFromUser = {
          subject:'Get in touch',
          text:this.description,
          name: this.name,
          email: this.email,
          message: this.message,
          files: this.files,
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
  },
};
</script>

<style lang="scss">
@import "./form-styles.scss";
</style>
