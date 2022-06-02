import React from 'react';

// in: obj (suze: number)
// output: jsx
const Spiner = (props) => {
  return (
    <span
      className="spinner"
      style={{ width: `${props.size}px`, height: `${props.size}px` }}
    ></span>
  );
};

export default Spiner;
