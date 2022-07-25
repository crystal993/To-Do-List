import React, { useRef, useState } from "react";
import "./style.css";
import List from "../list/List";

function Form({ setTodoList, todoList }) {
  const nextId = useRef(3);

  // 초기값
  const initialState = {
    id: 0,
    title: "",
    memo: "",
    isDone: false,
  };

  // form에서 입력되는 데이터만 담은 state
  const [todo, setTodo] = useState(initialState);

  const onChangeHandler = (e) => {
    // e.target에 input에 대한 name과 value가 객체 속성으로 존재
    // 구조분해할당을 통해 name과 value라는 변수에 값을 담는다.
    // console.log(e.target); //각각의 input이 찍힌다. 예시 <input name="title" type="text" value="d">
    const { name, value } = e.target;

    // console.log({ [name]: value }); // 예시 {memo: 'd'}, {title: 'd'}
    setTodo({ ...todo, [name]: value, id: nextId.current, isDone: false });
    nextId.current += 1;
  };

  const onSubmitHandler = (e) => {
    e.preventDefault(); // false 전송을 막을 수 있다.
    setTodoList([...todoList, todo]); // [...todos, todo]
    setTodo(initialState); //input값 초기값으로 다시 세팅
  };

  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <div className="to-do-form">
          <div className="input-box">
            <label>제목</label>
            <input
              name="title"
              type="text"
              onChange={onChangeHandler}
              value={todo.title}
            ></input>
            <label>내용</label>
            <input
              name="memo"
              type="text"
              onChange={onChangeHandler}
              value={todo.memo}
            ></input>
          </div>
          <button>추가하기</button>
        </div>
      </form>
    </div>
  );
}

export default Form;
