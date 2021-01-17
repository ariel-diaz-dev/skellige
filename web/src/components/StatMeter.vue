<template>
  <div class="meter">
    <div class="point filled"></div>
    <div class="point filled"></div>
    <div class="point filled"></div>
    <div class="point filled"></div>
    <div class="point"></div>
    <div class="point"></div>
  </div>
</template>

<script>
export default { 
  name: "stat-meter",
  methods: { 
  },
  data() {
    return { 
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .meter{
    height: 15px;
    width: 120px;
    border-radius: 3px;
    margin-top: 4px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    .point{
      border: 1px solid;
      background: rgba(255, 255, 255, 0.15);
      margin: 0 1px;
      border-radius: 2px;
      height: 10px;
      width: 10px;
    }
    .filled{
      background: white;
    }
  }
</style>
