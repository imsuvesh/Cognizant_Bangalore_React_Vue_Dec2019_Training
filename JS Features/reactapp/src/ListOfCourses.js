import React from 'react';
import Course from './course.component';
import axios from 'axios';


export class ListOfCourses extends React.Component{
    // constructor(props){
    //     super(props);
    //     //console.log(this.props.allcourses);
    //     //this.courses =this.props.allcourses;
    // //       {name:"React",price:"299$",likes:450,location:"BLR",trainer:"Aditya",imageurl:"https://cdn.worldvectorlogo.com/logos/react.svg"}
    // //     ,{name:"Redux",price:"399$",likes:200,location:"BLR",trainer:"Ram",imageurl:"https://miro.medium.com/max/2800/0*U2DmhXYumRyXH6X1.png"}
    // //     ,{name:"Vue",price:"499$",likes:500,location:"BLR",trainer:"Manan",imageurl:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png"}
    // //     //this.headerImage="https://s31450.pcdn.co/wp-content/uploads/2015/10/iStock_computer-art.151110.jpg";
    // // ];
    // }

    componentDidMount(){
      axios.get('https://api.myjson.com/bins/wpui4').then(
        response => this.props.FetchCourse(response.data)
      )
    }
    render(){
        let coursesToBeCreated = this.props.allcourses.map(c=><Course key={c.id} coursenames={c}  {...this.props}/>);
      return (<div>
            <div className="jumbotron">
                <h1>Online Courses</h1>
            </div>
            <div className="row">
          {/*}
          <img src ={this.headerImage} height="200px" width= "400px"/>
            <CourseComponent coursename ="Name Of Courses"/>
            <Course coursenames = {this.course1} />
            <Course coursenames = {this.course2} />
            <Course coursenames = {this.course3} />
    */}
    {coursesToBeCreated}
        </div>
     </div>);
          
    }
  }