import React from 'react';
import {Textfield , Grid ,Cell} from 'react-mdl';
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
						    style={{color: 'red'}}
						/>

					</div>
					<h2 class="recipe-list"> RECİPE LIST</h2>

				<div className="grid-style" >
					<Grid className="demo-grid-1">
				        <Cell col={4}><img src ="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/></Cell>
				        <Cell col={4}>4</Cell>
				        <Cell col={4}>4</Cell>
				    </Grid>
				   
				</div>
			</div>
			);

	}

}