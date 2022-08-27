import React from 'react';
import Button from './Button';

export default function ListContainer({ todoList, onDeleteItem }) {
  return (
    <div className="mt-5">
      <div className="rounded-md border border-black w-[500px] max-w-[95vw] min-h-[300px] py-4 flex flex-col items-center overflow-hidden">
        {todoList.length > 0 &&
          todoList.map((item) => (
            <div className="w-[95%] border-b border-black flex justify-between pb-1 mb-4 animate-slide-in">
              <div>{item.message}</div>

              <div>
                <Button className="mr-3 bg-green-700 text-white">完成</Button>
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
