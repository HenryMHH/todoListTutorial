import React from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Button from '../../common/Button';
import { todoList1Context } from '../TodoList1';
import BaseModal from './baseModal';

export default function Modal({ handleToggleModal, message, id }) {
  const [text, setText] = useState();
  const { handleUpdateItem } = useContext(todoList1Context);

  function handleOnChange(event) {
    const value = event.target.value;
    setText(value);
  }

  useEffect(() => {
    setText(message);
  }, [message]);

  function handleSubmit() {
    handleUpdateItem(id, text);
    handleToggleModal();
  }

  return (
    <BaseModal>
      <h1 className="text-[1.5rem] text-center mb-3">編輯內容</h1>
      <input
        className="border border-black h-8 mr-3 min-w-[300px]"
        type="text"
        defaultValue={text}
        onChange={handleOnChange}
      />
      <div className="pt-[2rem] text-center">
        <Button
          onClick={handleToggleModal}
          className="bg-rose-600 text-white mr-3"
        >
          取消
        </Button>
        <Button
          onClick={handleSubmit}
          className="mr-3 bg-green-700 text-white"
        >
          儲存
        </Button>
      </div>
    </BaseModal>
  );
}
