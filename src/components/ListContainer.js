import React from 'react';
import Button from './Button';

export default function ListContainer({
  todoList,
  onDeleteItem,
  onCompleteItem,
  style,
}) {
  return (
    <div className="mt-5">
      <div className="rounded-md border border-black w-[500px] max-w-[95vw] min-h-[300px] py-4 flex flex-col items-center overflow-hidden">
        {todoList.length > 0 &&
          todoList.map((item) => (
            <div className={style} key={item.id}>
              {/**TODO: 如果item的isCompleted為true，則下方的div tag會有line-through的className */}
              <div>{item.message}</div>

              <div>
                {/**
                 * TODO: 這個onCompleteItem 少了 id，所以會造成findIndex找不到item
                 */}
                <Button
                  className="mr-3 bg-green-700 text-white "
                  onClick={onCompleteItem}
                >
                  完成
                </Button>
                <Button
                  className="bg-rose-600 text-white"
                  onClick={() => onDeleteItem(item.id)}
                >
                  刪除
                </Button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
