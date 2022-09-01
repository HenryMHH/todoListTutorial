import React from 'react'

const ButtonList2 = ({className, children, ...rest}) => {
  return (
    <button
    className={`rounded-sm border border-solid border-black px-1 py-0.5 ${className}`}
    {...rest}
  >
    {children}
  </button>
  );
  
}

export default ButtonList2