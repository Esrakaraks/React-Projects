import React from 'react';

export class TodoForm extends React.Component{
	constructor(){
		super();
		this.catchTasks=this.catchTasks.bind(this);
	}

    catchTasks(e){
    	e.preventDefault();
		const input=document.getElementById('todoInput');
		const val=input.value;
		console.log(val);
		input.value='';
		this.props.catchTasks(val); //parent-child communication
     }

	render(){
		
		return(
		<div>
			<div className="todo-type1">
				<form className="input-wrapper" onSubmit={this.catchTasks}>
				 	<input id="todoInput" type="text" className="add-todo"/>

				 </form>

			</div>
			<button type="button" id="btn" onClick={this.catchTasks}>ADD</button>
		 	
        </div>

		)
		
	}
}

