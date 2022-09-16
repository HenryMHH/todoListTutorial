import React, { useState } from 'react';
import Button from '../../common/Button';

export default function ListHead({ onCreateItem }) {
  const [value, setValue] = useState();
  return (
    <div>
      <input
        type="text"
        className="border border-black h-8 mr-3"
        onInput={(e) => setValue(e.target.value)}
        defaultValue={value}
      />
      <Button
        className="mr-3 p-4 bg-blue-700 text-white hover:bg-blue-500"
        onClick={() => onCreateItem(value)}
      >
        Add
      </Button>
    </div>
  );
}
