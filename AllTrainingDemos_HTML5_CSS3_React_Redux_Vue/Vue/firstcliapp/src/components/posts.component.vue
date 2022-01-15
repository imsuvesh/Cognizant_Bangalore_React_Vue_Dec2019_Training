<template>
<div>
    <div class="jumbotron">
        <h1> All Posts</h1>
    </div>
    <ul>
        <li v-for="p in allposts" :key="p.id">
            <router-link :to="{name:'postsdetails',params:{id:p.id} }"> {{p.title}} </router-link>
        </li>
    </ul>
</div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'posts',
    data() {
        return {
            allposts: []
        }
    },
    mounted() {
        // ajax request !
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(
                response => {
                    this.allposts = response.data;
                    localStorage["posts"] = JSON.stringify(response.data);
                }
            )
    }

}
</script>

<style scoped>

</style>
