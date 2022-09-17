import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import Button from '../../common/Button';
import Modal from '../Modal';
import { todoList1Context } from '../TodoList1';

export default function ListItem({ item }) {
  const { handleCompleteItem, handleDeleteItem } = useContext(todoList1Context);
  const [isShowModal, setIsShowModal] = useState(false);

  function handleToggleModal() {
    setIsShowModal(!isShowModal);
  }

  return (
    <>
      {isShowModal && (
        <Modal
          id={item.id}
          handleToggleModal={handleToggleModal}
          message={item.message}
        />
      )}
      <div
        className="w-[95%] border-b border-black flex justify-between pb-1 mb-4 animate-slide-in"
        key={item.id}
      >
        <div
          onClick={() => handleCompleteItem(item.id)}
          className={
            'cursor-pointer ' + (item.isCompleted ? 'line-through' : '')
          }
        >
          {item.message}
        </div>
        <div>
          <Button
            className="mr-3 p-4 bg-blue-700 text-white hover:bg-blue-500"
            onClick={() => handleToggleModal()}
          >
            編輯
          </Button>
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
            onClick={() => handleDeleteItem(item.id)}
          >
            刪除
          </Button>
        </div>
      </div>
    </>
  );
}
