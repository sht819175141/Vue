<template>
   <div class="about">
      <h1>{{params}}</h1>
   </div>
</template>
<script>
export default {
   name: "params",
   data() {
      return {
         params: ""
      }
   },
   mounted() {
      this.params = this.$route.params.name;
   }
};
</script>
