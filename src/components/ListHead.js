import React, { useState } from 'react';

export default function ListHead({ onCreateItem }) {
  const [value, setValue] = useState();
  return (
    <div>
      <input
        type="text"
        className="border border-black h-8 mr-3"
        onInput={(e) => setValue(e.target.value)}
        value={value}
      />
      <button onClick={() => onCreateItem(value)}>Add</button>
    </div>
  );
}
