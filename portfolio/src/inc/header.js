import React, {Component} from 'react';
import { Layout,Header,Drawer,Navigation,Content} from 'react-mdl';

export  class Headerr extends React.Component{

	render(){

		return(

			<div className="demo-big-content">
    			<Layout>
      			  <Header title="Title" scroll>
	            		<Navigation>
			                <a href="/">Link</a>
			                <a href="#">Link</a>
			                <a href="#">Link</a>
			                <a href="#">Link</a>
	            		</Navigation>
        			</Header>
        			<Drawer title="Title">
            			<Navigation>
			                <a href="#">Link</a>
			                <a href="#">Link</a>
			                <a href="#">Link</a>
			                <a href="#">Link</a>
           			 	</Navigation>
        			</Drawer>
        			<Content>
            			<div className="page-content" />
        			</Content>
    			</Layout>
			</div>

			);
	}

}