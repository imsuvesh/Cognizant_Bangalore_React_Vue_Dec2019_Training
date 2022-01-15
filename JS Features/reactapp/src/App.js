import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Posts from './post.component';
import PostsWithStore from './posts.withstore';
import {ListOfCourses} from './ListOfCourses';
import { Switch,Route,Link } from 'react-router-dom';



class App extends React.Component{
  render(){
    return  <div>
      <nav className="navbar navbar-inverse">
  <div className="container-fluid">
    <div className="navbar-header">
      <a className="navbar-brand" href="/">Online Courses</a>
    </div>
    <ul className="nav navbar-nav">
      <li><Link to ="/">Home</Link></li>
      <li><Link to ="/posts">Posts</Link></li>
      <li><Link to ="/postswithstore">PostsWithStore</Link></li>
      
    </ul>
  </div>
</nav>
      <Switch>
        <Route exact path="/" render={()=><ListOfCourses {...this.props}/>}></Route>
        <Route exact path="/posts" render={()=><Posts {...this.props}/>}></Route>
        <Route exact path="/postswithstore" render={()=><PostsWithStore {...this.props}/>}></Route>


      </Switch>
    </div>
    //<ListOfCourses {...this.props}/>
    //<Posts/>
    
  }
}


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
