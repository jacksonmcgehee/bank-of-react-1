import React, { Component } from 'react'

class LogIn extends Component {
  state = {
    user: {
      userName: '',
      password: ''
    }
  }

  handleSubmit = () => {

  }

  handleChange = () => {

  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="userName">User Name</label>
            <input
              type="text" name="userName" onChange={this.handleChange} value={this.state.user.userName} />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" />
          </div>
          <button>Log In</button>
        </form>
      </div>
    )
  }
}

export default LogIn