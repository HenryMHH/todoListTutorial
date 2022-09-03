import React, { useState } from 'react';
import ButtonList2 from '../common/ButtonList2';

const Input = ({ submitHoldler }) => {
  const [input, setInput] = useState('');

  function clearInput() {
    setInput('');
  }

  return (
    <div>
      <input
        className="border-2 border-black-700 "
        onChange={(e) => setInput(e.target.value)}
        type="text"
        placeholder="請輸入代辦事項"
        value={input}
      />
      <ButtonList2
        className="mr-3 p-4 bg-blue-700 text-white hover:bg-blue-500"
        onClick={() => {
          submitHoldler(input, clearInput);
        }}
      >
        送出
      </ButtonList2>
    </div>
  );
};

export default Input;
