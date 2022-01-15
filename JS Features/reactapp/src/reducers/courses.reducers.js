export function courses(defStore=[],action){
    switch (action.type){
        case 'INCREMENT_LIKES':
            //find the element/index to increment the likes
            let theIndex =defStore.findIndex(c=>c.id===action.theId);
            console.log(theIndex);
            return[
                ...defStore.slice(0,theIndex),
                {...defStore[theIndex],
                likes:defStore[theIndex].likes+1},
                ...defStore.slice(theIndex+1)
            ];//return new store data
            
        case 'DELETE_COURSE':
            console.log('Within course reducers -DELETE_COURSE');
            let theInd =defStore.findIndex(c=>c.id===action.theId);
            return [
                ...defStore.slice(0,theInd),
                
                ...defStore.slice(theInd+1)
            ];//return new store data
        case 'FETCH_COURSES':
            return action.response;//response from the ajax request
        
        default:
            return defStore;

    }
    }