<template>
  <div>
    <div class="_2menu">
      <div class="_2menu_con">
        <div class="row align-items-center">
          <div class="col">
            <router-link to="/">
              <h3 class="_menu_logo_text">
                <span class="_menu_logo_symbol">C</span>
                <span class="_menu_logo_text_main">CONNECTIVER</span>
              </h3>
            </router-link>
          </div>

          <div class="col-auto">
            <router-link to="/signUp">
              <button class="_log_btn _2menu_long" type="button">
                Sign Up
              </button>
            </router-link>
          </div>
        </div>
      </div>
    </div>

    <!-- Banner -->
    <div class="_4banner">
      <div class="_4banner_main">
        <h1 class="_4banner_title">Connectiver</h1>
        <p class="_4banner_text">
          Creating a conscious and safe community where human<br />
          connection and new ideas can thrive
        </p>
      </div>
    </div>
    <!-- Banner -->

    <!-- Form -->
    <div class="_log_form_main">
      <h2 class="_log_form_title">Login</h2>

      <div class="_log_form">
        <div class="_log_input_group">
          <input
            v-model.trim="loginObj.email"
            class="_log_input"
            placeholder="Email"
            type="email"
          />
        </div>
        <div class="_log_input_group">
          <input
            v-model.trim="loginObj.password"
            class="_log_input"
            placeholder="Password"
            type="password"
          />
        </div>
        <div class="_log_button">
          <button @click="logIn" class="_log_btn _btn_long">Login</button>
          <button @click="getMessage" class="_log_btn _btn_long">Socket</button>
        </div>

        <p class="_log_forget">
          <router-link to="/forgetPassword">Forgot password?</router-link>
        </p>
      </div>
    </div>
    <!-- Form -->
  </div>
</template>

<script lang="ts">
// import { io } from "socket.io-client";
import Vue from "vue";
// const socket = io();
const axios = require("axios");

export default Vue.extend({
  data() {
    return {
      loginObj: {
        email: "",
        password: ""
      }
    };
  },
  methods: {
    getMessage() {

      axios
          .get("http://localhost:3333/test"
          )
          .then(response => {
              console.log ( response )
              this.socket.emit('getMessage', (resp) => {
                // this.messageRxd = resp
                console.log(resp)
          })
                });

                this.socket.emit('message', "Joy");
                this.socket.emit('message', (resp) => {
                // this.messageRxd = resp
                console.log(resp)
          })

    // this.socket.emit('getMessage', (resp) => {
    //   // this.messageRxd = resp
    //   console.log(resp)
    // })
  } ,
    async logIn() {
        


      if (this.loginObj.email != "" && this.loginObj.password != "") {

        axios
                .post("http://localhost:3333/checkToLogin", this.loginObj
                )
                .then(response => {
                   console.log ( response )
                          this.$store.commit("setAuthUser", response.data);
                          this.$router.push("/peopleList");
                });
      }
    }
  },
mounted() {
  this.socket = this.$nuxtSocket({
    // nuxt-socket-io opts: 
    name: 'home', // Use socket "home"
    channel: '/', // connect to '/index'

    // socket.io-client opts:
    reconnection: false
  })
  // this.socket.emit('message', "Joy");
},
});

function io(arg0: string) {
  throw new Error("Function not implemented.");
}
</script>