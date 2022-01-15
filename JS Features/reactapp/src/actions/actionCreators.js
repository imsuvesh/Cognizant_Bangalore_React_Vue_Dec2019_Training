export function IncrementCourseLikes(theId){//Action Creators
    return {type:'INCREMENT_LIKES',theId:theId};//ACTION
}

export function DeleteCourse(theId){//Action Creator
    return {type:'DELETE_COURSE',theId:theId};//ACTION
}

export function DeletePost(theId){//action creator
    return {type:'DELETE_POST',theId:theId};//action
}


export function FetchCourse(response){
    return {type:'FETCH_COURSES',response}//same as response:response (same id:key then write only id)
}

export function FetchPost(response){
    return {type:'FETCH_POSTS',response}//same as response:response (same id:key then write only id)
}