import React, { Component } from 'react';

export class AddBookReview extends Component {
    displayName = AddBookReview.name
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <form className="AddBookReviewForm">
                <div>
                    <label>Book Name:</label><br/>
                    <input type="text" name="bookName" />
                </div>
                <div>
                    <label>Author Name:</label><br/>
                    <input type="text" name="authorName" />
                </div>
                <div>
                    <label>Review:</label><br />
                    <input type="text" name="reviewText" />
                </div>
                <div>
                    <label>Rating</label><br />
                    <input type="text" name="rating" />
                </div>
                <div>
                    <label>Start Date:</label><br />
                    <input type="text" name="startDate" />
                </div>
                <div>
                    <label>End Date:</label><br />
                    <input type="text" name="endDate" />
                </div>

            </form>
        );
    }
}