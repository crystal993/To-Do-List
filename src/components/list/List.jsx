import React, {useState} from "react";
import './style.css';
import Todo from "../todo/Todo";

function List({todos, setTodos}) {
    return (
      <div className='list-container'>
        <h3>Working.. 🔥</h3>
        <div className='to-do-container'>
            { 
              todos.map((todo)=>(
                <Todo todo={todo} key={todo.id}></Todo>
              ))
            }
        </div>
        <h3>Done..!🎉</h3>
        <div className='to-do-container'>
            { 
              todos.map((todo)=>(
                <Todo todo={todo} key={todo.id}></Todo>
              ))
            }
        </div>
      </div>
    );
  }
  
  export default List;