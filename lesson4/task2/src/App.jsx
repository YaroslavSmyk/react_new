import React from 'react';
import Clock from './Clock.jsx';

const App = () => {
  return (
    <>
    <Clock location="New York" offset={-5} />
    <Clock location="Kyiv" offset={2} />
    <Clock location="London" offset={0} />
    </>
    // <div className="clock">
    //   <div className="clock__location">New York</div>
    //   <div className="clock__time">7:00:51 AM</div>
    // </div>
  );
};

export default App;
