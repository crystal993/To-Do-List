import React, {useState} from "react";
import './style.css';
import Todo from "../todo/Todo";

function List({todos, setTodos}) {
  const onDeleteHanlder = () => {

  }

  const onEditHandler = () => {

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
                    setTodos={setTodos}
                    onDeleteHanlder={onDeleteHanlder}
                    onEditHandler={onEditHandler}
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
                        setTodos={setTodos}
                        onDeleteHanlder={onDeleteHanlder}
                        onEditHandler={onEditHandler}
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