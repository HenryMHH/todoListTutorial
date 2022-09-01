import React, { useState } from "react";
import ButtonList2 from "../common/ButtonList2";
const Input = ({ inputHoldler, submitHoldler }) => {
  const [input, setInput] = useState("");
  return (
    <div>
      <input
        className="border-2 border-black-700 "
        onInput={(e) => setInput(e.target.value)}
        type="text"
        placeholder="請輸入代辦事項"
        value={input}
      />
      <ButtonList2
        className="mr-3 p-4 bg-blue-700 text-white hover:bg-blue-500"
        onClick={submitHoldler}
      >
        送出
      </ButtonList2>
    </div>
  );
};

export default Input;
