import React, { Component } from 'react';
import Transaction from './Transaction';

class TransactionsList extends Component {
  render() {
console.log(this.props)
   return (
       <ul className="transactions">
           {this.props.transactions.map((trans) => (
               <Transaction key={trans.id} {...trans}/>
           ))}
       </ul>

   )
  }
}

export default TransactionsList;
