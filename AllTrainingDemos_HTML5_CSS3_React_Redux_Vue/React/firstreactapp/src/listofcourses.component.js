import React from 'react';
import Course from './course.component';
import axios from 'axios';

export default class ListOfCourses extends React.Component {
    constructor(props) {
        super(props);  
    }

    componentDidMount(){

        axios.get('https://api.myjson.com/bins/rw8i4').then(
            response => this.props.FetchCourses(response.data)
        )

    }

    render() {
        let coursesToBeCreated = this.props.allcourses.map(c =>
            <Course key={c.id} coursedetails={c}  {...this.props} />);
        return <div>
            <div className="jumbotron">
                <h1>Online Courses</h1>
            </div>
            <div className="row">
                {coursesToBeCreated}
            </div>
        </div>
    }
}