import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import DebitsList from './DebitsList'
import NewDebitForm from './NewDebitForm'

class DebitsPage extends Component {
    

    render() {
        
        return (
            <div>
                <h1>Hello from the debits page.</h1>
                <div>
                    <h2>Account Balance: {this.props.accountBalance}</h2>
                    <NewDebitForm addNewDebit={this.props.addNewDebit}/>
                    <h2>Debits:</h2>
                    <div>
                        List of individual debits.
                        <DebitsList debits={this.props.debits}/>
                    </div>
                </div>
                <Link to="/">Home</Link>
            </div>
        )
    }
}

export default DebitsPage