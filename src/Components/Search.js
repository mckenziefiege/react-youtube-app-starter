import React, { Component } from 'react'

class Search extends Component {
  state = {
    searchTerm: ""
  }

  changeHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render () {
    return (
      <div className="sidebar">
      <h1>Youtube Searchr</h1>
      <input onChange={this.changeHandler} value={this.state.searchTerm} size="80" type="text" name="searchTerm" placeholder="Search Youtube..." /><button onClick={() => this.props.searchHandler(this.state.searchTerm)}>Submit</button>
      </div>
    )
  }
}

export default Search;
