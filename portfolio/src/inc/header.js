import React  from 'react';
import { Layout,Header,Drawer,Navigation,Content} from 'react-mdl';
import Router from '../components/router';
import {Link} from 'react-router-dom';
export  class Headerr extends React.Component{

	render(){

		return(

			<div className="demo-big-content">
    			<Layout>
      			  <Header className="header-color" title="</>EssraKarakas" scroll>
					<Navigation>
							<Link to="/resume">Resume</Link>
	            			<Link to="/about">About Me</Link>
	            			<Link to="/projects">Projects</Link>
			                <Link to="/contact">Contact</Link>
			                
			                
	            		</Navigation>
        			</Header>
        			
        			<Content>
            			<div className="page-content" />
            			<Router/>
        			</Content>
    			</Layout>
			</div>

			);
	}

}