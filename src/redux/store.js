import {createStore, combineReducers} from 'redux';
import todosReducer from './todosReducer';//Access to the reducers
import userReducer from './userReducer';//Access to the reducers

//Create the store


// if more than one reducer, have to combine all in one group, pass it to store

var rootReducer = combineReducers({
    todos : todosReducer, 
    user : userReducer

})
var store = createStore(rootReducer)

// Below actions are for testing

// var action1 = {
//     type: 'ADD_TODO',
//     payload:{
//         id:4,
//         content:'study react',
//         priority: 'high'
//     }
// }

// store.dispatch(action1)

// var action2 = {
//     type: 'REMOVE_TODO',
//     payload:2
        
// }

// store.dispatch(action2)

// var action3 = {
//     type: 'ADD_TODO',
//     payload:{
//         id:6,
//         content:'testing react',
//         priority: 'high'
//     }
        
// }

// store.dispatch(action3)


// This is to set the current user as peter
// var action4 = {
//     type: 'SET_USER',
//     payload:{
//         id:1,
//         username:'peter.pan'
//     }
// }

// store.dispatch (action4);

// var action5 = {
//     type: 'UNSET_USER'
// }
// store.dispatch (action5);

//getState, this state is the state we put into the store
console.log(store.getState())

export default store;
