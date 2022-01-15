import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as AllActions from './actions/actionCreators';
import App from './App'

//make store as props available to Component
function mapStateToProps(storeDataFromProvider){
    return {
        allcourses:storeDataFromProvider.courses,
        allposts:storeDataFromProvider.posts
    }
}
//make actioncreators as props available to components
function mapDispatchToProps(dispatcher){
    return bindActionCreators(AllActions,dispatcher);
}
export var EnhancedApp = connect(mapStateToProps,mapDispatchToProps)(App)