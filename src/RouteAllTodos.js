import React, {Component} from 'react';
import Todo from './Todo';
import { Router, Link, navigate } from '@reach/router'
import store from './redux/store';
import {connect} from 'react-redux';


class  RouteAllTodos extends Component {
  
  constructor(props){
    super(props);

  }

  handleLogoutClick = (e) =>{

      console.log('hi')
    e.preventDefault();
    this.props.unsetUser()
  }


  render(){
    return (
          <div className="todos">
            {
              this.props.todos.map((todo) => {
                
                var todoProps = {
                  ...todo,
                  key: todo.id,
           
                };

                return (
                  <Todo {...todoProps}/>
                )
              })
            }
            
            {/* set ternary */}
            {this.props.currentUser == null?<Link to="/login">Log in</Link>  : 
            
            (<>
              <Link to="/add">Add new todo</Link>  |  
              <a href="#" onClick = {this.handleLogoutClick}>Logout</a>
            </>)
            
            }
            
     
            {/* Create a log in */} 
          </div>
    );
  } 
}
function mapStateToProps(state){

    return {
      todos:state.todos,
      currentUser: state.user
    }
}

function mapDispatchToProps(dispatch){
  return{
    unsetUser: () => {
        var action ={
        type: 'UNSET_USER'
      }
        dispatch(action)

      }
    }
  
}
export default connect(mapStateToProps, mapDispatchToProps)(RouteAllTodos); //connect this function to RouteAllTodos, format connect()().






