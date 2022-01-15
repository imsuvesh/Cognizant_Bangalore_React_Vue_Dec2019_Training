<template>
<div>
    <div class="jumbotron">
        <h1>Online Courses</h1>
    </div>
    <div id="app" class="row">
        <div class="col-md-4" v-for="c in courses" :key="c.id">
            <course :course-details="c" 
            @delete-a-course="DeleteTheCourse_Parent($event)"></course>
        </div>
    </div>
</div>
</template>

<script>
import Course from './course.component';

export default {
    name: 'listofcourses',
    components: {
        Course
    },
    methods:{
        DeleteTheCourse_Parent(theId){            
            this.courses = this.courses.filter(c => c.id != theId);
        }
    },
    data() {
        return {
            courses: [{
                    id: 1,
                    name: "ReactJS",
                    price: 4000,
                    likes: 500,
                    ImageUrl: 'https://colorlib.com/wp/wp-content/uploads/sites/2/react-dev-tools-logo.jpg',
                    trainer: 'Mr. Sumeet',
                    location: 'Bangalore'
                },
                {
                    id: 2,
                    name: "Redux",
                    price: 3000,
                    likes: 500,
                    ImageUrl: 'https://miro.medium.com/max/2800/0*U2DmhXYumRyXH6X1.png',
                    trainer: 'Mr. Abhijeet',
                    location: 'Bangalore'
                },
                {
                    id: 3,
                    name: "Vue",
                    price: 5000,
                    likes: 900,
                    ImageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png',
                    trainer: 'Mr. Avinash',
                    location: 'Pune'
                },
                {
                    id: 4,
                    name: ".NET",
                    price: 3000,
                    likes: 600,
                    ImageUrl: 'https://dejanstojanovic.net/media/131809/1x1.png',
                    trainer: 'Mr. Manish',
                    location: 'Pune'
                },
                {
                    id: 5,
                    name: "Node",
                    price: 5000,
                    likes: 100,
                    ImageUrl: 'https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/256/full/nodejslogo.png',
                    trainer: 'Mr. Sumeet',
                    location: 'Pune'
                }
            ]
        }
    }
}
</script>

<style scoped>

</style>
