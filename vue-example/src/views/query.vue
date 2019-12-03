<template>
   <div class="query">
      <h1>{{query}}</h1>
      <ul>
         <li>
            <router-link to="/query/one">切换一</router-link>
         </li>

         <li>
            <router-link to="/query/two">切换二</router-link>
         </li>
      </ul>
      <router-view></router-view>
   </div>
</template>
<script>
export default {
   data() {
      return {
         query: ""
      };
   },
   mounted() {
      this.query = this.$route.query.name;
   }
};
</script>
