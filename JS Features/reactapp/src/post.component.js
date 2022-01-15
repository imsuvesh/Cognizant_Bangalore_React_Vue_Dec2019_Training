import React from "react";
import axios from "axios";
export default class Posts extends React.Component{
    constructor(props){
        super(props);
        this.state={posts:[]};
    }
    componentDidMount(){
        //ajax request
        axios.get("https://jsonplaceholder.typicode.com/posts").then(
            response=>this.setState({posts:response.data})
        )
    }
    DeleteHandler(postsToBeDeted){
        let newPostsList=this.state.posts.filter(currPost=>currPost.id!==postsToBeDeted);
        this.setState({posts:newPostsList})

    }
    render(){
        var postsToBecreated=this.state.posts.map(p=><li key={p.id}>{p.title}
        <button className="btn btn-warning btn-sm" onClick={this.DeleteHandler.bind(this,p.id)}>
        <span className="glyphicon glyphicon-trash"></span>
        </button>
        </li>)
        return <div>
            <h1>All Posts</h1>
            <ul>
                {postsToBecreated}
            </ul>
            </div>
    }
}