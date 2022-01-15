import React from 'react';
import axios from 'axios';

export default class Posts extends React.Component {

    constructor(props){
        super(props);
        this.state = {posts:[]};
        console.log('within Constructor');

    }
    componentDidMount() {
        // ajax request
        console.log(' within componentDidMount');
        
        axios.get('https://jsonplaceholder.typicode.com/posts').then(
            response => {
                console.log('Within callback function setting state !')
                this.setState({posts:response.data});
                
            }
        );
        console.log(' request made - exiting componentDidMount ')
    }
    DeleteHandler(postToBeDeletedID){
        // setState()

        let newPostsList = this.state.posts.filter(currPost=>currPost.id != postToBeDeletedID)
        this.setState({posts:newPostsList})
    }
    render() {
        console.log(' within render');

        var postsToBecreated = this.state.posts.map(p =><li key={p.id}>{p.title} &nbsp;
         <button className="btn btn-danger btn-sm" 
         onClick={this.DeleteHandler.bind(this,p.id)}>
                <span className="glyphicon glyphicon-trash"></span>
            </button></li>)
        return <div>
            <h1>All Posts !</h1>
            <ul>
                {postsToBecreated}
            </ul>
        </div>
    }
}