import React from 'react';
import {Textfield , Card ,CardTitle,CardText,CardActions ,Button} from 'react-mdl';
export class RecipeList extends React.Component{
	render(){
			return(
				<div className="container">
					<h3 className ="h2-title">SEARCH FOR RECİPE WİTH FOOD2FORK</h3>
					<p className="type"> type Recipes separated by comma</p>
					<div className = "textfield-search">
					       <Textfield
							    onChange={() => {}}
							    label="Search"
							    rows={3}
							    style={{width: '55rem'}}
							    
							/>
						<Textfield
						    onChange={() => {}}
						    label="Expandable Input"
						    expandable
						    expandableIcon="search"
						    style={{color: 'rowsed'}}
						/>

					</div>
					<h2 class="recipe-list"> RECİPE LIST</h2>

				<div className="card-style" style={{padding:'60px'}}>
					<Card shadow={0} style={{width: '280px',height:'350px',margin :'50px',float:'left'}}>
					    <CardTitle 	expand style={{color: '#fff',height: '150px' ,background: 'url(https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500)'}}>Update</CardTitle>
					    <CardText style={{color: '#fff',height: '30px'}}>
					        
					    </CardText>
					    <CardActions border>
					        <Button colored>View Updates</Button>
					    </CardActions>
					</Card>

					<Card shadow={0}  style={{width: '280px',height:'350px',margin :'50px',float:'left'}}>
					    <CardTitle 	expand style={{color: '#fff',height: '150px' ,background: 'url(https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500)'}}>Update</CardTitle>
					    <CardText style={{color: '#fff',height: '30px'}}>
					        
					    </CardText>
					    <CardActions border>
					        <Button colored>View Updates</Button>
					    </CardActions>
					</Card>
				</div>
			</div>
			);

	}

}