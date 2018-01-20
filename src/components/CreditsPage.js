import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import CreditsList from './CreditsList'
import NewCreditForm from './NewCreditForm'

class CreditsPage extends Component {
    

    render() {
        
        return (
            <div>
                <h1>Hello from the credits page.</h1>
                <div>
                    <h2>Account Balance: {this.props.accountBalance}</h2>
                    <NewCreditForm addNewCredit={this.props.addNewCredit} />
                    <h2>Credits:</h2>
                    <div>
                        List of individual credits.
                        <CreditsList credits={this.props.credits}/>
                    </div>
                </div>
                <Link to="/">Home</Link>
            </div>
        )
    }
}

export default CreditsPage