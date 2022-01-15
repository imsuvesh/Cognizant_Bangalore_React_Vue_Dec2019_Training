import React from 'react';

export default class Course extends React.Component{
    // constructor(props){
    //     super(props);
    //     //console.log(this.props);
    //     //this.state ={count:this.props.coursenames.likes};
    // }
    IncrementLikes(){
       // this.setState({count:this.state.count +1}) 
       this.props.IncrementCourseLikes(this.props.coursenames.id); //dispatch an action
    }
    DeleteCourse(){
        this.props.DeleteCourse(this.props.coursenames.id);//dispatching action to delete course action
    }
    render(){
        return (<div className ="col-md-4" >
    <h3 >{this.props.coursenames.name}  </h3>
    <img src = {this.props.coursenames.imageurl} height= "200px" width="200px" alt=""></img>
    <h4 > Price:   {this.props.coursenames.price}  </h4>
    <h6 > City:   {this.props.coursenames.location}  </h6>
    <h6 > Trainer:   {this.props.coursenames.trainer}  </h6>
    <button className="btn btn-primary" onClick={this.IncrementLikes.bind(this)}>{this.props.coursenames.likes}<span className="glyphicon glyphicon-thumbs-up"></span></button>&nbsp; &nbsp;
    <button className="btn btn-danger" onClick={this.DeleteCourse.bind(this)}><span className="glyphicon glyphicon-trash"></span></button>
        </div>);
    }   
}