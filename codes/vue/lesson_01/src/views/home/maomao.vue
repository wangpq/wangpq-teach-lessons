
<template>
<dl>
  <dt>毛毛</dt>
  <dd>
    <p>maomao</p>
    <p>maomao</p>
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
    han(){
      alert("我是毛毛2222")
    },
    makeLove(){
      alert("谈恋爱3333")
    }
  }
}
</script>

<style scoped>
</style>
