import React, {useState} from "react";
import Header from "../header/Header";
import Form from "../form/Form";
import Layout from "../layout/Layout";
import List from "../list/List";

function TodoList() {

    // 전체 todo-list를 관리할 state
    const [todoList, setTodoList] = useState([
        {
          id: 1,
          title: "과제 완성하기",
          memo: "리액트 과제!!!!",
          isDone: false,
        },
        {
          id: 2,
          title: "밥먹기",
          memo: "밥",
          isDone: true,
        },
      ]);

    return (
      <div>
        <Layout>
            <Header></Header>
            <Form todoList={todoList} setTodoList={setTodoList}></Form>
            <List todoList={todoList} setTodoList={setTodoList}></List>
        </Layout>
      </div>
    );
  }
  
  export default TodoList;