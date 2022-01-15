import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

// state,mutations,actions,getters
export const store = new Vuex.Store({
    state:{
        courses:[]
    },
    mutations:{
        incrementLikes(state,args){
            // to increment the likes of a course ! // ?? which course ?
            let index = state.courses.findIndex(c => c.id == args);
            state.courses[index].likes++;
            
        },
        setCourses(state,args){
          //  alert('Inside setCourses Mutation !');
            state.courses = args;
        },
        deleteACourse(state,args){
            state.courses = state.courses.filter(c=>  args != c.id )
        }
    },
    actions:{
        getCoursesAsync({commit}){
            // ajax request !
          //  alert('Making an ajax request !')
            axios.get('https://api.myjson.com/bins/rw8i4')
            .then(response => commit('setCourses',response.data) )
        }
        
    },
    getters:{
        totalCount: state => state.courses.length
    }
});