import React, { Component } from 'react'
import UserItem from './UserItem'
export class Users extends Component {


  render() {
    return this.props.users.map((user) => <UserItem key={user.id} user={user} delUser={this.props.delUser} />)
  }
}

export default Users
