<template>
<div>
<!--   <button @click='increment(123)'>increment</button>
 <button @click='decrement'>decrement</button>
 <button @click='add'>add</button>
 <div>
 {{newnum}}
 </div> -->
 <router-view>
  
</router-view> 
  </div>
</template>

<script>
import {mapGetters,mapActions} from 'vuex';

export default {
  computed:mapGetters([
    'newnum'
    ]),
  methods:mapActions([
    'increment',
    'decrement',
    'add'
    ])

}
</script>

<style lang="scss">

</style>
