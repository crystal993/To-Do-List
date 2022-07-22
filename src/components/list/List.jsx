import React, {useState} from "react";
import './style.css';
import Todo from "../todo/Todo";

function List({todos, setTodos}) {
  const onDeleteHanlder = (todoId) => {
    const newToDos = todos.filter((todo)=>todo.id !== todoId);
    setTodos(newToDos);
  }

  const onToggleHandler = (todoId) => {
    const newToDos = todos.map(todo => todo.id === todoId ? {...todo, isDone: !todo.isDone} : todo)
    setTodos(newToDos);
  }

    return (
      <div className='list-container'>
        <h3>Working.. 🔥</h3>
        <div className='to-do-container'>
            {todos.map((todo) => {
              if (!todo.isDone) {
                return (
                  <Todo
                    todo={todo}
                    key={todo.id}
                    onDeleteHanlder={onDeleteHanlder}
                    onToggleHandler={onToggleHandler}
                  />
                );
              } else {
                return null;
              }
            })}
        </div>
        <h3>Done..!🎉</h3>
        {/* <Todo todo={todo} key={todo.id}></Todo> */}
        <div className='to-do-container'>
            { 
              todos.map((todo)=>{
                // eslint-disable-next-line no-lone-blocks
                {
                  if(todo.isDone){
                    return (
                      <Todo
                        todo={todo}
                        key={todo.id}
                        onDeleteHanlder={onDeleteHanlder}
                        onToggleHandler={onToggleHandler}
                      />
                    );
                  } else {
                    return null;
                  }
                }
              })
            }
        </div>
      </div>
    );
  }
  
  export default List;