<template>
  <div class="about">
    <div>
      <ul>
        <li>
          <router-link active-class="active" :to="{path:'/other/one',query:{id:2}}">切换一</router-link>
        </li>
        <li>
          <router-link active-class="active" to="/other/two">切换二</router-link>
        </li>
      </ul>
    </div>
    <router-view></router-view>
    <div>
      <router-link to="/other/home">返回首页</router-link>
    </div>
  </div>
</template>
<style scoped lang="scss">
li {
  list-style: none;
  float: left;
}
</style>