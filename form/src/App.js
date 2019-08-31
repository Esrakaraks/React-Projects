import React,{Component} from 'react';
import {Header}  from './inc/header';
import {Form} from './form';
import {Footer} from './inc/footer';



class App extends  Component {
	render(){
 		 return (
   			 <div className="container">
   			 	<Header/>
    			<Form/>
    			<Footer/>




    		</div>
 		 );
	}
}

export default App;
