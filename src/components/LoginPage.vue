<template>
  <section id="login">
    <div class="py-12">
      <v-container class="text-center">
        <h2 class="display-2 font-weight-bold mb-3">
          Football Mangement System
        </h2>
        <div class="field">
          <p class="control has-icons-left has-icons-right">
            <input
              class="input"
              type="email"
              placeholder="Email"
              v-model="email"
            />
            <span class="icon is-small is-left">
              <i class="fas fa-envelope"></i>
            </span>
            <span class="icon is-small is-right">
              <i class="fas fa-check"></i>
            </span>
          </p>
        </div>
        <div class="field">
          <p class="control has-icons-left">
            <input
              class="input"
              type="password"
              placeholder="Password"
              v-model="pass"
            />
            <span class="icon is-small is-left">
              <i class="fas fa-lock"></i>
            </span>
          </p>
        </div>
        <button class="button is-success" @click="handleLogin">Log in</button>
      </v-container>
    </div>
  </section>
</template>

<script>
import { login } from "../api";
export default {
  name: "LoginPage",

  data() {
    return {
      email: "",
      pass: "",
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
            this.$router.push({
              name: "teamlist",
              params: {
                uid: res.data.uid,
              },
            });
          }
        })
        .catch((err) => {
          console.log(err);
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
</style>