import React, { Component } from "react";

export class SearchBar extends Component {
  render() {
    return (
      <form action="#">
        <input type="text" placeholder="Search" />
        <p>
          <input type="checkbox" /> Only show products in stock
        </p>
      </form>
    );
  }
}

export default SearchBar;
