import React from 'react';

export default function Button({ children, className, ...rest }) {
  return (
    <button
      className={`rounded-sm border border-solid border-black px-1 py-0.5 ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}
