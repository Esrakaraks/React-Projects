import React from 'react';
 



 export class Form extends React.Component  {
 	constructor(props){
		super(props);
		this.state={ firstname :' ',
					lastname:' ',
					email :' ',
					password :' '

		}
   }

 	change=(e)=>{
 		this.setState({
      [e.target.name]: e.target.value
 		

    });
 		

 	}


 	 onSubmit = e => {
 	 	  alert('A name was submitted: ' + this.state.firstname +  " " + this.state.lastname + " " +
 	 	  this.state.email  + " " + this.state.password );
 	 	    
   		 e.preventDefault();

   			 


}
 	



 	render(){
 		return(
 			<div className="container">
 				<form className="form">

 				   <div className="form-group">
    					<label htmlFor="Name">Name:</label>
    					<input type="text" className="form-control"  name="firstname"  value ={this.state.firsname} onChange={this.change}  placeholder="Enter Name"/>
   					</div>

   					<div className="form-group">
    					<label htmlFor="lastname">LastName:</label>
    					<input type="text" className="form-control" name="lastname"  value ={this.state.lastname} onChange={this.change} placeholder="Enter Lastname"/>
   					</div>  

  					<div className="form-group">
    					<label htmlFor="exampleInputEmail1">Email address:</label>
    					<input type="email" className="form-control" name="email" value ={this.state.email} onChange={this.change} placeholder="Enter email"/>
   					</div>

  					<div className="form-group">
    					<label htmlFor="exampleInputPassword1">Password</label>
    					<input type="password" className="form-control" name="password" value ={this.state.password} onChange={this.change} placeholder="Password"/>
 					</div>

  					<button type="submit" id="submit" onClick={this.onSubmit} className="btn btn-primary">Submit</button>
				</form>
 				
 			</div>

 		);

 	}
 }