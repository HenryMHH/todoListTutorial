import React from "react";
import ButtonList2 from "../common/ButtonList2";

const Container = ({ todoList, setTodolist }) => {
  return (
    <div className="mt-5">
      <div className="display: flex">
        <input type="checkbox" />
        <p>hello</p>
        <ButtonList2 className="bg-rose-600 text-white hover:bg-rose-400">
          刪除
        </ButtonList2>
      </div>
    </div>
  );
};

export default Container;
