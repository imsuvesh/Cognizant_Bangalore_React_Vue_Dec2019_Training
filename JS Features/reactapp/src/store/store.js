import {createStore} from 'redux';
import {rootReducers} from '../reducers/rootReducer';


// var defaultStoreData ={
//     // courses:[
//     //     {id:1,name:"React",price:"299$",likes:450,location:"BLR",trainer:"Aditya",imageurl:"https://cdn.worldvectorlogo.com/logos/react.svg"},
//     //     {id:2,name:"Redux",price:"399$",likes:200,location:"BLR",trainer:"Ram",imageurl:"https://miro.medium.com/max/2800/0*U2DmhXYumRyXH6X1.png"},
//     //     {id:3,name:"Vue",price:"499$",likes:500,location:"BLR",trainer:"Manan",imageurl:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png"}
//     // ],
//     // posts:[{id:1,name:'Dummy Post'}]
//     courses:[],
//     posts:[],
// }
//createStore(reducer,defStoreData)
export var store = createStore(rootReducers)//,defaultStoreData)


