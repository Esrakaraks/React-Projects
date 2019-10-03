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

				<div className="card-style" >
					<Card shadow={0} style={{width: '320px', height: '320px', margin: 'auto'}}>
					    <CardTitle expand style={{color: '#fff', background: 'url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC'}}>Update</CardTitle>
					    <CardText>
					        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					        Aenan convallis.
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