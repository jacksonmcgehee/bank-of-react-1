import React, { Component } from 'react'
import Credit from './Credit'

class CreditsList extends Component {
    render() {

        const creditComponents = this.props.credits.map((credit, index) => {
            return <Credit
                description={credit.description}
                amount={credit.amount}
                date={credit.date}
                key={index}/>
          })

        return (
            <div>
                Hello from the debist list.
                {creditComponents}
            </div>
        )
    }
}

export default CreditsList