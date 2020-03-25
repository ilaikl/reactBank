import React, { Component } from 'react';
import { BrowserRouter as Link } from 'react-router-dom'

import '../styles/Transactions.css'

class Transaction extends Component {
    
    render() {
        let posOrNeg = this.props.transaction.amount>0 ? "green" : "red"
        return (
            <div className={"transaction-box "+posOrNeg}><span className="transaction-data">{this.props.transaction.amount}, {this.props.transaction.vendor}, {this.props.transaction.category}</span></div> //<button>Delete Transaction</button>
        )
    }
}



class Transactions extends Component {
    render() {
        return (
            <div id="transactions-container">
                {
                    this.props.transactions.map(transaction => {
                        return <Transaction transaction={transaction}/>
                    })
                }
            </div>
        );
    }
}

export default Transactions;