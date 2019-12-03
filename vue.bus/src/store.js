import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

var state={
	num:10
}

var mutations={
	increment1:function(state,s){
		state.num++;
		console.log(s)
	}
}

var actions={
	increment({commit},en){
		commit("increment1",en)
	}
}


var getters={
	newnum:function(){
		return state.num;
	}
}

export default new Vuex.Store({
	actions,
	mutations,
	state,
	getters
})