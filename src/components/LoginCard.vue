<template>
  <section id="login">
    <div class="py-12">
      <v-container class="text-center">
        <h2 class="display-2 font-weight-bold mb-3">
          Football Management System
        </h2>
      </v-container>
      <div class="form">
        <v-card class="card-form">
          <form class="form-width" @keyup.enter="handleLogin">
            <div>
              <v-text-field
                v-model="email"
                :error-messages="emailError"
                label="E-mail"
                prepend-icon="mdi-account-circle"
              ></v-text-field>
            </div>
            <div>
              <v-text-field
                v-model="pass"
                :error-messages="passError"
                :append-icon="showPass ? 'mdi-eye' : 'mdi-eye-off'"
                :type="showPass ? 'text' : 'password'"
                label="Password"
                prepend-icon="mdi-lock"
                @click:append="showPass = !showPass"
              ></v-text-field>
            </div>
            <div class="text-center">
              <v-btn class="mr-4" color="success" @click="handleLogin"
                >Log in</v-btn
              >
            </div>
          </form>
        </v-card>
      </div>
    </div>
  </section>
</template>

<script>
import { login } from "../api";
export default {
  name: "LoginCard",

  data() {
    return {
      email: "",
      pass: "",
      showPass: false,
      passError: "",
      emailError: "",
    };
  },
  methods: {
    async handleLogin() {
      const { email, pass } = this;
      const loginInfo = {
        email,
        pass,
      };
      await login(loginInfo)
        .then((res) => {
          if (res.status === 200) {
            localStorage.setItem('name', res.data.name)
            this.$router.push({
              name: "teamlist",
              params: {
                uid: res.data.uid,
              },
            });
          }
        })
        .catch((err) => {
          if (err.response.status === 401) {
            this.passError = err.response.data.message;
          }
          if (err.response.status === 404) {
            this.emailError = err.response.data.message;
          }
        });
    },
  },
};
</script>

<style scoped>
.field {
  margin-left: 300px;
  margin-right: 300px;
}

.form {
  display: flex;
  justify-content: center;
  /* width: 45rem;
  height: 12rem; */
}

.card-form {
  width: 40rem;
  height: 12rem;
  display: flex;
  justify-content: center;
}

.form-width {
  width: 35rem;
}
</style>