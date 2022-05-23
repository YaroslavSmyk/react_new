import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';

const rootElement = document.querySelector('#root');

const renderSeconds = (time) => {
  const seconds = new Date(time).getSeconds();
  const backgroundColor = seconds % 2 === 0 ? 'white': 'black';

  const textColor = seconds % 2 !== 0 ? 'white': 'black';

  const styles = {
    color: textColor,
    backgroundColor
  };

  const element = (
    <div className="seconds" style={styles}>{
      `Now is 
      ${seconds}`}
    </div>
  );

  ReactDOM.render(element, rootElement);
  // root.render(element);
}
renderSeconds(new Date());


setInterval(() => renderSeconds(new Date()), 1000);
