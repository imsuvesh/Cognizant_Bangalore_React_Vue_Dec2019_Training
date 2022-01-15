<template>
  <!-- <listofcourses></listofcourses> -->
  <!-- <posts></posts> -->
  <!-- <blog>
    <template v-slot:header><h3>Header for blog </h3></template>
    <template v-slot:mainarticle><div>Mainarticle for blog <br/> Mainarticle for blog <br/>Mainarticle for blog <br/>Mainarticle for blog <br/>Mainarticle for blog <br/>  </div></template>
    <template v-slot:footer><h5>Footer for blog  @opensource</h5></template>
  </blog> -->
  <div>
   <nav class="navbar navbar-inverse">
  <div class="container-fluid">
    <div class="navbar-header">
     <router-link class="navbar-brand" to="/">Home</router-link>
    </div>
    <ul class="nav navbar-nav">
      <li ><router-link to="/">Home</router-link></li>
      <li><router-link to="/posts">Posts</router-link></li>
      <li><router-link to="/postdetails">PostsDetails</router-link></li>
    </ul>
  </div>
</nav>
    <router-view></router-view>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import listofcourses from './components/listofcourses.component.vue';
// import Posts from './components/posts.component';
// import Blog from './components/blog.componet';
export default {
  name: 'app',
  components: {
    // HelloWorld,
    // listofcourses,
    // Posts
    // Blog
  }  
}
</script>

<style>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
