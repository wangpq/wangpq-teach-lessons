# lesson_01
> Vue组件通信方法整理

## 父组件向子组件传值

使用属性，通过在使用的子组件上使用属性给子组件传值。

父组件 index.vue：
``` bash
<gougou 
  name="狗狗" 
  :title="gouTitle"
>
</gougou>
```

子组件 gougou.vue：
``` bash
export default {
  props: { 
    title : "" ,
    name : ""
  }
}
```


## 子组件向父组件传值

使用$emit,触发在父组件模板中子组件上的自定义事件。

子组件 gougou.vue：
``` bash
<button @click="tellToFather">狗狗对爸爸说：子向父传值</button>

export default {
  data () {
    return {
      love : "二哈是我最喜欢的姑娘，没有二哈，我日子没法过啦！"
    }
  },
  methods : {
    tellToFather(){
      // 子向父传递值
      this.$emit("child-to-parent",this.love);
    }
  }
}
```

父组件 index.vue：
``` bash
<gougou 
  name="狗狗" 
  :title="gouTitle" 
  @child-to-parent="autoListenChildVoice"
>
</gougou>

export default {
  methods : {
    autoListenChildVoice(val){
      let txt="爸爸使用了高科技，自动获取孩子说的话,："
      alert(txt+val)
    }
  }
}  
```


## 子组件使用父组件的方法

使用 this.$parent.方法名()

子组件 gougou.vue：

``` bash
<button @click="onListenParent">偷听爸爸跟妈妈的话：孩子调用父亲方法</button>

export default {
  methods : {
    onListenParent(){
      // 孩子调用父亲方法
      this.$parent.loveWife();
    }
  }
}  
``` bash


## 子组件使用同辈(兄弟姐妹)组件的方法

使用 this.$parent.$children[索引值].方法名()  or this.$parent.$refs.同辈名称.方法名()

子组件 gougou.vue：

``` bash
<button @click="onListenSister">听姐姐说的话：同辈之间方法调用</button>

export default {
  methods : {
    onListenSister(){
      // 兄弟姐妹之间
      //this.$parent.$children[1].fallInLove();
      this.$parent.$refs.maomao.fallInLove();  
    }
  }
}  
``` bash


## 父组件使用子组件的方法

使用 this.$children[索引值].方法名()  or this.$refs.孩子名称.方法名()

父组件 index.vue：
``` bash
export default {
  methods : {
    onListenChildVoice(){ 
      // 父亲调用孩子的方法
      //this.$refs.maomao.fallInLove();
      this.$children[1].fallInLove();
    }
  }
}  
``` bash  