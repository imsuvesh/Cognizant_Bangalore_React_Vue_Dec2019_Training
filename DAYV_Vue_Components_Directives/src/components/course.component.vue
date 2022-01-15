<template>
    <div>
        
        <h3>{{courseDetails.name}}</h3>
        <img :src="courseDetails.ImageUrl" height="100px" width="100px"> <br/>
        <h5>Price : {{courseDetails.price}}</h5>
        <h5>Location: {{courseDetails.location}}</h5>
        <h5>Trainer : {{courseDetails.name}}</h5>
       <button class="btn btn-primary">
           {{courseDetails.likes}}
           <span class="glyphicon glyphicon-thumbs-up"></span>
       </button>
    </div>
</template>

<script>
    export default {
        name:'course',
        props:{
            // courseName:{
            //     type:String,
            //     default:'Angular'
            // }

            courseDetails:{
                type:Object
            }
        }
    }
</script>

<style scoped>

</style>