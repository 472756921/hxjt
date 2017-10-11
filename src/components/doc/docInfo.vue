<template>
  <div>
    <img src="http://iph.href.lu/150x200" class="center_block" />
    <br/>
    <h3 class="center">刘德华</h3>
    <div class="center">四川华西医院</div>
    <div class="center">妇产科主任</div>
    <br/>
    <el-collapse>
      <el-collapse-item title="简介" name="1">
        <div>简介简介简介简介简介简介简介简介</div>
      </el-collapse-item>
    </el-collapse>
    <br/>
    <div>收费标准：<span class="danger">每次15健康豆</span></div>
    <br/>
    <br/>
    <el-button type="primary" class="center_block" @click="pay">立即付款咨询</el-button>
  </div>
</template>

<script type="text/ecmascript-6">
  import { selectGuardianDetail } from '../interface';

  export default {
    name: 'docInfo',
    data() {
      return {
        patient: '',
        doc: '',
        childs: '',
      };
    },
    created() {
    },
    methods: {
      pay() {
        this.$router.push({ name: 'question' })
      }
    }
  };
</script>

<style scoped>

</style>
