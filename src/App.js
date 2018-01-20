import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import axios from 'axios'

import Home from './components/Home'
import UserProfile from './components/UserProfile'
import LogIn from './components/Login'
import DebitsPage from './components/DebitsPage'
import CreditsPage from './components/CreditsPage'

class App extends Component {
  state = {
    accountBalance: 14568.27,
    currentUser: {
      userName: 'bob_loblaw',
      memberSince: '08/23/99'
    },
    debits: [],
    credits: []
  }

  mockLogIn = (logInInfo) => {
    const newUser = { ...this.state.currentUser }
    newUser.userName = logInInfo.userName
    this.setState({ currentUser: newUser })
  }

  getDebitData = () => {
    axios.get('http://localhost:4000/debits')
    .then((response) => {
      const debits = response.data
      this.setState({debits})
    })
  }

  getCreditData = () => {
    axios.get('http://localhost:4000/credits')
    .then((response) => {
      const credits = response.data
      this.setState({credits})
    })
  }

  componentWillMount() {
    this.getDebitData()
    this.getCreditData()
  }

  render() {
    console.log(Date.now())

    const HomeComponent = () => (
      <Home
        accountBalance={this.state.accountBalance} />
    )

    const UserProfileComponent = () => (
      <UserProfile
        userName={this.state.currentUser.userName}
        memberSince={this.state.currentUser.memberSince} />
    )

    const LogInComponent = () => (
      <LogIn
        user={this.state.currentUser}
        mockLogIn={this.mockLogIn}
        {...this.props} />
    )

    const DebitsPageComponent = () => (
      <DebitsPage
        debits={this.state.debits} />
    )

    const CreditsPageComponent = () => (
      <CreditsPage
        credits={this.state.credits} />
    )

    return (
      <Router>
        <Switch>
          <Route exact path="/" render={HomeComponent} />
          <Route exact path="/userProfile" render={UserProfileComponent} />
          <Route exact path="/login" render={LogInComponent} />
          <Route exact path="/debits" render={DebitsPageComponent} />
          <Route exact path="/credits" render={CreditsPageComponent} />
        </Switch>
      </Router>
    );
  }
}

export default App;
