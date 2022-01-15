import {createStore} from 'redux';
import { rootReducer } from '../reducers/rootReducer';

var defaultStoreData = {
    courses: [
        { name: "ReactJS", price: 4000, likes: 500, ImageUrl: 'https://colorlib.com/wp/wp-content/uploads/sites/2/react-dev-tools-logo.jpg', trainer: 'Mr. Sumeet', location: 'Bangalore' },
        { name: "Redux", price: 3000, likes: 500, ImageUrl: 'https://miro.medium.com/max/2800/0*U2DmhXYumRyXH6X1.png', trainer: 'Mr. Abhijeet', location: 'Bangalore' },
        { name: "Vue", price: 5000, likes: 900, ImageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png', trainer: 'Mr. Avinash', location: 'Pune' },
        { name: ".NET", price: 3000, likes: 600, ImageUrl: 'https://dejanstojanovic.net/media/131809/1x1.png', trainer: 'Mr. Manish', location: 'Pune' },
        { name: "Node", price: 5000, likes: 100, ImageUrl: 'https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/256/full/nodejslogo.png', trainer: 'Mr. Sumeet', location: 'Pune' }],
    posts:[{id:1,name:'Dummy Post'}]
}

// createStore(reducer,defStoreData)
export var store = createStore(rootReducer,defaultStoreData);