import React from 'react';

export class TodoForm extends React.Component{
	constructor(){
		super();
		this.addTasks=this.addTasks.bind(this);
	}

    addTasks(e){
    	e.preventDefault();
		const input=document.getElementById('todoInput');
		const val=input.value;
		console.log(val);
		input.value='';
		this.props.addTasks(val);
       

	}

	render(){
		
		return(
		<div>
			<div className="todo-type1">
				<form className="input-wrapper" onSubmit={this.addTasks}>
				 	<input id="todoInput" type="text" className="add-todo"/>

				 </form>

			</div>
			<button type="button" className="btn btn-outline-warning" onClick={this.addTasks}>ADD</button>
		 	
        </div>

		)
		
	}
}

