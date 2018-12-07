
<template>
<dl>
  <dt>猫猫</dt>
  <dd>
    <p>大家好，我是爸爸女儿猫猫！</p>
    <p>我喜欢加菲猫好久了，我想对爸爸说，我非她不娶</p>
    <p>现在的猫猫刚出生就谈恋爱了，我都这么大了，还没个对象！</p>
  </dd>
</dl>

</template>


<script>

export default {
  data () {
    return {

    }
  },
  props: { 
    title : "" ,
    name : ""
  },
  methods : {
    fallInLove(){
      alert("我喜欢加菲猫好久了，爸爸妈妈，我非她不嫁。")
    }
  }
}
</script>

<style scoped>
dl{
  background-color: #c88;
  padding:8px;
}
</style>
