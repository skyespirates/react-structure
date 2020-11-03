import React, { Component } from 'react'

export class UserItem extends Component {
  render() {
    return <p>{this.props.user.fname} {this.props.user.lname} <span onClick={this.props.delUser.bind(this, this.props.user.id)}>x</span></p>
  }
}

export default UserItem
