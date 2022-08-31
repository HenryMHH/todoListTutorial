import { useEffect, useRef, useState } from "react";
import { v4 as uuid } from "uuid";
import ListContainer from "./components/ListContainer";
import ListHead from "./components/ListHead";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [style, setStyle] = useState(
    ""
  );
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

  function handleCompleteItem(id) {
    const newCompletelist = [...todoList];
    // console.log(newCompletelist);
    /**
     * TODO: 這邊應該要用findIndex去撈該id的index
     */
    const completeItem = newCompletelist.find((item) => item.id === id);
    // console.log(completeItem.isCompleted); //false
    

    if (completeItem.isCompleted) {
      setStyle(
        "line-through"
      );
    }
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
      alert("新增成功");
    }
    if (todoList.length < ref.current) {
      alert("刪除成功");
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
        style={style}
      />
    </div>
  );
}

export default App;
