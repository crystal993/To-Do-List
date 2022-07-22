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
                <div className='todo-item'>
                  <div className='item-contents'>
                      <h2>{todo.title}</h2>
                      <p>{todo.memo}</p>
                  </div>
                  <div className='item-buttons'>
                      <button>삭제하기</button>
                      <button>완료</button>
                  </div>
                </div>
              ))
            }
        </div>
        <h3>Done..!🎉</h3>
        <div className='to-do-container'>
            { 
              todos.map((todo)=>(
                <div className='todo-item'>
                  <div className='item-contents'>
                      <h2>{todo.title}</h2>
                      <p>{todo.memo}</p>
                  </div>
                  <div className='item-buttons'>
                      <button>삭제하기</button>
                      <button>완료</button>
                  </div>
                </div>
              ))
            }
        </div>
      </div>
    );
  }
  
  export default List;