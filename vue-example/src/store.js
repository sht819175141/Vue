import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    num: 1,
    msg: "测试vuex"
  },
  mutations: {
    delnum(state,sum) {
      // 变更状态
      state.num-=sum
    },
    addnum(state,sum) {
      state.num+=sum
    },
    setmsg(state){
      this.msg="测试成功"
    }
  },
  actions: {
  }
});