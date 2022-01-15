import React from 'react';
import logo from './logo.svg';
import './App.css';
import ListOfCourses from './listofcourses.component';
import Posts from './posts.component';

class App extends React.Component{
  render(){
    // return <Posts/>
    return <ListOfCourses/>
  }
}

export default App;
