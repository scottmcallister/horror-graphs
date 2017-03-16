import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from '../../store';
import Header from './components/Header';
import SearchResults from './components/SearchResults';

export default class SearchPage extends Component{
    render() {
        return (
          <Provider store={store}>
            <div>
                <Header />
                <SearchResults />
            </div>
          </Provider>
        );
    }
}
