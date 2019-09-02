import React, {Component} from 'react';
import { Layout,Header,Drawer,Navigation,Content} from 'react-mdl';
import Main from '../components/main';
import {Link} from 'react-router-dom';
export  class Headerr extends React.Component{

	render(){

		return(

			<div className="demo-big-content">
    			<Layout>
      			  <Header title="Title" scroll>
	            		<Navigation>
			                <Link to="/about">About Me</Link>
			                <Link to="/contact">Contact</Link>
			                <Link to="/projects">Projects</Link>
			                <Link to="/resume">Resume</Link>
	            		</Navigation>
        			</Header>
        			<Drawer title="Title">
            			<Navigation>
			                <a href="/">Link</a>
			                <a href="/">Link</a>
			                <a href="/">Link</a>
			                <a href="/">Link</a>
           			 	</Navigation>
        			</Drawer>
        			<Content>
            			<div className="page-content" />
            			<Main/>
        			</Content>
    			</Layout>
			</div>

			);
	}

}