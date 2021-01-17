<template>
  <div class="heroes container">
    <div class="top-controls">
      <input class="app-input-text hero-search" type="text" placeholder="Search">
      <button class="app-button">Generate random team</button>
    </div>
    <br>
    <div class="team-room">
      <h1>Team room: FastSlug</h1>
      <button class="app-button-fab">
        <i class="fas fa-link"></i>
      </button>
      <button class="app-button-fab">
        3
      </button>
    </div>
    <div class="row">
      <div class="hero-container col-md-12">
        <div class="hero-img-container" v-for="hero in filteredHeroes" v-on:click="addHeroToTeam(hero)">
          <div class="hero-img">
            <div class="hero-overlay"></div>
            <img :src="'http://cdn.dota2.com/apps/dota2/images/heroes/'+ hero.slug + '_hphover.png'" :alt="hero.Name">
          </div>
        </div>
      </div>
    </div>
    <br>
    <div class="team-composition">
      <div class="row">
        <div class="team-container col-md-6">
          <p class="header">Team</p>
          <div class="team">
            <div v-for="hero in selectedHeroes" v-on:click="removeHeroFromTeam(hero)">
              <img class="hero-img" :src="'http://cdn.dota2.com/apps/dota2/images/heroes/'+ hero.slug + '_hphover.png'" :alt="hero.Name">
              <p class="hero-name">{{hero.Name}}</p>
            </div>
          </div>
        </div>
        <div class="composition col-md-6">
          <p class="header">Composition</p>
          <div class="row">
            <div class="stats-container col-md-6">
              <div class="stat">
                <span class="stat-name">
                  Initiator :
                </span>
                <stat-meter></stat-meter>
              </div>
              <div class="stat">
                <span class="stat-name">
                  Disabler :
                </span>
                <stat-meter></stat-meter>
              </div>
              <div class="stat">
                <span class="stat-name">
                  Pusher :
                </span>
                <stat-meter></stat-meter>
              </div>
              <div class="stat">
                <span class="stat-name">
                  Durable :
                </span>
                <stat-meter></stat-meter>
              </div>
              <div class="stat">
                <span class="stat-name">
                  Carry :
                </span>
                <stat-meter></stat-meter>
              </div>
              <div class="stat">
                <span class="stat-name">
                  Total :
                </span>
                <stat-meter></stat-meter>
              </div>
            </div>
            <div class="stats-container col-md-6">
              <div class="stat">
                <span class="stat-name">
                  Lane Support :
                </span>
                <stat-meter></stat-meter>
              </div>
              <div class="stat">
                <span class="stat-name">
                  Escape :
                </span>
                <stat-meter></stat-meter>
              </div>
              <div class="stat">
                <span class="stat-name">
                  Jungler :
                </span>
                <stat-meter></stat-meter>
              </div>
              <div class="stat">
                <span class="stat-name">
                  Nuker :
                </span>
                <stat-meter></stat-meter>
              </div>
              <div class="stat">
                <span class="stat-name">
                  Support :
                </span>
                <stat-meter></stat-meter>
              </div>
              <div class="stat">
                <span class="stat-name">
                  Melee :
                </span>
                <stat-meter></stat-meter>
              </div>
            </div> 
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import StatMeter from './StatMeter';
var heroes = require("../assets/data/dota_heroes.json");

export default {
  name: "teamRoom",
  methods: {
    addHeroToTeam: function(hero) {
      var heroIsInTeam = this.$data.selectedHeroes.includes(hero);
      if (!heroIsInTeam && this.$data.selectedHeroes && this.$data.selectedHeroes.length < 5) {
        this.$data.selectedHeroes.push(hero);
      }
    },
    removeHeroFromTeam: function(hero) {
      var index = this.$data.selectedHeroes.indexOf(hero);
      this.$data.selectedHeroes.splice(index, 1);
    }
  },
  data() {
    return {
      heroes: heroes,
      filteredHeroes: heroes,
      selectedHeroes: []
    };
  },
  components: {
    StatMeter
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: whitesmoke;
    opacity: 1; /* Firefox */
}

:-ms-input-placeholder { /* Internet Explorer 10-11 */
    color: whitesmoke;
}

::-ms-input-placeholder { /* Microsoft Edge */
    color: whitesmoke;
}
h1,h2 {
  font-weight: normal;
}

.top-controls{
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  .hero-search{
    flex: 1;
  }
}

.team-room{
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 10px;
  font-family: 'Roboto Mono', monospace;
}

.hero-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  .hero-img-container{
    position: relative;
    cursor: pointer;
   .hero-img {
      img{
          position: relative;
          flex: 1;
          cursor: pointer;
          width: 75px;
          z-index: 1;
          &:active {
            cursor: grab;
          }
      }
    } 
    .hero-overlay{
      display: block;
      background: rgba(0, 0, 0, .7);
      position: absolute;
      top: 0;
      left: 0;
      width: 75px;
      height: 100%;
      z-index: 2;
      &:hover{
        background: rgba(0, 0, 0, 0);
      }
    }
  }
} 
.team-composition{
  min-height: 150px;
  background: rgba(0, 0, 0, 0.1);
  padding: 20px;
  border-radius: 10px;
  .stats-container{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    .stat{
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      .stat-name{
        text-align: left;
        width: 120px;
      }
    }
  }
}
.team {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
  .hero-img {
    flex: 1;
    cursor: pointer;
    width: 100px;
    &:active {
      cursor: grab;
    }
  }
  .hero-name{
    font-size: 10pt;
    background: rgba(0, 0, 0, 0.25);
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }
} 
.header {
  text-align: left;
  font-family: 'Roboto Mono', monospace;
  font-weight: 100;
  font-size: 15pt;
  color: rgba(255, 255, 255, 0.28);
}
</style>
