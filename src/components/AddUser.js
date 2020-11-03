import React, { Component } from 'react'

export class AddUser extends Component {
  state = {
    fname: "",
    lname: ""
  }
  onChange = (e) => this.setState( { [e.target.name]: e.target.value } )
  onSubmit = (e) => {
    e.preventDefault();
    this.props.addUser(this.state.fname, this.state.lname);
    this.setState({fname: "", lname: ""})
  }
  render() {
    return (
      <form onSubmit={this.onSubmit} autoComplete="off" >
        <input type="text" name="fname" value={this.state.fname} onChange={this.onChange} placeholder="First Name" />
        <input type="text" name="lname" value={this.state.lname} onChange={this.onChange} placeholder="Last Name" />
        <input type="submit" value="Submit"/>
      </form>
    )
  }
}

export default AddUser
