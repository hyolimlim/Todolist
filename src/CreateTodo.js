import React from 'react';
import './CreateTodo.css';


function CreateTodo({ title, content, onChange, onCreate }) {
  return (
    <div className='top'>
      <h1>TodoList</h1>
      <input
        name="title"
        placeholder="제목"
        onChange={onChange}
        value={title}
      />
      <input
        name="content"
        placeholder="내용"
        onChange={onChange}
        value={content}
      />
      <button onClick={onCreate}>등록</button>
    </div>
  );
}

export default CreateTodo;