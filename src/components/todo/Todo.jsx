import './style.css';

function Todo({todo}) {
    return (
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
    );
  }
  
  export default Todo;