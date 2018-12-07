<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import Home from '@/views/Home/index.vue'
export default {
  data() {
    return {
      loading : true
    }
  },
  components: {
    Home
  },
  created (){ 
    this.$router.push("/home");
  },
  watch:{
    $route : (to,from)=>{
  　　document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0; 
    }
  }
}

</script>

<style>
#app{
  width:100%;
}
</style>
