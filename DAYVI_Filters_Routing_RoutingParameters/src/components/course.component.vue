<template>
    <div :class="['courseStyle',{'Selected':isSelected}]">
        <button class="btn btn-danger" @click="DeleteTheCourse">
            <span class="glyphicon glyphicon-trash"></span>
        </button>
        <h3>{{courseDetails.name | alllowercase | allcaps }}</h3>
        Add to Cart : <input type="checkbox" v-model="isSelected" /><br/>
        <img :src="courseDetails.ImageUrl" height="150px" width="150px"> <br/>
        Is Free ? : <input type="checkbox" v-model="isFree" />
        <div v-show="!isFree">
            <h5>Price : {{courseDetails.price | currency('₹')}}</h5>
        </div>
        <!-- <div v-if="!isFree">
            <h5>Price : {{courseDetails.price | currency('₹')}}</h5>
        </div> -->
          <!-- <div v-else>
            <h5 style="color:lightgreen">This course is FREE ! FREE ! FREE !</h5>
        </div> -->
        <h5>Location: {{courseDetails.location}}</h5>
        <h5>Trainer : {{courseDetails.trainer}}</h5>
       <button class="btn btn-primary" @click="IncrementLikes">
           {{courseDetails.likes}}
           <span class="glyphicon glyphicon-thumbs-up"></span>
       </button>
    </div>
</template>

<script>
    export default {
        name:'course',
        data(){
           return {
                isSelected:false,
                isFree:false
           }
        },
        props:{
            // courseName:{
            //     type:String,
            //     default:'Angular'
            // }

            courseDetails:{
                type:Object
            }
        },
        methods:{
            IncrementLikes:function(){              
                this.courseDetails.likes++;
            },
            DeleteTheCourse(){
                //delete the course !
                this.$emit('delete-a-course',this.courseDetails.id);
            }
        },
        filters:{
            allcaps(val){
                    return val.toUpperCase();
            },
            alllowercase(val){
                    return val.toLowerCase();
            }
        }
    }
</script>

<style scoped>
        .courseStyle{
            border: 1px solid grey;
            border-radius: 10px;
            margin: 10px;
            padding: 10px;
            box-shadow:10px 10px 10px lightslategrey; 
        }
        .Selected{
            background-color: lightcyan;
        }
</style>