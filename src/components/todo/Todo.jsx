import './style.css';

function Todo({todo, setTodos, onDeleteHanlder, onToggleHandler}) {
    return (
      <div className='todo-item'>
        <div className='item-contents'>
            <h2>{todo.title}</h2>
            <p>{todo.memo}</p>
        </div>
        <div className='item-buttons'>
            <button onClick={() => onDeleteHanlder(todo.id)}>삭제하기</button>
            <button onClick={() => onToggleHandler(todo.id)}>{todo.isDone? "취소":"완료"}</button>
        </div>
      </div>
    );
  }
  
  export default Todo;