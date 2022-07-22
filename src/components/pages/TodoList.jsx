import React, {useState} from "react";
import Header from "../header/Header";
import Form from "../form/Form";
import Layout from "../layout/Layout";
import List from "../list/List";

function TodoList() {
    const [todos, setTodos] = useState([
        {
          id: 1,
          title: "리액트 실습",
          memo: "리액트 기초 공부",
          isDone: false,
        },
        {
          id: 2,
          title: "리액트 과제 화이팅!",
          memo: "리액트는 쉽지 않다.",
          isDone: true,
        },
      ]);

    return (
      <div>
        <Layout>
            <Header></Header>
            <Form todos={todos} setTodos={setTodos}></Form>
            <List todos={todos} setTodos={setTodos}></List>
        </Layout>
      </div>
    );
  }
  
  export default TodoList;