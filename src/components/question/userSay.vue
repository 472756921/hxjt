<template>
  <div class="userSay">
    <img src="http://iph.href.lu/50x50" class="usertalkinfo">
    <div class="talkinfo usertalkinfo">{{content}}</div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: ['content'],
    name: 'UserSay',
  };
</script>

<style scoped>
  .usertalkinfo{
    float: right;
    color: #fff;
    background-color: #8492A6;
  }
  .usertalkinfo:before{
    float: right;
    margin-right: -1.1rem;
    content: ' ';
    display:block;
    width: 0;
    height: 0;
    border-width: 10px 0 10px 10px;
    border-style: solid;
    border-color: transparent transparent transparent #8492A6;
  }
  .userSay{
    overflow: auto;
    margin-bottom: .6rem;
  }
  .talkinfo{
    max-width: 65%;
    margin: 0 1rem;
    word-break: break-all;
    padding: .6rem;
    border-radius: .4rem;
    font-size: .8rem;
  }
</style>
