
<template>
<dl>
  <dt >{{name}}---{{title}}</dt>
  <dd>
    <p>狗狗狗狗狗狗</p>
    <p>狗狗狗狗狗狗</p>
  </dd>

  <h5 @click="toBaBa">点击子向父传递值</h5>

  <br>
</dl>

</template>


<script>

export default {
  data () {
    return {
      fav : "喜欢吃香蕉o"
    }
  },
  props: { 
    title : "" ,
    name : ""
  },
  methods : {
    hanBaBa(){
      // 孩子调用父亲方法
      this.$parent.loveWife();
      // 兄弟姐妹之间
      //this.$parent.$children[1].han();
      this.$parent.$refs.maomao.han();  
    },
    toBaBa(){
      // 子向父传递值
      this.$emit("BaBaListen",this.fav);
    }

  }
}
</script>

<style scoped>
</style>
