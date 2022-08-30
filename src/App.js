import { useEffect, useRef, useState } from 'react';
import { v4 as uuid } from 'uuid';
import ListContainer from './components/ListContainer';
import ListHead from './components/ListHead';

function App() {
  const [todoList, setTodoList] = useState([]);
  const [style, setStyle] = useState("w-[95%] border-b border-black flex justify-between pb-1 mb-4 animate-slide-in")
  const ref = useRef(0);

  function handleCreateItem(text) {
    setTodoList(
      (preValue) => (preValue = [...preValue, { id: uuid(), message: text }])
    );
  }

  function handleDeleteItem(id) {
    const newList = todoList.slice(0);
    const index = newList.findIndex((item) => item.id === id);
    newList.splice(index, 1);
    setTodoList(newList);
  }

  function handleCompleteItem(id) {
      const newCompletelist = [...todoList];
      const completeItem = newCompletelist.find((item) => item.id === id);
      console.log(completeItem)   //undefind

      // setStyle("w-[95%] border-b border-black flex justify-between pb-1 mb-4 animate-slide-in line-through")



  }

  useEffect(() => {
    if (todoList.length === 0) return;
    if (todoList.length > ref.current) {
      alert('新增成功');
    }
    if (todoList.length < ref.current) {
      alert('刪除成功');
    }

    ref.current = todoList.length;
  }, [todoList]);

  return (
    <div className="flex flex-col justify-center items-center pt-10">
      <h1 className="text-3xl font-thin">TodoList</h1>
      <ListHead onCreateItem={handleCreateItem} />
      <ListContainer todoList={todoList} onDeleteItem={handleDeleteItem} onCompleteItem={handleCompleteItem} style={style}/>
    </div>
  );
}

export default App;
