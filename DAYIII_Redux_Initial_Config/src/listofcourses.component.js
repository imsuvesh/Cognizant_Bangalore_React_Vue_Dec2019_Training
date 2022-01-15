import React from 'react';
import Course from './course.component';

export default class ListOfCourses extends React.Component {
    constructor() {
        super();
        this.courses =[];

    }
    render() {
        let coursesToBeCreated = this.courses.map(c => <Course coursedetails={c} />);
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