import './style.css';

function Form() {
    return (
      <div className='to-do-form'>
        <div className='input-box'>
        <label>제목</label>
        <input></input>
        <label>내용</label>
        <input></input>
        </div>
        <button>추가하기</button>
      </div>
    );
  }
  
  export default Form;