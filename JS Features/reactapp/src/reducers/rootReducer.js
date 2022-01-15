import {combineReducers} from 'redux';
import {courses} from './courses.reducers';
import {posts} from './posts.reducers';

export var rootReducers =combineReducers({posts,courses})