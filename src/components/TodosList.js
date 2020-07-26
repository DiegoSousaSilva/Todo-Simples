import React, { Component } from 'react';
import TodoItem from './TodoItem';

const TodoList = props =>{

    return(
      <div>
      {
        props.todos.map(todo =>(
          <TodoItem 
            key={todo.id} 
            todo={todo}  
            handleChangeProps={props.handleChangeProps}
            deleteTodoProps={props.deleteTodoProps}
          />
        ))
      }
    </div>
    )
  
}

export default TodoList;