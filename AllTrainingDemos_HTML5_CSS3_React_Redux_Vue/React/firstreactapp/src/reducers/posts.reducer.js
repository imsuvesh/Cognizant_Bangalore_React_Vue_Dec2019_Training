export function posts(defStore = [], action) {
    switch (action.type) {
        case 'DELETE_POST':
            console.log('Within posts Reducer - DELETE_POST');           
            console.log(defStore);

            return defStore; // return a new store data
        default:
            return defStore;
    }
}