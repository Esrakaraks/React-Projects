import React  from 'react';
import {Grid , Cell ,List, ListItem, ListItemContent} from 'react-mdl';

export  class Contact extends React.Component{

	render(){
		return(
		    <div>
			    <Grid className="demo-grid-1">
       			   <Cell col={6}>
       			   	 <h3>ESRA KARAKAŞ</h3 >
       			   	 <img  className="img-class" src ="https://cdn.pixabay.com/photo/2017/01/30/23/52/female-2022387_960_720.png"/>
       			   	 <p className="p-class">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
       			   	  standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make 
       			   	  a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, 
       			   	  remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
       			   	   Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of 
       			   	   Lorem Ipsum.</p>

       			   	 </Cell>
        		   <Cell col={6}>
        		   		<h3>Contact Me</h3>
        		   		<hr/>
        		   		<div className="contact-class">
	        		   		<List>
	  							<ListItem>
	   								<ListItemContent> 
	   								 	<i className="fa fa-phone-square" aria-hidden ='true'/>
	   								 	  Phone : 12345464
	   			                    </ListItemContent>
	 							</ListItem>
	  							<ListItem>
	   								 <ListItemContent>
	   								 email: esrakarakas30@gmail.com
									</ListItemContent>
	 							</ListItem>
	  							
							</List>
						</div>






        		   </Cell>
        		</Grid>
        	</div>


		);
	}

}