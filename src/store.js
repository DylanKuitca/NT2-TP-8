import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)


export default new Vuex.Store({
    state: {
        personas:[],
        url: 'https://6286d6fae9494df61b2e1214.mockapi.io/api/TP7',

    },
    getters: {
        getPersonas: state => state.personas
    },
    actions: {
        postFormDataAsync ({commit}, formData){
            console.log('action -> postPersona',formData);
            commit('postPersonas',formData)
        },
        postFormData ({commit}, formData){
            console.log('action -> postPersona',formData);
            commit('postPersonas2',formData)
        },
        async GET_PERSONAS() {
            let {data: personas} = await axios(this.state.url)
            //commit('SET_PERSONAS', personas)
            this.state.personas = personas
        }
    },
    mutations:{
        async postPersonas(state, formData) {
            state.personas = formData
            try {
                let { resp } = await axios.post(state.url,state.personas)
                console.log(resp.data);
              } catch (err) {
                console.error();(err);
              }
        },
        postPersonas2(state, formData) {
            this.state.personas = formData
            axios.post(state.url,state.personas)
            .then(res => {
               console.log(res);
            })
            .catch(error => console.log('error Axios',error))
        },

    }



})