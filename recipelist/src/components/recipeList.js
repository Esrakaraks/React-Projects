import React from 'react';
import {Textfield } from 'react-mdl';
export class RecipeList extends React.Component{
	render(){
			return(
				<div class="container">
					<h2 class ="h2-title">SEARCH FOR RECİPE WİTH FOOD2FORK</h2>
					<p class="type"> type Recipes separated by comma</p>
					<div class = "textfield-search">
					       <Textfield
							    onChange={() => {}}
							    label="Text lines..."
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
				</div>
			);

	}

}