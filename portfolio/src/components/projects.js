import React  from 'react';
import {Tabs ,Tab ,Grid,Cell , Card  , CardTitle , CardText , CardActions , CardMenu, Button ,IconButton } from 'react-mdl';

export  class Projects extends React.Component{

	constructor(props) {
        super(props)
        this.state = { activeTab: 0 };
    }

  
   toggleTab(){
   		if(this.state.activeTab == 0){
   			return(
   			<div className="Projects-gird">
   				<Card shadow={0} style={{width: '250px', margin: '40px'}}>
    				<CardTitle style={{color: '#fff', height: '176px', background: 'url(https://tr.reactjs.org/logo-og.png) center / cover'}}>ReactProject #1</CardTitle>
    				<CardText>
       					 Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        				 Mauris sagittis pellentesque lacus eleifend lacinia...
   					</CardText>
    				<CardActions border>
        				<Button colored>GitHub</Button>
   					</CardActions>
    				<CardMenu style={{color: '#fff'}}>
       					 <IconButton name="share" />
    				</CardMenu>
				</Card>

				{  }
				<Card shadow={0} style={{width: '250px', margin: '40px'}}>
    				<CardTitle style={{color: '#fff', height: '176px', background: 'url(https://tr.reactjs.org/logo-og.png) center / cover'}}>ReactProject #2</CardTitle>
    				<CardText>
       					 Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        				 Mauris sagittis pellentesque lacus eleifend lacinia...
   					</CardText>
    				<CardActions border>
        				<Button colored>GitHub</Button>
   					</CardActions>
    				<CardMenu style={{color: '#fff'}}>
       					 <IconButton name="share" />
    				</CardMenu>
				</Card>
			</div>
   		)
   		}

   		else if(this.state.activeTab == 1){
   			return(
   				<div><h1>ReactJs</h1></div>
   				)
   		}
   		else if(this.state.activeTab== 2){
   			return(
   				<div><h1>ReactNative</h1></div>
   			)
   		}
   		else if (this.state.activeTab == 3){
   			return(
   				<div><h1>VueJs</h1></div>
   			)

   		}

   }
    render() {
        return (
            <div className="demo-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>ReactJs</Tab>
					<Tab>NodeJs</Tab>
                    <Tab>ReactNative</Tab>
                     <Tab>VueJs</Tab>
                </Tabs>
                <section>
                    <div>
                    	 <Grid className="demo-grid-ruler">
        					<Cell col={12}>
        						{this.toggleTab()}
        					</Cell>
                        </Grid>
                     </div>
                </section>
               
           </div>

        );
    }

}