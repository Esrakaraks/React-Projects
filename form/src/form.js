import React from 'react';
 



 export class Form extends React.Component  {
 	constructor(props){
		super(props);
		this.state={name :' ',
					lastname:' ',
					email :' ',
					password :' '

		}

		
		

		
	}

 	nameChange=(e)=>{
 		 this.setState({name: e.target.value});
 		 console.log(this.state.value);

 		}
 	handleSubmit =(e) =>{
 		 alert('A name was submitted: ' + this.state.value);
   	}
 	



 	render(){
 		return(
 			<div className="container">
 				<form className="form">

 				   <div className="form-group">
    					<label htmlFor="Name">Name:</label>
    					<input type="text" className="form-control"  value ={this.state.value} onChange={this.nameChange} id="name" placeholder="Enter Name"/>
   					</div>

   					<div className="form-group">
    					<label htmlFor="lastname">LastName:</label>
    					<input type="text" className="form-control" id="lastname" placeholder="Enter Lastname"/>
   					</div>  

  					<div className="form-group">
    					<label htmlFor="exampleInputEmail1">Email address:</label>
    					<input type="email" className="form-control" id="exampleInputEmail1" placeholder="Enter email"/>
   					</div>

  					<div className="form-group">
    					<label htmlFor="exampleInputPassword1">Password</label>
    					<input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
 					</div>

  					<button type="submit" id="submit" onSubmit={this.handleSubmit} className="btn btn-primary">Submit</button>
				</form>
 				
 			</div>

 		);

 	}
 }