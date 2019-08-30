import React,{Component} from 'react';
import {TodoList} from './todoList';
import {TodoForm} from './todoForm';
import {Header} from './inc/header';
import {Footer} from './inc/footer';



class App extends Component{
  constructor(){
      super();
      this.state=  {tasks : [{text:"read a book",status:"passive"},
                              {text:"write code",status:"passive"}
                      
                   ]};
      this.addTasks=this.addTasks.bind(this);
 }

  addTasks(val){
    let updateList =this.state.tasks;
    updateList.push({text:val,status:"passive"});
    this.setState({tasks:  updateList});
   }

   doneTasks(task_id){

   }

  deleteTasks(task_id){


    }
  render(){

 
    return(

      <div className="container">
        <Header/>
       -
        <TodoForm catchTasks={this.addTasks} />
        <TodoList mytasks={this.state.tasks}/>
        <Footer/>
      </div>
      )
  }
}


export default App;
