<template>
  <div class="contentes">
    <div class="new">
      <h3>关联联系人<a href="#/user/newContact" v-if="data.length<5">添加</a></h3>
      <small style="color: #aaa;">( 侧滑管理联系人 )</small>
    </div>
    <div class="contacts" @click="edit(it)" v-for="(it, index) in data">
      <div>姓名：{{it.real_name}}</div>
      <div>月龄：{{it.month}} 月龄</div>
      <div>性别：<span  v-if="it.gender==1">男</span><span  v-if="it.gender==0">女</span></div>
      <div>地址：{{it.address}}</div>
      <div class="option">
        <div class="input" @click="input(it, index)"><i class="iconfont icon-input" style="font-size: 1.4rem"></i></div>
        <div class="del" @click="del(it, index)"><i class="iconfont icon-el-icon-delete-copy" style="font-size: 1.4rem"></i></div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import { selectGuardianDetail, updateChildStatus } from '../interface';

  export default {
    name: 'contact',
    mounted() {
      let items = document.getElementsByClassName('contacts');
      items =  Array.prototype.slice.call(items);
      let x = '';
      let mrV = '';
      let mr = '';
      items.map((item,i) => {
        const po = window.getComputedStyle(item.children[4]).marginRight.substring(0, window.getComputedStyle(item.children[4]).marginRight.length-2);
        item.addEventListener('touchstart', (e) => {
          if (e.targetTouches.length == 1) {
            let touch = e.targetTouches[0];
            x = touch.pageX ;
            mr = window.getComputedStyle(item.children[4]).marginRight;
            mrV = mr.substring(0, mr.length-2);
          }
        }, false)
        item.addEventListener('touchmove', function abc(e2) {
          if (e2.targetTouches.length == 1) {
            let mov = e2.targetTouches[0].pageX - x;
            if (mrV < 0) {
              if (Math.abs(mov) <= Math.abs(mrV) && mov < 0) {
                item.children[4].style.marginRight = parseInt(mrV) - parseInt(mov) + 'px';
              }
            } else {
              if (mov > 0) {
                item.children[4].style.marginRight = parseInt(mrV) - parseInt(mov) + 'px';
              }
            }
          }
        }, false)
        item.addEventListener('touchend', function abcd(e3) {
          const mr2 = window.getComputedStyle(item.children[4]).marginRight;
          const mrV2 = mr2.substring(0, mr2.length-2);
          if (mrV < -10) {
            if (mrV2 > mrV/2) {
              item.children[4].style.marginRight = 0;
            } else {
              item.children[4].style.marginRight = mr;
            }
          }
          if (mrV >= -10) {
            if (mrV2 < po/3*2) {
              item.children[4].style.marginRight = po +'px';
            } else {
              item.children[4].style.marginRight = 0;
            }
          }
        }, false)
      })
    },
    created() {
      this.getList();
    },
    data() {
      return {
        data: [
          { name: '加载中', sex: '男', age: 3, address: '成都', id: 1},
          { name: '加载中', sex: '男', age: 3, address: '成都', id: 1},
          { name: '加载中', sex: '男', age: 3, address: '成都', id: 1},
          { name: '加载中', sex: '男', age: 3, address: '成都', id: 1},
          { name: '加载中', sex: '男', age: 3, address: '成都', id: 1},
        ],
      };
    },
    methods: {
      getList() {
        this.$ajax({
          method: 'GET',
          url: selectGuardianDetail(),
        }).then((res) => {
          this.data = res.data;
        }).catch((error) => {
          this.$message.error(error.message);
        });
      },
      edit(event){
        window.event.stopPropagation();
        this.$router.push({ name: 'newContact', params: { obj: event }})
      },
      del(id, i) {
        window.event.stopPropagation();
        const r = confirm("确认删除关联人？")
        if (r == true) {
          this.$ajax({
            method: 'GET',
            url: updateChildStatus() + "?child_id=" + id.id,
          }).then((res) => {
//            this.data = res.data;
          }).catch((error) => {
            this.$message.error(error.message);
          });
          const po = window.getComputedStyle(document.getElementsByClassName('contacts')[i].children[4]).width;
          this.data.splice(i, 1);
          document.getElementsByClassName('contacts')[i].children[4].style.marginRight = '-' + po;
        }
      },
      input(item, i) {
        window.event.stopPropagation();
        this.$router.push({ name: 'physiological', params: { item: item } })
      },
    },
  };
</script>

<style scoped>
  .contentes{
    overflow: auto;
  }
  .contacts{
    padding: 1rem;
    background: #EFF2F7;
    border-bottom: 1px solid #E5E9F2;
    font-size: .8rem;
    position: relative;
    overflow: hidden;
    margin-bottom: .4rem;
  }
  .option{
    position: absolute;
    right: 0;
    top: 0;
    color: #fff;
    font-size: 1rem;
    margin-right: -9rem;
  }
  .del{
    padding: 2.5rem 1.5rem;
    background: #FF4949;
    float: left;
  }
  .input{
    float: left;
    padding: 2.5rem 1.5rem;
    background: #F7BA2A;
  }
  .new{
    padding: 0 .6rem;
  }
  .new a{
    text-decoration: none;
    color: #1D8CE0;
    float: right;
    font-size: .6rem;
  }
</style>
