import React, { Component } from 'react';
import '../css/BookReview.css'

export class AddBookReview extends Component {
    displayName = AddBookReview.name
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <form className="AddBookReviewForm">
                <h1>Add New Book Review</h1>
                <div>
                    <label>Book Name:</label><br/>
                    <input type="text" className="AddBookInput" />
                    <br/>
                </div>
                <div>
                    <label>Author Name:</label><br/>
                    <input type="text" className="AddBookInput" />
                    <br/>
                </div>
                <div>
                    <label>Review:</label><br />
                    <input type="text" className="AddBookInput" />
                    <br/>
                </div>
                <div>
                    <label>Rating:</label><br />
                    <input type="text" className="AddBookInput" />
                    <br/>
                </div>
                <div>
                    <label>Start Date:</label><br />
                    <input type="text" className="AddBookInput" />
                    <br/>
                </div>
                <div>
                    <label>End Date:</label><br />
                    <input type="text" className="AddBookInput" />
                    <br/>
                </div>
            </form>
        );
    }
}