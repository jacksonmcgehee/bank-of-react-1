import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import CreditsList from './CreditsList'

class CreditsPage extends Component {
    

    render() {
        
        return (
            <div>
                <h1>Hello from the credits page.</h1>
                <div>
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