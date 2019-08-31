import React,{Component} from 'react';
import {Header}  from './inc/header';
import {Form} from './form';


class App extends  Component {
	render(){
 		 return (
   			 <div className="container">
   			 	<Header/>
    			<Form/>



    		</div>
 		 );
	}
}

export default App;
