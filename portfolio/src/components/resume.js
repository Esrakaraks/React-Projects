import React  from 'react';
import {Grid , Cell} from 'react-mdl';
export  class Resume extends React.Component{

	render(){
		return(
			<div>
				 <Grid className="demo-grid-2">
        				<Cell className="first-class" col={4}>
        					<h3>Esra Karakaş</h3>
        					 <img  className="img-class" src ="https://cdn.pixabay.com/photo/2017/01/30/23/52/female-2022387_960_720.png"/>
        					 <h3>Programmer</h3>
        					 <hr className="hr-first"/>
        					 <p >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
       			   	  			standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make 
       			   	  		a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, 
       			   	  		remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
       			   	   		Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of 
       			   	   Lorem Ipsum.</p>

        				</Cell>
       					<Cell className="second-class "col={8}>
       						<h3 style ={{ color: 'black' }}>Education</h3>
       						<Grid className="demo-grid-3">
	       						<Cell col={6}>2013-2019
		       						<hr style ={{color : 'blue' }}/>
		       						<h3> Experience </h3>
								</Cell>
	       						<Cell col={6}>FIRAT UNIVERSITY </Cell>
	       						

	       					</Grid>
       					</Cell>
       				
       			</Grid>


			</div>


		);
	}

}