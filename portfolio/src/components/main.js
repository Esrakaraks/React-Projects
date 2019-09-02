import React from 'react';
import {Switch , Route }  from 'react-router-dom';
import {LandingPage} from  './landingpage';
import {Contact} from  './contact';
import {Resume} from  './resume';
import {Projects} from  './projects';
import {About} from  './aboutme';



const Main= () => (
	<Switch>
		<Route exact path ='/' component ={LandingPage}/>
		<Route path ='/about' component ={About}/>
		<Route path ='/contact' component ={Contact}/>
		<Route path ='/resume' component ={Resume}/>
		<Route path ='/projects' component ={Projects}/>
	</Switch>
)

export default Main;