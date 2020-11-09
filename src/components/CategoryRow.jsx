import React, { Component } from "react";

export class CategoryRow extends Component {
  render() {
    return (
      <tr>
        <td colSpan="2">{this.props.category}</td>
      </tr>
    );
  }
}

export default CategoryRow;
