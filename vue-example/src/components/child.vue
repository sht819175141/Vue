<template>
   <!--<div>{{msg}}</div>-->
   <button @click='clickbtn'>点击向父组件传值</button>
</template>

<script>
export default {
   name: "HelloWorld",
   props: {
      msg: String,
      //required: true
   },
   methods: {
      clickbtn() {
         this.$emit("vall", "我是点击子组件向父组件传的值");
      }
   }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
