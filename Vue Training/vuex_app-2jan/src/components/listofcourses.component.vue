<template>
  <div >
      <div class="jumbotron">
          <h1>Online Courses</h1>
          <strong>Total count:{{totalCount}}</strong>
      </div>
    <div class="col-md-4" v-for=" c in this.$store.state.courses" :key="c.id"><course :course-details="c" @delete-a-course="DeleteTheCourse_Parent($event)"></course></div>
  </div>
</template>
<script>
import Course from './course.component.vue';
import {mapGetters} from 'vuex';
export default {
    name: 'listofcourses',
    components: {
        Course
    },
    methods:{
        DeleteTheCourse_Parent(theId){
            this.courses=this.courses.filter(c=>c.id!=theId);
        }
    },
    mounted(){
      //dispatch an action
      this.$store.dispatch('getCoursesAsync');
    },
    computed:{ //mapGetters is to make getters available as computed property
      ...mapGetters(['totalCount'])
    }
    
}

</script>