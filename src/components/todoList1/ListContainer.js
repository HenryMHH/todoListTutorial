import React from 'react';
import Button from '../common/Button';

export default function ListContainer({
  todoList,
  onDeleteItem,
  onCompleteItem,
}) {
  return (
    <div className="mt-5">
      <div className="rounded-md border border-black w-[500px] max-w-[95vw] min-h-[300px] py-4 flex flex-col items-center overflow-hidden">
        {todoList.length > 0 &&
          todoList.map((item) => (
            <div
              className="w-[95%] border-b border-black flex justify-between pb-1 mb-4 animate-slide-in"
              key={item.id}
            >
              <div
                onClick={() => onCompleteItem(item.id)}
                className={
                  'cursor-pointer ' + (item.isCompleted ? 'line-through' : '')
                }
              >
                {item.message}
              </div>
              <div>
                <Button
                  className={
                    item.isCompleted
                      ? 'mr-3 bg-green-700 text-white cursor-default'
                      : 'mr-3 bg-gray-300 text-white cursor-default'
                  }
                >
                  完成
                </Button>
                <Button
                  className={
                    item.isCompleted
                      ? 'mr-3 bg-gray-300 text-white cursor-default'
                      : 'mr-3 bg-green-700 text-white cursor-default'
                  }
                >
                  未完成
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
