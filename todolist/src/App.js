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
      this.doneTasks=this.doneTasks.bind(this);
      this.deleteTasks=this.deleteTasks.bind(this);
 }

  addTasks(val){
    let updateList =this.state.tasks;
    updateList.push({text:val,status:"passive"});
    this.setState({tasks:  updateList}); //state   update
   }

   doneTasks(task_id){
      task_id=task_id.replace('task_',' ');
      let updateList=this.state.tasks;
      updateList[task_id].status='active';
      this.setState({tasks:updateList}); //state update
   }

  deleteTasks(task_id){
    task_id=task_id.replace('task_',' ');
      let updateList=this.state.tasks;
      updateList.splice(task_id,1);
       this.setState({tasks:updateList});


    }
  render(){

 
    return(

      <div className="container">
        <Header/>
       -
        <TodoForm catchTasks={this.addTasks} />
        <TodoList mytasks={this.state.tasks}   //props
                     doneTasks={this.doneTasks}  //props
                    deleteTasks={this.deleteTasks}/> //props
        <Footer/>
      </div>
      )
  }
}


export default App;
