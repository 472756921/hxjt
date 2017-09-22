<template>
  <div class="docSay">
    <img src="http://iph.href.lu/50x50" class="doctalkinfo">
    <div class="talkinfo doctalkinfo">{{content}}</div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'docSay',
    props: ['content'],
  };
</script>

<style scoped>
  .talkinfo{
    max-width: 65%;
    margin: 0 1rem;
    word-break: break-all;
    background-color: #D3DCE6;
    padding: .6rem;
    border-radius: .4rem;
    font-size: .8rem;
  }
  .doctalkinfo{
    float: left;
    color: #000;
  }
  .doctalkinfo:before{
    position: absolute;
    margin-left: -1.2rem;
    content: ' ';
    display:block;
    width: 0;
    height: 0;
    border-width: 10px 10px 10px 0;
    border-style: solid;
    border-color: transparent #D3DCE6 transparent transparent;
  }
  .docSay{
    overflow: auto;
    margin-bottom: .6rem;
  }
</style>
