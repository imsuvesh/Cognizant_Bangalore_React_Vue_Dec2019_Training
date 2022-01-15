<template>
  <div >
      <div class="jumbotron">
          <h1>Online Courses</h1>
      </div>
    <div class="col-md-4" v-for="(c,index) in courses" :key="index"><course :course-details="c" @delete-a-course="DeleteTheCourse_Parent($event)"></course></div>
  </div>
</template>
<script>
import Course from './course.component.vue';
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
    data(){
    return{
      courses:[
        {id:1,name:"React",price:"299$",likes:450,location:"BLR",trainer:"Aditya",imageurl:"https://cdn.worldvectorlogo.com/logos/react.svg"},
        {id:2,name:"Redux",price:"399$",likes:200,location:"BLR",trainer:"Ram",imageurl:"https://miro.medium.com/max/2800/0*U2DmhXYumRyXH6X1.png"},
        {id:3,name:"Vue",price:"499$",likes:500,location:"BLR",trainer:"Manan",imageurl:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png"},
        {id:4,name:".NET",price:3000,likes:600,imageurl:'https://dejanstojanovic.net/media/131809/1x1.png',trainer: 'Mr. Manish', location: 'Pune' },
        {id:5,name:"Node",price:5000,likes:100,imageurl:'https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/256/full/nodejslogo.png', trainer: 'Mr. Sumeet', location: 'Pune' }]
    }
  }
}

</script>