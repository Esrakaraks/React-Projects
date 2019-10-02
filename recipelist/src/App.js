import React,{Component} from 'react';
import {RecipeList} from './components/recipeList';
import './app.css';



class App extends  Component {
  render(){
     return (
         <div className="container">
            <RecipeList/>
            
          
         </div>
     );
  }
}

export default App;
