import React from "react";
import ButtonList2 from "../common/ButtonList2";

const Container = ({
  todoList,
  setTodolist,
  deleteHoldler,
  handleCompleteItem,
}) => {
  return (
    <div className="mt-5">
      <div>
        {todoList.map((item) => (
          <div className="display: flex py-5">
            <input
              onClick={() => handleCompleteItem(item.id)}
              type="checkbox"
            />

            <div className={item.isCompleted ? "line-through" : ""}>
              {item.content}
            </div>

            <div>
              <ButtonList2
                className="bg-rose-600 text-white hover:bg-rose-400"
                onClick={() => deleteHoldler(item.id)}
              >
                刪除
              </ButtonList2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Container;
