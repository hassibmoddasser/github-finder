import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Search extends Component {
  
  state = {
    text: ''
  };

  static propTypes = {
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    showClearButton: PropTypes.bool.isRequired
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit = (e) => {
    e.preventDefault();

    this.props.searchUsers(this.state.text);
    this.setState({ text: '' });
  }

  render() {
    return (
      <div className="grid grid-cols-1 gap-8 mb-8 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2">
        <div>
          <form onSubmit={this.onSubmit} autoComplete="off">
            <div className="form-control">
              <div className="relative">
                <input type="text" placeholder="Search" name="text" className="w-full bg-gray-200 pr-36 input input-lg" value={this.state.text} onChange={this.onChange} /> 
                <button type="submit" className="absolute top-0 right-0 w-32 rounded-l-none btn btn-lg">Go</button>
              </div>
            </div>
          </form>
        </div>

        {this.props.showClearButton && (
          <div>
            <button 
              className="btn btn-ghost btn-lg" 
              onClick={this.props.clearUsers}
            >Clear</button>
          </div>
        )}
      </div>
    );
  }
}

export default Search;