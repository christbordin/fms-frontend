<template>

<div id="team">
  <div class="level">
      <div class="level-left">
        <div class="level-item">
          <p>
              <strong class="title is-4">Football Mangement System</strong>
          </p>
        </div>
      </div>
      
      <div class="level-right">
        <div class="level-item">
          <a class="button is-dark" href="/">
            <strong>Log out</strong>
          </a>
        </div>
      </div>
  </div>
  
    <div class="container">
        <h1 class="h1">Select a team to view player information</h1>
        <div class="columns is-variable is-1-mobile is-0-tablet is-3-desktop is-8-widescreen is-2-fullhd">
          <div class="column">
              <a href="/manu" class="image is-128x128">
                  <img src="../assets/logo/manu.png">
              </a>
              <a href="/manu">Manchester United</a>
          </div>

          <div class="column">
              <a href="/liverpool" class="image is-128x128">
                  <img src="../assets/logo/liverpool.png">
                  <a href="/liverpool" class="lp">Liverpool</a>
              </a>
          </div>

          <div class="column">
              <a href="/mancity" class="image is-128x128">
                  <img src="../assets/logo/mancity.png">
              </a>
            <a href="/mancity" class="ct">Manchester City</a>
          </div>

          <div class="column">
              <a href="/realmadrid" class="image is-128x128">
                  <img src="../assets/logo/realmadrid.png">
              </a>
              <a href="/realmadrid" class="rm">Real Madrid</a>
          </div>

          <div class="column">
              <a href="/barcelona" class="image is-128x128">
                  <img src="../assets/logo/barcelona.png">
              </a>
              <a href="/barcelona" class="bc">Barcelona</a>
          </div>

          <div class="column">
              <a href="/atmadrid" class="image is-128x128">
                  <img src="../assets/logo/atmadrid.png">
              </a>
              <a href="/atmadrid">Atletico de Madrid</a>
         </div>

        </div>
    </div>
    </div>

</template>

<script>

export default {
    name: 'TeamManage',
    
}
</script>

<style lang="scss" scoped>
  .h1 {
    text-align: center;
    text-shadow: 4px 4px 4px rgba(0, 0, 0, 0);
    padding: 40px 0 20px 0;
    font-size: 40px;
    
  }
  .lp {
    margin-left: 30px ;
  }
  .ct {
    margin-left: 5px ;
  }
  .rm {
    margin-left: 20px;
  }
  .bc {
    margin-left: 25px;
  }
  .level {
    margin-top: 25px;
    margin-bottom: 30px;
    margin-left: 200px;
    margin-right: 200px;
  }
  .title{
    color: #0b72b8;
  }
</style>