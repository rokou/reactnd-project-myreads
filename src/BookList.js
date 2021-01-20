import React, { Component } from 'react'
import Book from './Book.js'

class BookList extends Component {
  render() {
    return (
      <div className="bookshelf-books">
        <ol className="books-grid">
          {this.props.books.map((book) => (
            <Book key={book.id}
                  id={book.id}
                  title={book.title} 
                  authors={book.authors} 
                  cover={book.hasOwnProperty('imageLinks') ? book.imageLinks.thumbnail : ''}
                  shelf={book.shelf}
                  />
          ))}
        </ol>
      </div>
    )
  }
}

export default BookList