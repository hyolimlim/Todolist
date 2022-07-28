import React from 'react';
import './TodoDone.css';

function Todo({todo, onRemove, onToggle }) {
  if(todo.isDone===true)
  return (
    <div className='완료'>
      <h1>{todo.title}</h1> <p>{todo.content}</p>
      <button className='삭제버튼' onClick={() => onRemove(todo.id)}>삭제</button>
      <button className='취소버튼' onClick={()=> onToggle(todo.id)}>취소</button>
    </div>
  );
};


function TodoDone({ todos, onRemove, onToggle }) {
  return (
    <div>
      {todos.map(todo => (
        <Todo todo={todo} key={todo.id} onRemove={onRemove} onToggle={onToggle}/>
      ))}
    </div>
  );
}

export default TodoDone;