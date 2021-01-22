import React, { useState } from 'react';
import ToDoForm from './ToDoForm';
import ToDo from './ToDo';

function ToDoList(){
  const[list, setList] = useState([]);

  const addItem = (item) => {
    setList((prev) => [item, ...prev])
  };

  return(
    <div className="todo-list">
        <h1>Zadatci za dan:</h1>
      <ToDoForm onSubmit={addItem}/>
      <ToDo list={list} setList={setList} />
    </div>
  )
}

export default ToDoList;