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
                    <textarea  maxlength="255" placeholder="enter review text here"className="AddBookInput reviewTextBox" />
                    <br/>
                </div>
                <div>
                    <label>Rating:</label><br />
                    <input type="number" step="0.5" min="0" max="5" className="AddBookInput ratingPicker" />
                    <br/>
                </div>
                <div>
                    <label>Start Date:</label><br />
                    <input type="date" className="AddBookInput datePicker" />
                    <br/>
                </div>
                <div>
                    <label>End Date:</label><br />
                    <input type="date" className="AddBookInput datePicker" />
                    <br/>
                </div>
                <div>
                    <button type="submit" className="submitBtn btn">Save</button>
                    <button className="btn">Cancel</button>
                </div>
            </form>
        );
    }
}