<template>
  <div>
  	<ul>
  		<li><router-link to="/index/one">one</router-link></li>
  		<li><router-link to="/index/two">two</router-link></li>
  	</ul>

    <router-view></router-view>
    <li><router-link to="/parent">同级</router-link></li>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      
    }
  }
}
</script>

<style>


</style>
