import React from "react";
import axios from "axios";

export default class PostsWithStore extends React.Component{

    componentDidMount(){
        //ajax request
        axios.get("https://jsonplaceholder.typicode.com/posts").then(
            response => this.props.FetchPost(response.data)
        )
    }

    DeletePost(){
        this.props.DeletePost(this.props.posts.id);//dispatching action to delete course action
    }

    render(){
        let postsToBecreated = this.props.allposts.map(c=><li key={c.id}>{c.title}<button className="btn btn-warning btn-sm" onClick={this.DeletePost.bind(this)}>
        <span className="glyphicon glyphicon-trash"></span>
        </button></li>);
        return <div>
        <h1>All Posts</h1>
        <ul>
            {postsToBecreated}
        </ul>
        </div>

    }

    
}