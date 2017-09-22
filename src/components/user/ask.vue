<template>
  <div>
    <div style="text-align: right;padding: .2rem"><a href="#/user/userQuestionList" class="linka">历史咨询</a></div>
    <DocList />
  </div>
</template>

<script type="text/ecmascript-6">
  import DocList from '../doc/docList.vue';

  export default {
    name: 'ask',
    components:{ DocList },
    data() {
      return {
        activeName: 'first'
      };
    },
    methods: {
      handleClick(tab, event) {
      }
    }
  };
</script>

<style scoped>
  .linka{
    color: #1D8CE0;
  }

  .linka:link {color: #1D8CE0} /* 未访问的链接 */
  .linka:visited {color: #1D8CE0} /* 已访问的链接 */
  .linka:hover {color: #1D8CE0} /* 当有鼠标悬停在链接上 */
  .linka:active {color: #1D8CE0} /* 被选择的链接 */

</style>
