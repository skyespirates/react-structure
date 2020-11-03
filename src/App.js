import React, { Component } from 'react'
import './App.css'

//  Components
import Users from './components/Users'
import AddUser from './components/AddUser'
export class App extends Component {
  state = {
    users: [
      {
        id: 1,
        fname: "Akashi",
        lname: "Seijurou"
      },
      {
        id: 2,
        fname: "Aomine",
        lname: "Daiki"
      },
      {
        id: 3,
        fname: "Midorima",
        lname: "Shintarou"
      },
    ]
  }
  //  Add User
  id = 4;
  addUser = (fname, lname) => {
    const newUser = {
      id: this.id,
      fname: fname,
      lname: lname
    }
    this.setState({users: [...this.state.users, newUser]})
    this.id++;
  }
  //  Delete User
  delUser = (id) => {
    this.setState({users: [...this.state.users.filter(user => user.id !== id)]})
  }
  render() {
    return (
      <div className="App">
        <AddUser addUser={this.addUser} />
        <Users users={this.state.users} delUser={this.delUser} />
      </div>
    )
  }
}

export default App
