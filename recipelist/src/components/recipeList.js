import React from 'react';
import {Textfield , Grid ,Cell} from 'react-mdl';
export class RecipeList extends React.Component{
	render(){
			return(
				<div class="container">
					<h3 class ="h2-title">SEARCH FOR RECİPE WİTH FOOD2FORK</h3>
					<p class="type"> type Recipes separated by comma</p>
					<div class = "textfield-search">
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

				<div style={{width: '80%', margin: 'auto'}}>
					<Grid className="demo-grid-1">
				        <Cell col={4}>4</Cell>
				        <Cell col={4}>4</Cell>
				        <Cell col={4}>4</Cell>
				    </Grid>
				</div>
			</div>
			);

	}

}