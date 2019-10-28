//Create todoReducer, reducer is a function -IMMUTIBLE
// var addAction = {
//     type: 'ADD_TODO',
//     payload:{
//         id:4,
//         content:'study react',
//         priority: 'high'
//     }
// }

// var removeAction = {
//     type: 'REMOVE_TODO',
//     payload:4
// }

var initialState =[
    {
        id:1,
        content: 'Ring Peter',
        priority: 'Important'
      },
      {
        id:2,
        content: 'Water plants',
        priority: 'Urgent'
      },
      {
        id:3,
        content: 'Get milk',
        priority: 'Can wait'
      }
]
// this 'state' is NOT the same as react state


function todosReducer(state = initialState, action){

    // if(action is added){

    //     add more to state

    // }else if(action is remove){ 
    //     remove item drom state
    // } else{
    //     do nothing
    // }

    if(action.type == 'ADD_TODO'){

        // state.push(action.payload)

        return [...state, action.payload]

    }else if (action.type == 'REMOVE_TODO'){
        var id = action.payload

        return state.filter((todo) => {
            return todo.id !== id;
          })

    }else{

        return state

    }

    //reture the state



}

export default todosReducer;

