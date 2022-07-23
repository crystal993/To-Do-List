import React, {useRef, useState} from "react";
import './style.css';
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
      const {name, value} = e.target; //e.target에 input에 대한 name이 있으니깐
      setTodo({ ...todo, [name]: value, id: nextId.current, isDone: false });
      nextId.current += 1;
    }
  
    const onSubmitHandler = (e) => {
      setTodoList([...todoList, todo]) // [...todos, todo]
      setTodo(initialState); //input값 초기값으로 다시 세팅
    }

    return (
      <div>
        <div className='to-do-form'>
          <div className='input-box'>
          <label>제목</label>
          <input name="title" type="text" onChange={onChangeHandler} value={todo.title}></input>
          <label>내용</label>
          <input name="memo" type="text" onChange={onChangeHandler} value={todo.memo}></input>
          </div>
          <button onClick={onSubmitHandler}>추가하기</button>
        </div>
      </div>
    );
  }
  
  export default Form;