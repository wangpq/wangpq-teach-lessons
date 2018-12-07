
<template>
<dl>
  <dt >{{name}}---{{title}}</dt>
  <dd>
    <p>我是爸爸的儿子，单身狗。</p>
    <p>我最喜欢隔壁的二哈狗啦，可爸爸不让我们谈恋爱。</p>
  </dd>
  <button @click="tellToFather">狗狗对爸爸说：子向父传值</button>
  <br>

  <button @click="onListenParent">偷听爸爸跟妈妈的话：孩子调用父亲方法</button>
  <br>

  <button @click="onListenSister">听姐姐说的话：平辈之间方法调用</button>
  <br>

</dl>

</template>


<script>

export default {
  data () {
    return {
      love : "二哈是我最喜欢的姑娘，没有二哈，我日子没法过啦！"
    }
  },
  props: { 
    title : "" ,
    name : ""
  },
  methods : {
    onListenParent(){
      // 孩子调用父亲方法
      this.$parent.loveWife();
    },
    onListenSister(){
      // 兄弟姐妹之间
      //this.$parent.$children[1].fallInLove();
      this.$parent.$refs.maomao.fallInLove();  
    },
    tellToFather(){
      // 子向父传递值
      this.$emit("child-to-parent",this.love);
    }
  }
}
</script>

<style scoped>
dl{
  background-color: pink;
  padding:8px;
}
button{
  background-color: #33a;
  color:#fff;
  padding:4px;
  margin-bottom: 4px;
}
</style>
