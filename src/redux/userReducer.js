//this is our thinking
// var setUserAction = {
//     type: 'SET_USER',
//     payload:{
//         id:1,
//         username:'peter.pan'
//     }
// }

// var unsetUserAction = {
//     type: 'UNSET_USER'
// }

var initialState = null;

function userReducer(state = initialState, action){

    if(action.type == 'SET_USER'){

        // state.push(action.payload)

        return action.payload

    }else if (action.type == 'UNSET_USER'){

        return null

    }else{

        return state

    }

    //reture the state



}

export default userReducer;

