import React, { Component } from 'react';
import { BrowserRouter as Link } from 'react-router-dom'

import '../styles/Operations.css'

class Operations extends Component {

    constructor() {
        super()
        this.state = {
            transaction: {
                amount: 0,
                vendor: "",
                category: ""
            }
        }
    }

    handleInputChangeAmount = async (event) => {
        const value = event.target.value;
        await this.setState({
            transaction: {
                amount: parseInt(value),
                vendor: this.state.transaction.vendor,
                category: this.state.transaction.category,
            }
        })
    }
    handleInputChangeVendor = async (event) => {
        const value = event.target.value;
        await this.setState({
            transaction: {
                amount: this.state.transaction.amount,
                vendor: value,
                category: this.state.transaction.category,
            }
        })
    }
    handleInputChangeCategory = async (event) => {
        const value = event.target.value;
        await this.setState({
            transaction: {
                amount: this.state.transaction.amount,
                vendor: this.state.transaction.vendor,
                category: value,
            }
        })
    }

    addTransaction = async (withdrawOrDeposit) => {
        let transactionToSend = { ...this.state.transaction }
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
                <input id="amount-input" type="number" value={this.state.transaction.amount} placeholder="Amount" onChange={this.handleInputChangeAmount}></input>
                <input id="vendor-input" type="text" value={this.state.transaction.vendor} placeholder="Vendor" onChange={this.handleInputChangeVendor}></input>
                <input id="category-input" type="text" value={this.state.transaction.category} placeholder="Category" onChange={this.handleInputChangeCategory}></input>
                <button onClick={() => this.addTransaction(1)}>Deposit</button>
                <button onClick={() => this.addTransaction(0)}>Whitdraw</button>
            </div>
        );
    }
}

export default Operations;