import React from 'react';

export default React.createClass({
  render: function () {
    return (
      <div className="container">
        <h1>Horror Movie Search</h1>
        <div className="search-box">
          <input id="search-input" placeholder="Search by title"></input>
          <button>Search</button>
        </div>
      </div>
    );
  }
});
