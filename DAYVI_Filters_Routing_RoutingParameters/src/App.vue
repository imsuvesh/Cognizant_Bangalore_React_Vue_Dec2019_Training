<template>
<!-- <listofcourses></listofcourses> -->
<!-- <posts></posts> -->
<!-- <div>
<blog>
    <template v-slot:header>
        <h2>Header for Blog 1</h2>
    </template>   
        <div>Main Article for Blog 1<br />
            Main Article for Blog 1<br />
            Main Article for Blog 1<br />
            Main Article for Blog 1<br />
            Main Article for Blog 1<br />
            Main Article for Blog 1<br />
        </div> 
    <template v-slot:footer>
        <h4>Footer for Blog 1,@Copyright Cognizant, Dec 2019</h4>
    </template>
</blog>
<hr/>
<blog>
    <template v-slot:header>
        <h1>Big Header for Blog 2</h1>
        <h2>Sub Header for Blog 2</h2>
    </template>   
        <div>Main Article for Blog 2<br />
            Main Article for Blog 2<br />
            Main Article for Blog 2<br />
            Main Article for Blog 2<br />
            Main Article for Blog 2<br />
            Main Article for Blog 2<br />
        </div>
  
      <table>
        <tr>
          <td>First Row First Col</td>
          <td> First Row Second Col</td>
          <td> First Row Third Col</td>
        </tr>

      </table>
   
</blog>
<hr/>
<blog>
    <template #header> 
        <h2>Header for Blog 3</h2>
    </template>  
     <template v-slot:footer>
        <h4>Footer for Blog 3,@Copyright Persitent, Dec 2019</h4>
    </template>
</blog>
</div> -->
<div>

<nav class="navbar navbar-inverse">
  <div class="container-fluid">
    <div class="navbar-header">
      <router-link class="navbar-brand" to="/">Online Courses</router-link>
    </div>
    <ul class="nav navbar-nav">
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/posts">Posts</router-link></li>    
    </ul>
  </div>
</nav>
    <router-view></router-view>
</div>
</template>

<!-- OR <template v-slot:header> -->

<script>
// import Listofcourses from './components/listofcourses.component';
// import Posts from './components/posts.component';
//import Blog from './components/blog.component';

export default {
    name: 'app',
    components: {
        // Listofcourses,
        // Posts,
        // Blog
    }
}
</script>

<style>

</style>
