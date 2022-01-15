let theIndex;
export function courses(defStore = [], action) {
    switch (action.type) {
        case 'INCREMENT_LIKES':        
        // find the element/index to increment the likes
       theIndex= defStore.findIndex(c=> c.id == action.theId);
        console.log(theIndex);      
       return [
        ...defStore.slice(0,theIndex),
        {...defStore[theIndex],likes:defStore[theIndex].likes + 1},
        ...defStore.slice(theIndex+1)
    ];// return a new store data
           
        case 'DELETE_COURSE':
        theIndex = defStore.findIndex(c=> c.id == action.theId);
           return [
            ...defStore.slice(0,theIndex),
            ...defStore.slice(theIndex+1)
           ];// return a new store data

           case 'FETCH_COURSES':
               return action.response;// response from AJAX request !
        default:
            return defStore;
    }
}