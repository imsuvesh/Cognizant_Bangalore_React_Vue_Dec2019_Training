
import React from 'react';

export default class CourseComponent extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {count:this.props.coursedetails.likes};
    }
    IncrementLikes(){
        // this.props.coursedetails.likes +=1; //props are readonly !
        // this.state.count = this.state.count + 1;
        this.setState({count:this.state.count + 1})
    }
    
    render() {
        return <div className="col-md-4">
            <h1>{this.props.coursedetails.name}</h1>
            <img src={this.props.coursedetails.ImageUrl} height="200px" width="200px" />
            <h5>Price : {this.props.coursedetails.price}</h5>
            <h5>Location : {this.props.coursedetails.location}</h5>           
            <h5>Trainer : {this.props.coursedetails.trainer}</h5>
            <button className="btn btn-primary" 
            onClick={this.IncrementLikes.bind(this)}>
            {this.state.count}
                    <span className="glyphicon glyphicon-thumbs-up">

                    </span>
            </button>
        
        </div>
    }
}

export function Add(x, y) {
    return x + y;
}

export function Multiply(x, y) {
    return x * y;
}