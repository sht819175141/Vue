<template>
<div>
    <div class="home">
        <ul>
          <li>
              <router-link :to="{path:'/query',query:{id:1,name:'query'}}">查询参数 query</router-link>
          </li>

          <li>
              <router-link :to="{name:'params',params:{id:1,name:'params'}}">命名路由 params</router-link>
          </li>
        </ul>
        <!--父组件向子组件传至
        <child :msg="name" ></child>-->
        <child @vall="onbtn"></child>
        <span>{{val}}</span></span>
    </div>
    <div>
      <button @click="add">+</button><span>{{num}}</span><button @click="del">-</button>
    </div>
   </div>
</template>

<script>
// @ is an alias to /src
import child from "@/components/child.vue";

export default {
   name: "home",
   data() {
      return {
         name: "测试父组件向子组件传值",
         val: "",
         num:1
      };
   },
   components: {
      child
   },
   methods: {
      onbtn(val) {
         this.val=val;
      },
      add(){
       this.$store.commit("addnum",2);
       this.num=this.$store.state.num;

       //this.$store.dispatch('increment')
      },
      del(){
         this.$store.commit("delnum",1);
         this.num=this.$store.state.num;
      }
   }
};
</script>
<style scope lang="scss">
li {
   list-style: none;
}
</style>
