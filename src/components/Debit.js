import React, { Component } from 'react'

class Debit extends Component {
    render() {
        return (
            <div>
                <span>Description: {this.props.description}</span>
                <span> | </span>
                <span>Amount: {this.props.amount}</span>
                <span> | </span>
                <span>Date: {this.props.date}</span>
            </div>
        )
    }
}



export default Debit