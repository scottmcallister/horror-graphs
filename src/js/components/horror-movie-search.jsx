import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from '../store';

export default class Horrormoviesearch extends Component{
    render() {
        return (
          <Provider store={store}>
            <div>
              <h1>Horror Movie Search</h1>
              <div className="search-box">
                <input id="search-input" placeholder="Search by title"></input>
                <button>Search</button>
              </div>
            </div>
          </Provider>
        );
    }
}
