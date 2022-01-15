export function posts(defStore=[],action){
    switch(action.type){
        case 'DELETE_POST':
            console.log('Within posts reducers');
            console.log(action);
            let theInd =defStore.findIndex(c=>c.id===action.theId);
            return [
                ...defStore.slice(0,theInd),
                ...defStore.slice(theInd+1)
            ];//return new store data
            //return defStore;//return a new store data
        case 'FETCH_POSTS':
            return action.response;
        default:
            return defStore;
    }
}