import React, {useState} from "react";
import './style.css';
import List from "../list/List";

function Form({ setTodos, todos }) {
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
      setTodo({ ...todo, [name]: value, id: todos.length + 1, isDone: false });
    }
  
    const onSubmitHandler = (e) => {
      setTodos([...todos, todo]) // [...todos, todo]
      setTodo(initialState);
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