import { useEffect, useRef, useState } from 'react';
import { v4 as uuid } from 'uuid';
import ListContainer from './components/ListContainer';
import ListHead from './components/ListHead';

function App() {
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
    const newCompletelist = [...todoList];
    const itemIndex = newCompletelist.findIndex((item) => item.id === id); // 用id撈出index
    newCompletelist[itemIndex].isCompleted = true; // 把該index的element的isCompleted改成true
    
    
    
    // let isCompletedStatus = newCompletelist[itemIndex].isCompleted
    // console.log(isCompletedStatus)
    // if (isCompletedStatus === false) {
    //   isCompletedStatus = true;
    // } else if (isCompletedStatus === true) {
    //   isCompletedStatus = false;
    // }

    // setTodoList(isCompletedStatus)


    setTodoList(newCompletelist); // 再把我們修改好的array存回hook



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
      <ListContainer
        todoList={todoList}
        onDeleteItem={handleDeleteItem}
        onCompleteItem={handleCompleteItem}
      />
    </div>
  );
}

export default App;
