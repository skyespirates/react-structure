import React, { Component } from "react";
import CategoryRow from "./CategoryRow";
import ProductRow from "./ProductRow";

export class Table extends Component {
  render() {
    const rows = [];
    let lastCategory = null;
    this.props.data.forEach((data) => {
      if (data.category !== lastCategory) {
        rows.push(<CategoryRow category={data.category} />);
      }
      rows.push(<ProductRow data={data} />);
      lastCategory = data.category;
    });
    return (
      <React.Fragment>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default Table;
