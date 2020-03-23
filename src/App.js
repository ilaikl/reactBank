import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Transactions from './components/Transactions';
import Operations from './components/Operations';
import axios from 'axios';

class App extends Component {
  constructor() {
    super()
    this.state = {
      transactions: [
        // { amount: 3200, vendor: "Elevation", category: "Salary" },
        // { amount: -7, vendor: "Runescape", category: "Entertainment" },
        // { amount: -20, vendor: "Subway", category: "Food" },
        // { amount: -98, vendor: "La Baguetterie", category: "Food" }
      ]
    }
  }

  componentDidMount() {
    axios.get('http://localhost:4200/transactions').then(res => {
      this.setState({ transactions: res.data })
    })
  }

  addTransaction = async (transaction) => {
    axios.post('http://localhost:4200/transaction', transaction).then(res => {
      this.setState({ transactions: res.data })
    })


  }
  render() {
    let balance = 0
    this.state.transactions.forEach(t => {
      balance += t.amount
    })
    return (
      <Router>
        <div className="App">
          <div id="main-links">
            <Link to="/">Home</Link>
            <Link to="/transactions">Transactions</Link>
            <Link to="/operations">Operations</Link>
          </div>
          <div id="balance-box">Balance: {balance}</div>
          <Route exact path="/" render={() => <div>Hello World!</div>} />
            
          <Route exact path="/transactions" render={() => <div>
            <Transactions transactions={this.state.transactions} />  </div>} />
            
          <Route exact path="/operations" render={() => <div>
            <Operations addTransaction={this.addTransaction} />  </div>} />
        </div>
      </Router>
    );
  }
}

export default App;
