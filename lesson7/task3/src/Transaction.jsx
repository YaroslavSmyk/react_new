import React from 'react';
import moment from 'moment';

// const formatDate = (time) => moment(time).format('');
// const formatNumbers = (amount) => new Intl.NumberFormat([en - GB]);
// new Intl.NumberFormat('en-GB').format(amount);

const Transaction = ({ from, to, amount, rate, time }) => {
  return (
    <li className="transaction">
      <span className="transaction__date">{moment(time).format('DD MMM')}</span>
      <span className="transaction__time">{moment(time).format('hh:mm')}</span>
      <span className="transaction__assets">{from} → {to}</span>
      <span className="transaction__rate">{new Intl.NumberFormat('en-GB').format(rate)}</span>
      <span className="transaction__amount">
        {new Intl.NumberFormat('en-GB').format(amount)}
      </span>
    </li>
  );
};

export default Transaction;
