<template>
    <div class="row">
    <div :class="['design',{'Selected':isSelected}] ">
        <h2>{{courseDetails.name | alllowercase | allcaps}}</h2>
        <img :src = "courseDetails.imageurl" height="200px" width="200px" /><br/>
        Is Free?: <input type="checkbox" v-model="isFree" />
        <!-- <div v-if="!isFree" ><h5><strong>Price :</strong>{{courseDetails.price | currency('$')}}</h5></div> 
        <div v-else><h5>Paise tera baap deke gya tha     </h5></div>    -->                      
        <!-- These are doing dom manipulation to stop this we can use v-show for showing and hidding element -->
        <div v-show="!isFree"><h5><strong>Price :</strong>{{courseDetails.price }}</h5></div> 
        
        <h5><strong>Location: </strong>{{courseDetails.location}}</h5>
        <h5><strong>Trainer: </strong>{{courseDetails.trainer}}</h5>
        <button class="btn btn-primary" @click="IncrementLikes"> {{courseDetails.likes}}  <span class="glyphicon glyphicon-thumbs-up"></span></button>
        Select :<input type="checkbox" v-model="isSelected">
         <button class="btn btn-danger" @click="DeleteCourse"><span class="glyphicon glyphicon-trash"></span></button>
        
    </div>
    </div>
</template>

<script>
    export default {
        name:'course',
        data(){
            return{
                isSelected:false,
                isFree:false
            }
        },
        props:{
            courseDetails:{
                type: Object
            }    
        },
        methods:{
            IncrementLikes:function(){
                this.$store.commit('IncrementLikes',this.courseDetails.id)
            },
            DeleteCourse:function(){
                this.$store.commit('DeleteCourse',this.courseDetails.id);
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

<style  scoped>
    .design{
        border: 2px solid ;
        border-radius: 15px; 
        margin: 20px;
        padding: 20px;
        box-shadow: 10px 10px 10px lightslategray;
        
    }
    .Selected{
        background-color: rgb(208, 231, 245);
    }
</style>