import React, { Component } from 'react';
import { BrowserRouter as Link } from 'react-router-dom'

import '../styles/Operations.css'

class Operations extends Component {

    constructor() {
        super()
        this.state = {
                amount: 0,
                vendor: "",
                category: ""
        }
    }

    handleInputChange = (event) => {
        const value = event.target.value;
        const key = event.target.name
        this.setState({
                [key]: value
        })
    }

    addTransaction = async (withdrawOrDeposit) => {
        let transactionToSend = { ...this.state }
        if (transactionToSend.amount == undefined || transactionToSend.amount <= 0 || transactionToSend.vendor == "" || transactionToSend.category == "") {
            return
        }
        if (!withdrawOrDeposit)
            transactionToSend.amount *= -1
        await this.setState({
            transaction: {
                amount: 0,
                vendor: "",
                category: ""
            }
        })
        this.props.addTransaction(transactionToSend)
    }

    render() {
        return (
            <div id="operations-container">
                <input id="amount-input" type="number" name="amount" value={this.state.amount} placeholder="Amount" onChange={this.handleInputChange}></input>
                <input id="vendor-input" type="text" name="vendor" value={this.state.vendor} placeholder="Vendor" onChange={this.handleInputChange}></input>
                <input id="category-input" type="text" name="category" value={this.state.category} placeholder="Category" onChange={this.handleInputChange}></input>
                <button onClick={() => this.addTransaction(1)}>Deposit</button>
                <button onClick={() => this.addTransaction(0)}>Whitdraw</button>
            </div>
        );
    }
}

export default Operations;