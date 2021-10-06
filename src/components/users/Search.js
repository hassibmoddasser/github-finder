import React, { Component } from 'react';

class Search extends Component {
  
  state = {
    text: ''
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit = (e) => {
    e.preventDefault();

    console.log(this.state.text);
  }

  render() {
    return (
      <div className="w-3/6 mb-10">
        <form onSubmit={this.onSubmit} autoComplete="off">
          <div className="form-control">
            <div className="relative">
              <input type="text" placeholder="Search" name="text" className="w-full bg-gray-200 pr-36 input input-lg" value={this.state.text} onChange={this.onChange} /> 
              <button type="submit" className="absolute top-0 right-0 w-32 rounded-l-none btn btn-lg">Go</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Search;