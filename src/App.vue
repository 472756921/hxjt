<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
  #app {
    font-family: Microsoft YaHei;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: #F9FAFC;
    height: 100%;
    font-size: 14px;
    color: #666;
  }
  html{
    height: 100%;
  }
  body{
    margin: 0;
    height: 100%;
  }
  .titleB{
    font-size: 1.1rem;
    font-weight: bold;
  }
  .center{
    margin: .2rem;
    text-align: center;
  }
  .center_block{
    text-align: center;
    margin: 0 auto;
    display: block;
  }
  .danger{
    color: #FF4949;
  }
  .Warning{
    color: #F7BA2A;
  }
  .Success{
    color: #13CE66;
  }
  .Blue{
    color: #20A0FF;
  }
  .line {
    border-top: 2px solid #13CE66;
  }
  .line2{
    border-top: 1px solid #E5E9F2;
    margin: 1rem 0;
  }
  .content{
    padding: .4rem;
  }
  .cursor{
    cursor: pointer;
  }
</style>
