import React,{Component} from 'react';
import {TodoList} from './todoList';
import {TodoForm} from './todoForm';
import {Header} from './inc/header';
import {Footer} from './inc/footer';
const tasks=["kitap oku",
              "kod yaz "];


class App extends Component{

  addTasks(val){
    
    console.log(tasks);
    tasks.push(val); 
    console.log(tasks);

  }

  render(){

 
    return(

      <div className="container">
        <Header/>
       -
        <TodoForm addTasks={this.addTasks} />
        <TodoList mytasks={tasks}/>
        <Footer/>
      </div>
      )
  }
}


export default App;
