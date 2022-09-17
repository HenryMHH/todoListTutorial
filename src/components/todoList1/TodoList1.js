import { createContext, useEffect, useRef, useState } from 'react';
import { v4 as uuid } from 'uuid';
import Container from './Container';
import Head from './Head';

export const todoList1Context = createContext();
const { Provider } = todoList1Context;

function TodoList1() {
  const [todoList, setTodoList] = useState([]);
  const ref = useRef(0);

  function handleCreateItem(text) {
    setTodoList(
      (preValue) =>
        (preValue = [
          ...preValue,
          { id: uuid(), message: text, isCompleted: false },
        ])
    );
  }

  function handleDeleteItem(id) {
    const newList = todoList.slice(0);
    const index = newList.findIndex((item) => item.id === id);
    newList.splice(index, 1);
    setTodoList(newList);
  }

  /**
   * 我們有一個todoList array = [{id: 'id', message: 'wish dishes', isCompleted: false},....]
   * 在點選了某一個item的完成按鈕之後，因為你需要找到你點選的是哪個item，所以你需要用id從array裡面撈出你要的element。
   * 撈出了element以後，你需要把該element的元素裡面的property isCompleted從false改成true，再塞回該array。
   */
  function handleCompleteItem(id) {
    const newCompleteList = [...todoList];
    const itemIndex = newCompleteList.findIndex((item) => item.id === id); // 用id撈出index
    if (newCompleteList[itemIndex].isCompleted === false) {
      newCompleteList[itemIndex].isCompleted = true;
    } else if (newCompleteList[itemIndex].isCompleted === true) {
      newCompleteList[itemIndex].isCompleted = false;
    }
    setTodoList(newCompleteList); // 再把我們修改好的array存回hook
    /**
     * TODO: 你會需要在todoList裡面新增一個屬性控制該item在render的時候需不需要加上line-through的className
     *
     * for example:
     *  目前的todoList item
     *     {id:uuid(), message: text }
     *  預期會變成
     *     {id:uuid(), message: text, isCompleted: true or false }
     *
     * 關於如何使用tailwind css加上line-through的用法可以參考：
     * https://tailwindcss.com/docs/text-decoration#setting-the-text-decoration
     */
  }

  function handleUpdateItem(id, newMessage) {
    const newTodoList = [...todoList];
    const index = newTodoList.findIndex((item) => item.id === id);
    newTodoList[index].message = newMessage;

    setTodoList(newTodoList);
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

  const obj = { handleCompleteItem, handleDeleteItem, handleUpdateItem };

  return (
    <div className="flex flex-col justify-center items-center pt-10">
      <h1 className="text-3xl font-thin">TodoList</h1>
      <Provider value={obj}>
        <Head onCreateItem={handleCreateItem} />
        <Container todoList={todoList} />
      </Provider>
    </div>
  );
}

export default TodoList1;
