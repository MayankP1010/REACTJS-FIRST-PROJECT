import React, { Component } from "react";
import Nav from './Nav';

 
const WordSearch = (WrappedComponent) => {
  return class extends Component {
    state = {
      word: "",
    };
 
    handleSearch = (e) => {
      this.setState({
        word: e.target.value,
      });
    };
 
    render() {
      return (
        <div className="search-box">
          <Nav />
          <br />
         
          <br />
          <input
            className="search"
            onChange={this.handleSearch}
            value={this.state.word}
            type="search"
            placeholder="Search"
          />
 
          <WrappedComponent word={this.state.word} />
        </div>
      );
    }
  };
};
 
export default WordSearch;