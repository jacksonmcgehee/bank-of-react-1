import React, {Component} from 'react'

class NewDebitForm extends Component {

    state = {
      newDebit: {
        amount: 0.00,
        description: '',
        date: Date.now(),
      },
    }

  handleInputChange = (event) => {
    const attribute = event.target.name
    let value = event.target.value

    if(attribute === 'amount') {
      value = Number(value)
    }

    const newDebit = {...this.state.newDebit}
    newDebit[attribute] = value

    this.setState({newDebit})
  }

  resetForm = () => {
    const newDebit = {...this.state.newDebit}
    this.setState({newDebit})
  }

  addNewDebit = (event) => {
    event.preventDefault()
    console.log('Add new debit called on form page.')
    this.props.addNewDebit(this.state.newDebit)
    this.resetForm()
  }

  render() {
    return (
        <div>
          <form onSubmit={this.addNewDebit}>

            <div>
              <span>Amount (USD) </span>
              <input
                  type="number"
                  name="amount"
                  placeholder="Amount"
                  value={this.state.newDebit.amount}
                  onChange={this.handleInputChange}/>
            </div>

            <div>
              <span>Description </span>
              <input
                  type="text"
                  name="description"
                  placeholder="Description"
                  value={this.state.newDebit.description}
                  onChange={this.handleInputChange}/>
            </div>

            <div>
              <input
                  type="submit"
                  value="Add New Debit"/>
            </div>

          </form>
        </div>
    )
  }
}

export default NewDebitForm