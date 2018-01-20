import React, { Component } from 'react'
import Debit from './Debit'

class DebitsList extends Component {
    render() {

        const debitComponents = this.props.debits.map((debit, index) => {
            return <Debit
                description={debit.description}
                amount={debit.amount}
                date={debit.date}
                key={index}/>
          })

        return (
            <div>
                Hello from the debist list.
                {debitComponents}
            </div>
        )
    }
}

export default DebitsList