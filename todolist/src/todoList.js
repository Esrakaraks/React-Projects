import React from 'react';

export class TodoList extends React.Component{
	render(){
		const items_left=0;
		const items=this.props.mytasks.map((elem,i)=>{
		return(
		<ul>
			<li class="list-group-item disabled">
				<span className="id">{i+1}</span>
				<span className="title">{elem}</span>
				<span className="type"></span>
				<span className="delete"></span>
				 
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

				<div class="row">
  					 <div class="col-xs-6 col-sm-3"><span>{items_left} items left</span></div>
					  <div class="col-xs-6 col-sm-3"><span className="active">All</span></div>
					 
					  
					  <div class="col-xs-6 col-sm-3"><span>Active</span></div>
					  <div class="col-xs-6 col-sm-3"><span>Completed</span></div>
				</div>


			
		    </div>
		)
		
	}
}

