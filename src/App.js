import React, { Component } from "react";
import SearchBar from "./components/SearchBar";
import Table from "./components/Table";

export class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <Table data={this.props.data} />
      </div>
    );
  }
}

export default App;
