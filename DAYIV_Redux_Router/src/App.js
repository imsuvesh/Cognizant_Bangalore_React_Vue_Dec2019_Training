import React from 'react';
import logo from './logo.svg';
import './App.css';
import ListOfCourses from './listofcourses.component';
import Posts from './posts.component';
import { Switch, Route, Link } from 'react-router-dom';

class App extends React.Component {
  render() {

    return <div>

      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <Link className="navbar-brand" to="/">Online Shopping</Link>
          </div>
          <ul className="nav navbar-nav">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/posts">Posts</Link></li>          
          </ul>
        </div>
      </nav>

      <Switch>
        <Route exact path="/" render={() => <ListOfCourses {...this.props} />} />
        <Route path="/posts" render={() => <Posts {...this.props} />} />

      </Switch>
    </div>
  }
}

export default App;
