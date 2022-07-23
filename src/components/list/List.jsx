import React, { useState } from "react";
import "./style.css";
import Todo from "../todo/Todo";

function List({ setTodoList, todoList }) {
  const onDeleteHanlder = (todoId) => {
    const newToDos = todoList.filter((todo) => todo.id !== todoId);
    setTodoList(newToDos);
  };

  const onToggleHandler = (todoId) => {
    const newToDos = todoList.map((todo) =>
      todo.id === todoId ? { ...todo, isDone: !todo.isDone } : todo
    );
    setTodoList(newToDos);
  };

  return (
    <div className="list-container">
      <h3>Working.. 🔥</h3>
      <div className="to-do-container">
        {todoList.map((todo) => {
          return (
            <div className="item">
              {todo.isDone === false && (
                <Todo
                  todo={todo}
                  key={todo.id}
                  onDeleteHanlder={onDeleteHanlder}
                  onToggleHandler={onToggleHandler}
                />
              )}{" "}
            </div>
          );
        })}
      </div>
      <h3>Done..!🎉</h3>
      {/* <Todo todo={todo} key={todo.id}></Todo> */}
      <div className="to-do-container">
        {todoList.map((todo) => {
          // eslint-disable-next-line no-lone-blocks
          return (
            <div className="item">
              {todo.isDone === true && (
                <Todo
                  todo={todo}
                  key={todo.id}
                  onDeleteHanlder={onDeleteHanlder}
                  onToggleHandler={onToggleHandler}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default List;
