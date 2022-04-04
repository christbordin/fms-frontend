<template>

  <div class="home">
    <div class="level">
      <div class="level-left">
        <div class="level-item">
          <a href="/">
              <strong class="title is-4">Football Mangement System</strong>
          </a>
        </div>
      </div>
      
      <div class="level-right">
        <div class="level-item">
          <a class="button is-dark" href="/login">
            <strong>Sign In</strong>
          </a>
        </div>
      </div>
  </div>

    <section class="hero is-dark">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">Welcome to Football Management System</h1>
          <h2 class="subtitle">
            Manage your team and players now!
          </h2>
          <div class="button-block">
            <button class="button is-xl is-dark">
              Sign in to Management
            </button>
          </div>
        </div>
      </div>
    </section>
  </div>

</template>
<script>
  export default {
    name: 'homePage',
    components: {},
  };
</script>
<style lang="scss" scoped>
  .hero {
    text-align: center;
    background-image: url('../assets/bg/jimmy-conover.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 450px;
  }
  .hero-body .title {
    text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.6);
    padding: 40px 0 20px 0;
    font-size: 60px;
  }
  .subtitle {
    text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.7);
    font-size: 30px;
  }
  .button-block {
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    position: absolute;
    bottom: -150px;
    .button {
      margin-right: 50px;
      padding-left: 50px;
      padding-right: 50px;
    }
    .welcome {
      width: 400px;
      padding: 10px;
      margin-left: auto;
      margin-right: auto;
    }
  }
  .is-xl {
    font-size: 1.7rem;
  }
  .level {
    margin-top: 25px;
    margin-bottom: 30px;
    margin-left: 200px;
    margin-right: 200px;
  }
  .title {
    color: #0b72b8;
  }
</style>