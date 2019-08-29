import React from 'react';
const id=document.getElementById('listid');
export class TodoList extends React.Component{
	constructor(){
		super();
		this.deleteTasks=this.deleteTasks.bind(this);
		this.doneTasks=this.doneTasks.bind(this);
	}

	doneTasks(){
		console.log("task okey");

	}


    deleteTasks(id){
		console.log("delete");

	}

    render(){
		const items_left=0;
		const items=this.props.mytasks.map((elem,i)=>{
		return(
		<ul>
			<li className="list">
				<span className="id" id="listİd">{i+1}.</span>
				<span className="title">{elem}</span>
			    <span className="delete"></span>
				<button type="button" onClick={this.deleteTasks} id ="button">Delete</button> 
				<input type="checkbox" onClick={this.doneTasks} id="checkbox"/>
			</li>

		</ul>	

			)
			});
			

		return(
			<div>
				<div  className="todo-list">
					<ul>
						{items}
					</ul>
				</div>

				<div className="row">
  					 <div className="col-xs-6 col-sm-3"><span>{items_left} items left</span></div>
					  <div className="col-xs-6 col-sm-3"><span className="active">All</span></div>
					 
					  
					  <div className="col-xs-6 col-sm-3"><span>Active</span></div>
					  <div className="col-xs-6 col-sm-3"><span>Completed</span></div>
				</div>


			
		    </div>
		)
		
	}
}

