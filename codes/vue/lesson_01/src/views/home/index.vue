
<template>
<div class="wrap">
  <header>
    <h1>一个Vue通信的简单示例</h1>
  </header>
  <article>
    <gougou name="狗狗" :title="gouTitle" @child-to-parent="autoListenChildVoice"></gougou>
    <br>
    <maomao ref="maomao"></maomao> 
    <br>
    <section class="body">
      <button @click="onListenChildVoice">父亲听猫猫说什么：父调用子的方法</button>
      <h2>{{desc}}</h2>
      <h2>豆瓣电影排行版</h2>
      <ul>
        <li v-for="(movie,index) in movies" :key="movie.id">
          {{index+1}}、 {{movie.title}}
        </li>
      </ul>
      <br>
    </section>
  </article>

 </div> 
</template>


<script>

import jsonp from 'jsonp'
import {menu} from '@/data.js'
import gougou from '@/views/home/gougou'
import maomao from '@/views/home/maomao'

export default {
  components : {
    gougou,
    maomao
  },
  data () {
    return {
      desc : "我是孩子们的父亲，现在的孩子啊，就是早恋，不省心。孩子他妈，我们看看电影，放松一下啊！",
      movies : [],
      gouTitle : ""
    }
  },
  mounted(){
    this.getMovies();
  },
  methods : {
    getMovies(){
      jsonp('https://api.douban.com/v2/movie/top250?count=10', null, (err, data) => {
        if(err) {
          console.error(err.message);
        }else{  
          if(data && data.subjects.length > 0) {
            this.movies =data.subjects
          }
        }
      })
    },
    autoListenChildVoice(val){
      let txt="爸爸使用了高科技，自动获取孩子说的话,："
      alert(txt+val)
    },
    loveWife(){
      alert("我爱你,亲爱的老婆！你说我们的孩子怎么都不听话呢！");
    },
    onListenChildVoice(){ 
      // 父亲调用孩子的方法
      //this.$refs.maomao.fallInLove();
      this.$children[1].fallInLove();
    }
  }
}
</script>

<style scoped lang="less">
header{
  background-color: #f0f0f0;
  padding:8px;
  h1{
    font-weight: bold;
    color:#f00;
  }
}

article{
  padding:8px;
}
h2{
  font-weight: bold;
}
.body{
  background-color: orange;
}
button{
  background-color: #5a5;
  color:#fff;
  padding:4px;
}
</style>
