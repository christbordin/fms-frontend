<template>
<div class="container">
    <h1 class="title">Football Mangement System</h1>
<form action="/team" method="">
    <div class="field">
  <p class="control has-icons-left has-icons-right">
    <input class="input" type="email" placeholder="Email">
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
    <input class="input" type="password" placeholder="Password">
    <span class="icon is-small is-left">
      <i class="fas fa-lock"></i>
    </span>
  </p>
</div>
<button class="button is-success" type="submit">Log in</button>
</form>
</div>
</template>

<script>
export default {
  name: 'LoginPage',
}
</script>

<style scoped>
.container {
    margin-left: 700px;
    margin-right: 700px ;
}
.title{
    text-align: center;
    margin-top: 100px;
}
</style>