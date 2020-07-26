import React, { Component } from 'react';
/*
function TodoItem(props){
  return(
    <li><input 
    type="checkbox" 
    checked={props.todo.completed}
    onChange={() => this.props.handleChangeProps(this.props.todo.id)}/> 
    {props.todo.title}
    </li> 
  )
}*/

class TodoItem extends Component{
  render(){
    const completedStyle = {
      fontStyle: "italic",
      color: "#d35e0f",
      opacity: 0.4,
      textDecoration: "line-through",
    }
    const { completed, id, title } = this.props.todo;

    return (
      <li className="todo-item">
        <input 
          type="checkbox" 
          checked={completed}
          onChange={() => this.props.handleChangeProps(id)}
        /> 
        
        <button 
          onClick={() => this.props.deleteTodoProps(id)}
        >
            Excluir
        </button>
        <span style={this.props.todo.completed ? completedStyle : null}>
          {title}
        </span>
      </li> 
    )      
  }
}

export default TodoItem;