import React  from 'react';
import {Tabs ,Tab} from 'react-mdl';

export  class Projects extends React.Component{

	constructor(props) {
        super(props)
        this.state = { activeTab: 2 };
    }

  
   toggleTab(){
   		

   }
    render() {
        return (
            <div className="demo-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>NodeJs</Tab>
					<Tab>ReactJs</Tab>
                    <Tab>ReactNative</Tab>
                     <Tab>VueJs</Tab>
                </Tabs>
                <section>
                    <div className="Projects-gird">
                       {this.toggleTab()}
                     </div>
                </section>
               
           </div>

        );
    }

}