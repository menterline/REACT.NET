import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import '../css/BookReview.css'

export class BookReview extends Component {
    displayName = BookReview.name

    constructor(props) {
        super(props);
        this.state = { bookList: [], loading: true };

        fetch('api/Book/Index')
            .then(response => response.json())
            .then(data => {
                this.setState({ bookList: data, loading: false });
            });

        this.handleDelete = this.handleDelete.bind(this);
    }

    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : this.renderBookList(this.state.bookList);
        return (
            <div>
                <h1> Book Reviews </h1>
                <p>
                    <Link to="/addbookreview">Add New </Link>
                </p>
                {contents}
            </div >
        );
    }

    handleDelete(id) {
        const bookName = this.state.bookList.find(book => book.bookId === id).bookName
        if (!window.confirm("Do you want to delete the review for "
            + bookName + "?")) {
            return;
        }
        fetch("api/Book/Delete/" + id, {
            method: 'delete'
        }).then(data => {
            this.setState(
                {
                    bookList: this.state.bookList.filter((rec) => {
                        return (rec.bookId != id);
                    })
                });
        })
    }

    renderBookList(bookList) {
        return (
            <table className='bookTable' >
                <thead>
                    <tr className='bookTableHeading'>
                        <th></th>
                        <th>BookId</th>
                        <th>Book Name</th>
                        <th>Author Name</th>
                        <th>Review</th>
                        <th>Rating</th>
                        <th>Start Date</th>
                        <th>End Date</th>
                        <th />
                    </tr>
                </thead>
                <tbody>
                    {bookList.map(book => 
                        <tr key={book.bookId}>
                            <td></td>
                            <td>{book.bookId}</td>
                            <td>{book.bookName}</td>
                            <td>{book.authorName}</td>
                            <td>{book.reviewText}</td>
                            <td>{book.rating}</td>
                            <td>{book.startShortDate}</td>
                            <td>{book.endShortDate}</td>
                            <td>
                                <a >Edit</a> |
                                <a onClick={(id) => this.handleDelete(book.bookId)}>Delete</a>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        );
    }
}