import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

//state,mutations,actions,getters
export const store=new Vuex.Store({
    state:{
        courses:[]
    },
    mutations:{
        IncrementLikes(state,args){
            //to increment the likes of a particular course
            let index=state.courses.findIndex(c=>c.id==args);
            state.courses[index].likes++;
            
        },
        setCourses(state,args){
            //alert('Inside setCourses Mutation !')
            state.courses=args;
        },
        DeleteCourse(state,args){
            state.courses=state.courses.filter(c=>args!=c.id)
            
        }
    },
    actions:{
        getCoursesAsync({commit}){
            //ajax request !
            //alert('making an ajax request!')
            axios.get("https://api.myjson.com/bins/wpui4")
            .then(response=>commit('setCourses',response.data))
        }
    },
    getters:{
        totalCount: state => state.courses.length
    }
})