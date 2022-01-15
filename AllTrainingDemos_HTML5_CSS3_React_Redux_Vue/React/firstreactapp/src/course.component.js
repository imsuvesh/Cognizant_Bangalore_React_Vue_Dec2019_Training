
import React from 'react';

export default class CourseComponent extends React.Component {
    
    constructor(props){
        super(props);     
    }
    IncrementLikes(){
     
     this.props.IncrementCourseLikes(this.props.coursedetails.id); // dispatch an action;

    }

    CourseDeleteHandler(){
        this.props.DeleteCourse(this.props.coursedetails.id);
    }
    
    render() {

        
        return <div className="col-md-4">
              <button className="btn btn-danger btn-sm" 
         onClick={this.CourseDeleteHandler.bind(this)}>
                <span className="glyphicon glyphicon-trash"></span>
            </button>
            <h1>{this.props.coursedetails.name}</h1>
          
            <img src={this.props.coursedetails.ImageUrl} height="200px" width="200px" />
            <h5>Price : {this.props.coursedetails.price}</h5>
            <h5>Location : {this.props.coursedetails.location}</h5>           
            <h5>Trainer : {this.props.coursedetails.trainer}</h5>
            <button className="btn btn-primary" 
            onClick={this.IncrementLikes.bind(this)}>
                {this.props.coursedetails.likes}
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