import React from 'react';
import Button from '../../common/Button';

export default function Modal() {
  return (
    <div className="absolute inset-0 bg-black/[.4] flex items-center justify-center">
      <div className="bg-white py-[25px] px-[50px]">
        <h1 className="text-[1.5rem] text-center mb-3">編輯內容</h1>
        <input
          className="border border-black h-8 mr-3 min-w-[300px]"
          type="text"
        />
        <div className="pt-[2rem] text-center">
          <Button className="bg-rose-600 text-white mr-3">取消</Button>
          <Button className="mr-3 bg-green-700 text-white">儲存</Button>
        </div>
      </div>
    </div>
  );
}
