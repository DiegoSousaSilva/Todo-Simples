import React from 'react';

import { v4 as uuidv4 } from "uuid";

import TodoList from './TodosList';
import Header from './Header';
import InputTodo from './InputTodo';

class TodoContainer extends React.Component{

  state = {
    todos:[
      {
        id: uuidv4(),
        title: "NodeJs",
        completed:true
      },
      {
        id: uuidv4(),
        title: "ReactJs",
        completed:true
      },
      {
        id: uuidv4(),
        title: "React Native",
        completed:false
      }, 
      {
        id: uuidv4(),
        title: "Javascript",
        completed:false
      },       
      {
        id: uuidv4(),
        title: "Html5",
        completed:true
      }, 
      {
        id: uuidv4(),
        title: "CSS3",
        completed:true
      },
      {
        id: uuidv4(),
        title: "PHP",
        completed:false
      },  

    ]
  };

  handleChange= id =>{
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  }

  delTodo = id =>{
    this.setState({
      todos: [
        ...this.state.todos.filter(todo=>{
          return todo.id !== id;
        })
      ]
    });
  };

  addTodoItem = title =>{
    const newTodo = {
      id: uuidv4(),
      title: title,
      completed: false
    };
    this.setState({
      todos:[...this.state.todos, newTodo]
    })
  }

  render(){

    return(
      <div className="container">
        <Header/>

        <TodoList 
          todos = {this.state.todos} 
          handleChangeProps={this.handleChange}
          deleteTodoProps= {this.delTodo}
        />

        <InputTodo addTodoProps={this.addTodoItem}/>
      </div>
    )
  }



}

export default TodoContainer;
