import React, { Component } from 'react';
import '../css/BookReview.css'

export class AddBookReview extends Component {
    displayName = AddBookReview.name
    constructor(props) {
        super(props);
        this.state = {
            book: {},
            title: "Create",};
        this.handleSave = this.handleSave.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
    }

    handleSave(event) {
        const data = new FormData(event.target);
        fetch("api/Book/Create", {
            method: 'POST',
            body: data,
        }).then((response) => response.json())
            .then((responseJson) => {
                this.props.history.push("/fetchbookreviews");
            })       
     }

    handleCancel(e) {
        e.preventDefault();
        this.props.history.push("/fetchbookreviews");
    }


    render() {
        return (
            <form onSubmit={this.handleSave} className="AddBookReviewForm">
                <h1>Add New Book Review</h1>
                <div>
                    <input type="hidden" name="bookId" value={this.state.book.bookId} />
                </div>
                <div>
                    <label>Book Name:</label><br/>
                    <input type="text" name="bookName" className="AddBookInput" defaultValue={this.state.book.bookName} />
                    <br/>
                </div>
                <div>
                    <label>Author Name:</label><br />
                    <input type="text" name="authorName" className="AddBookInput" defaultValue={this.state.book.authorName} />
                    <br/>
                </div>
                <div>
                    <label>Review:</label><br />
                    <textarea maxlength="255" name="reviewText" placeholder="enter review text here" className="AddBookInput reviewTextBox" defaultValue={this.state.book.reviewText} />
                    <br/>
                </div>
                <div>
                    <label>Rating:</label><br />
                    <input type="number" step="0.5" name="rating" min="0" max="5" className="AddBookInput ratingPicker" defaultValue={this.state.book.rating}/>
                    <br/>
                </div>
                <div>
                    <label>Start Date:</label><br />
                    <input type="date" name="startDate" className="AddBookInput datePicker" defaultValue={this.state.book.startDate}/>
                    <br/>
                </div>
                <div>
                    <label>End Date:</label><br />
                    <input type="date" name="endDate" className="AddBookInput datePicker" defaultValue={this.state.book.endDate}/>
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