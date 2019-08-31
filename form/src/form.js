import React from 'react';
 



 export class Form extends React.Component  {
 	render(){
 		return(
 			<div className="container">
 				<form>
  					<div className="form-group">
    					<label for="exampleInputEmail1">Email address:</label>
    					<input type="email" className="form-control" id="exampleInputEmail1" placeholder="Enter email"/>
   					</div>
  					<div class="form-group">
    					<label for="exampleInputPassword1">Password</label>
    					<input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
 					</div>
  					<button type="submit" className="btn btn-primary">Submit</button>
				</form>
 				
 			</div>

 		);

 	}
 }