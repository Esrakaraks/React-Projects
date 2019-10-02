import React from 'react';
import {Textfield } from 'react-mdl';
export class RecipeList extends React.Component{
	render(){
			return(
				<div class="container">
					<h2 class ="h2-title">SEARCH FOR RECİPE WİTH FOOD2FORK</h2>
					<Textfield
					    onChange={() => {}}
					    label="Text lines..."
					    rows={3}
					    style={{width: '200px'}}
					/>

					{/* Expandable Textfield */}
					<Textfield
					    onChange={() => {}}
					    label="Expandable Input"
					    expandable
					    expandableIcon="search"
					/>

				</div>
			);

	}

}