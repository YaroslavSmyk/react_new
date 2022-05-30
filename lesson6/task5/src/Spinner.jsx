import React from 'react';

const Spiner = (props) => {
  return (
    <span
      className="spinner"
      style={{ width: `${props.size}px`, height: `${props.size}px` }}
    ></span>
  );
};

export default Spiner;
