import React, { useState } from 'react';
import Input from "./Input"
import Container from "./Container"

let initialList = [
  { id: 'id-1', content: '洗碗', isCompleted: false },
  { id: 'id-2', content: '拖地', isCompleted: false },
  { id: 'id-3', content: '洗衣服', isCompleted: false },
  { id: 'id-4', content: '倒垃圾', isCompleted: false },
  { id: 'id-5', content: '運動', isCompleted: false },
  { id: 'id-6', content: '寫作業', isCompleted: false },
];

export default function TodoList2() {
  const [todoList, setTodoList] = useState(initialList);
  return (
    <div className="m-3">
      <Input todoList={todoList}  setTodoList={setTodoList}/>
      <Container />


  
    </div>
  );
}
