
<template>
<div>

   <gougou name="sdsd" :title="gouTitle" @BaBaListen="onBaBaListen"></gougou>
   <maomao ref="maomao"></maomao> 
   <h2>{{title}}</h2>
   <section class="body">
    <ul v-for="(item,index) in product" :key="item.id">
      <li>
        <span>{{index+1}}、</span>
        <span>{{item.cateName}}</span>
        <span>{{item.productNo}}</span>
      </li>
    </ul>
   </section>

   <br>
   <button @click="ListenChild">父亲调用孩子的方法</button>
 </div> 
</template>


<script>

//import $http from '@/utils/httputils'
import gougou from '@/views/home/gougou'
import maomao from '@/views/home/maomao'

export default {
  components : {
    gougou,
    maomao
  },
  data () {
    return {
      title : "门店MM",
      product : [],
      gouTitle : ""
    }
  },
  props: {
    
  },
  mounted(){
    //this.getProduct();
  },
  methods : {
    getProduct(){
      $http({
        path: "http://10.10.200.49:8082/product/union/page",
        method: 'get'
      }).then(res => {  
        if(res && res.data && res.data.success){
          let data=res.data.data;
          data.gou="刘欢儿子111";

          this.gouTitle=data.gou;
          this.product=data;
        }   
      }) 
    },
    onBaBaListen(val){
      let txt="父亲获取孩子说的话："
      alert(txt+val)
    },
    loveWife(){
      alert("我爱你妈妈");
    },
    ListenChild(){ 
      // 父亲调用孩子的方法
      //this.$refs.maomao.makeLove();
      this.$children[1].makeLove();
    }
  }
}
</script>

<style scoped>
h2{
  background: #f00;
}
.body{
  background-color: #ccc;
}
</style>
