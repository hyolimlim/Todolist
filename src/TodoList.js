import React from 'react';
import './TodoList.css';

function Todo({todo, onRemove, onToggle }) {
  if(todo.isDone===false)
  return (
    <div className='진행중'>
      <h1>{todo.title}</h1> <p>{todo.content}</p>
      <button className="삭제버튼" onClick={() => onRemove(todo.id)}>삭제</button>
      <button className="완료버튼" onClick={()=> onToggle(todo.id)}>완료</button>
    </div>
  );
};

function TodoList({ todos, onRemove, onToggle }) {
  return (
    <div>
      {todos.map(todo => (
        <Todo todo={todo} key={todo.id} onRemove={onRemove} onToggle={onToggle}/>
      ))}
    </div>
  );
}

export default TodoList;