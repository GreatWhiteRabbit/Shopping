import Vue from "vue";
import Vuex from 'vuex'

Vue.use(Vuex);

const store=new Vuex.Store({
    state:{
        carList:[],
       checkAll:false,
        carLength:0,
        totalPrice:0,
        price:0
    },
    mutations:{
        addCar(state,payload){
            state.carList.push(payload);
            state.carLength=state.carList.length;
            state.totalPrice+=payload.counter*payload.price;
            state.price=state.totalPrice;
        }
    }
})

export default store;