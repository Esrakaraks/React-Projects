import React,{Component} from 'react';
import './app.css';
import {Headerr}  from './inc/header';
import {About} from './components/aboutme';
import {Contact} from './components/contact';
import {LandingPage} from './components/landingpage';
import {Resume} from './components/resume';
import {Projects} from './components/projects';



class App extends  Component {
  render(){
     return (
         <div className="container">
            <Headerr/>
            <LandingPage/> 
          
         </div>
     );
  }
}

export default App;
