import React from 'react';
import Button from '../../common/Button';
import ListItem from '../ListItem';

export default function ListContainer({ todoList }) {
  return (
    <div className="mt-5">
      <div className="rounded-md border border-black w-[500px] max-w-[95vw] min-h-[300px] py-4 flex flex-col items-center overflow-hidden">
        {todoList.length > 0 &&
          todoList.map((item) => (
            <ListItem
              key={item.id}
              item={item}
            />
          ))}
      </div>
    </div>
  );
}
