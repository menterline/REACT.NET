import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchDataComponents';
import { Counter } from './components/Counter';
import { BookReview } from './components/BookReview';
import { AddBookReview } from './components/AddBookReview';

export default class App extends Component {
    displayName = App.name

    render() {
        return (
            <Layout>
                <Route exact path='/' component={Home} />
                <Route path='/counter' component={Counter} />
                <Route path='/fetchdata' component={FetchData} />
                <Route path='/fetchbookreviews' component={BookReview} />
                <Route path='/addbookreview' component={AddBookReview} />
            </Layout>
        );
    }
}
