import React, {Component} from 'react';
import { Router, Link, navigate } from '@reach/router'
import store from './redux/store';
import {connect} from 'react-redux';

class RouteLogin extends Component{
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
		var user = {
			id: 1,
			username: this.state.contentInput
		};
		// var action ={
		// 	type: 'ADD_TODO',
		// 	payload: todo
		// }
		this.props.setUser(user)
		navigate('/')
		
		// this.props.addTodo(data);
	}

	render(){
		return (
			<div className="todos">
				<div className="todo new-todo">
						<form className="todo-body">
								<div className="form-group">
									<label htmlFor="content-input">Username</label>
									<input onChange={this.handleContentInputChange} type="text" className="form-control" id="content-input"/>
								</div>

								<div className="form-group">
									<label htmlFor="priority-input">Password</label>
									<input onChange={this.handlePriorityInputChange} type="text" className="form-control" id="priority-input"/>
								</div>
					
								<button onClick={this.handleTodoAddClick} type="submit" className="btn btn-primary todo-add">Login</button>
						</form>
					</div>

					<Link to="/">Back</Link>
			</div>
		);
	}
}
function mapDispatchToProps(dispatch){
	return{
		setUser: (user) => {
				var action ={
				type: 'SET_USER',
				payload: user
			}
			dispatch(action);

		}
	}

}

export default connect(null,mapDispatchToProps)(RouteLogin);// if nothing inside the first(), it will put the dispatch into 