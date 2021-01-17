<template>
  <div id="app">
    <header>
      <div>
        <img class="dota-logo" src="./assets/images/logos/Dota_2_Logo.png" alt="DOTA 2">
      </div>
    </header>
    <main>
      <router-view></router-view>
    </main>
    <footer>
      <h3 class="footer-motto">Dota Team Builder</h3>
      <div class="footer-social">
        <i class="fab fa-facebook-square"></i>
        <i class="fab fa-twitter-square"></i>
        <i class="fab fa-instagram"></i>
        <i class="fab fa-google-plus"></i>
      </div>
      <div class="footer-links">
        <a href="http://localhost:8080">Home</a> .
        <a href="blog.justasking.io">Blog</a> .
        <a href="https://newlandsoftware.com">About</a> .
        <a href="">Faq</a> .
        <a href="https://newlandsoftware.com">Contact</a>
      </div>
      <h3 class="footer-company">New Land Software LLC © 2018</h3>
    </footer>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>

<style lang="scss">
body {
  margin: 0;
  background-image: url("./assets/images/backgrounds/tidehunter_sm.png");
  background-size: cover;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

main {
  text-align: center;
}

header {
  margin: 0;
  height: 140px;
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  .dota-logo {
    width: 100px;
    margin: 10px;
  }
}

header span {
  display: flex;
  flex-direction: row;
  justify-content: center;
  position: relative;
  font-size: 20px;
  line-height: 1;
  letter-spacing: 0.02em;
  font-weight: 400;
  box-sizing: border-box;
  padding-top: 16px;
}

footer {
  padding: 0px 20%;
  margin-top: 100px;
  height: 200px;
  width: 100%;
  background-color: rgba(19, 19, 19, 0.5);
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  .footer-motto{
    font-weight: 100;
    padding: 10px 0px;
    font-size: 12pt;
  }
  .footer-links{
    font-weight: 700;
    padding: 10px 0px;
    a{
      color:white;
    }
  }
  .footer-social{
    i{
      cursor: pointer;
      font-size: 20pt;
      margin: 0 5px;
    }
  }
  .footer-company{
    font-size: 11pt;
    font-weight: 100;
    padding: 10px 0px;
  }
}
</style>
