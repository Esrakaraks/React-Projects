import React from 'react';

export class TodoForm extends React.Component{
	render(){
		
		return(
		<div>
			<div className="todo-type1">
				<form className="input-wrapper">
				 	<input id="todoInput" type="text" className="add-todo"/>

				 </form>

			</div>
			<button type="button" class="btn btn-outline-warning">ADD</button>
		 	
        </div>

		)
		
	}
}

