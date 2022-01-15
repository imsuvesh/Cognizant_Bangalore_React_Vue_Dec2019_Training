import React from 'react';
import axios from'axios';

export default class Posts extends React.Component{

constructor(props){
    super(props);
    this.state ={post:[]};
}
    componentDidMount(){
        //ajax request
        axios.get('https://jsonplaceholder.typicode.com/posts').then(response=>this.setState({post:response.data})
        )
    }
    DeleteHandler(postToBeDeletedID){
        //setState()
        let newPostsList = this.state.posts.filter(currPost=>currPost.id !== postToBeDeletedID )
        this.setState({posts:newPostsList})
    }
    render (){
         var postToBeCreated = this.state.posts.map(p=><li>{p.title} <button className="btn btn-danger btn-sm" onClick={this.DeleteHandler.bind(this,p.id)}><span className="glyphicon glyphicon-trash"></span></button></li>)

    return <div> 
            <h1>All Post</h1>
    <ul>{postToBeCreated}</ul>
        </div>
    }
}