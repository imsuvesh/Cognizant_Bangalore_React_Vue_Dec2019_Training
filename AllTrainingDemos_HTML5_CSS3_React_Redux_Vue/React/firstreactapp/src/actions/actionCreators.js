export function IncrementCourseLikes(theId){ // action creator
    return {type:'INCREMENT_LIKES',theId:theId}; // action
}

export function DeleteCourse(theId){ // action creator
    return {type:'DELETE_COURSE',theId:theId}; // action
}


export function DeletePost(){ // action creator
    return {type:'DELETE_POST'}; // action
}

export function FetchCourses(response){
    return {type:'FETCH_COURSES',response} // same as response:response
}