<template>
  <section id="login">
    <div class="py-12">
      <v-container class="text-center">
        <h2 class="display-2 font-weight-bold mb-3">
          Football Management System
        </h2>
      </v-container>
      <div style="text-align: center" v-if="isLoggedIn">
        <h3 class="display-1 mb-3">Hi, {{ name.data.name }}</h3>
        <hr />
        <v-btn outlined @click="teamPage">Team List</v-btn> |
        <v-btn outlined @click="handleLogout">Log out</v-btn>
      </div>
      <div class="form" v-else>
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
import router from "@/router";
import { login } from "../api";
export default {
  name: "LoginCard",

  data() {
    return {
      email: "",
      pass: "",
      name: "",
      showPass: false,
      passError: "",
      emailError: "",
    };
  },

  created() {
    this.name = JSON.parse(localStorage.getItem("user"));
  },

  computed: {
    isLoggedIn() {
      return localStorage.length;
    },
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
    handleLogout() {
      localStorage.clear();
      location.reload();
    },

    teamPage() {
      const user = JSON.parse(localStorage.getItem("user"));
      const uid = user.data.uid;
      router.push(`/teamlist/${uid}`);
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