import React, { Component } from 'react';

export class BookReview extends Component {
    displayName = BookReview.name

    constructor(props) {
        super(props);
        
    }

    render() {
        return (
            <div>
                <h1> Book Reviews </h1>
            </div>
        );
    }
}