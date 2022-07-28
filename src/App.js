import logo from './logo.svg';
import React, { useRef, useState } from 'react';
import TodoList from './TodoList';
import TodoDone from './TodoDone';
import CreateTodo from './CreateTodo';
import './App.css';

function App() {

  const [inputs, setInputs] = useState({
    title: '',
    content: ''
  }); //input 담을 변수
  
  const { title, content } = inputs; //비구조화 할당

  const onChange = e => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  };

  const [todos, setTodos] = useState([
    {
      id: 1,
      title: '잠자기',
      content: '잠자기',
      isDone:false
    },
    {
      id: 2,
      title: '산책하기',
      content: '산책하기',
      isDone:true
    },
    {
      id: 3,
      title: '간식먹기',
      content: '간식먹기',
      isDone:false
    }
  ]);

   //배열 신규생성

    const nextId = useRef(4);

    const onCreate = () => {
      const todo = {
        id: nextId.current,
        title,
        content,
        isDone:false
      };
      setTodos(todos.concat(todo));
  
      setInputs({
        title: '',
        content: ''
      });
      nextId.current += 1;
    };

      //삭제버튼
  const onRemove = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
    };
  
      //toggle 버튼
  const onToggle = (id) => {
    setTodos(todos.map((todo) => todo.id === id ? {...todo, isDone: !todo.isDone} : todo));
    };

  return (
    <div className="App">
      <div className="Container">

        <div className="Top">
        <CreateTodo
          title={title}
          content={content}
          onChange={onChange}
          onCreate={onCreate}
        />
        </div>
        <div className='Do-List'>
          <h1>Ongoing Task✍️</h1>
        <div className="List">
        <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
        </div>
        </div>

        <div className='Done-List'>
          <h1>Completed Task👏</h1>
        <div className="Done">
        <TodoDone todos={todos} onRemove={onRemove} onToggle={onToggle} />
        </div>
        </div>
      </div>
    </div>
  );
}

export default App;
