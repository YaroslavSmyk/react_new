import React, { Component, useState } from 'react';
import Clock from './Clock.jsx';

const App = () => {
  const [visible, setVisible] = useState(true);

  const toggele = () => {
    setVisible(!visible);
  };

  return (
    <div>
      <button onClick={toggele}>Toggele</button>
      <div className='container'>
      <div>{visible && <Clock location="London" offset={0} />}</div>
      <div>{visible && <Clock location="Kyiv" offset={2} />}</div>
      <div>
        {visible && <Clock location="New York" offset={-5} />}
      </div>
      </div>
    </div>
  );
};

export default App;
