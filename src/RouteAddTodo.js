import React, {Component} from 'react';
import { Router, Link, navigate } from '@reach/router'
import store from './redux/store';
import {connect} from 'react-redux';

class RouteAddTodo extends Component{
	constructor(props){
		super(props)
		this.state = {
			contentInput:'',
			priorityInput:'',
		}
	}
	handleContentInputChange = (e) => {
		this.setState({
			contentInput:e.target.value
		});
	}
	handlePriorityInputChange = (e) => {
		this.setState({
			priorityInput:e.target.value
		});
	}
	handleTodoAddClick = (e) => {
		e.preventDefault();
		var todo = {
			id: Date.now(),
			content: this.state.contentInput,
			priority:this.state.priorityInput,
			username:this.props.currentUser.username
		};
		// var action ={
		// 	type: 'ADD_TODO',
		// 	payload: todo
		// }
		this.props.addTodo(todo)
		navigate('/')
		
		// this.props.addTodo(data);
	}

	render(){
		return (
			<div className="todos">
				<div className="todo new-todo">
	              <form className="todo-body">
	                  <div className="form-group">
	                    <label htmlFor="content-input">Content</label>
	                    <input onChange={this.handleContentInputChange} type="text" className="form-control" id="content-input"/>
	                  </div>

	                  <div className="form-group">
	                    <label htmlFor="priority-input">Priority</label>
	                    <input onChange={this.handlePriorityInputChange} type="text" className="form-control" id="priority-input"/>
	                  </div>
	            
	                  <button onClick={this.handleTodoAddClick} type="submit" className="btn btn-primary todo-add">Add</button>
	              </form>
	            </div>

	            <Link to="/">Back</Link>
	        </div>
		);
	}
}
function mapStateToProps(state){
	return{
		currentUser: state.user
	
	}

}

function mapDispatchToProps(dispatch){
	return{
		addTodo: (todo) => {
				var action ={
				type: 'ADD_TODO',
				payload: todo
			}
			dispatch(action);

		}
	}

}

export default connect(mapStateToProps,mapDispatchToProps)(RouteAddTodo);// if nothing inside the first(), it will put the dispatch into 