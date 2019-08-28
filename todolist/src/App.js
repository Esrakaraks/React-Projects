import React,{Component} from 'react';
import {TodoList} from './todoList';
import {TodoForm} from './todoForm';
import {Header} from './inc/header';
import {Footer} from './inc/footer';



class App extends Component{
  render(){
    const tasks=["yapılacak işler",
                "kitap oku",
                "React öğren",
                "film izle"];
    return(

      <div className="container">
        <Header/>
       -
        <TodoForm/>
        <TodoList mytasks={tasks}/>
        <Footer/>
      </div>
      )
  }
}


export default App;
