import React,{Component} from 'react';
import {Headerr}  from './inc/header';
import {About} from './components/aboutme';
import {Contact} from './components/contact';
import {LandingPage} from './components/landingpage';
import {Resume} from './components/resume';
import {Projects} from './components/projects';
 import './app.css';


class App extends  Component {
  render(){
     return (
         <div className="container">
            <Headerr/>
          
         </div>
     );
  }
}

export default App;
