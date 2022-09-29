import React from 'react';

export default function BaseModal({ children }) {
  return (
    <div className="absolute inset-0 bg-black/[.4] flex items-center justify-center">
      <div className="bg-white py-[25px] px-[50px]">{children}</div>
    </div>
  );
}
