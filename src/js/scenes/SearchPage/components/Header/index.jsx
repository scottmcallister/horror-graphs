import React, { Component } from 'react';

export default class Header extends Component{
    render() {
        return (
          <div>
            <h1>Horror Movie Search</h1>
            <div className="search-box">
              <input id="search-input" placeholder="Search by title"></input>
              <button>Search</button>
            </div>
          </div>
        );
    }
}
